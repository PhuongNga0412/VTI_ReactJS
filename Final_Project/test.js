const BASE_API = "https://65f199e5034bdbecc763230d.mockapi.io/";
const contentDiv = document.querySelector(".content");
const createFormDiv = document.querySelector(".create-form");
const createFormDivUser = document.querySelector(".create-form-user");

const editFormDiv = document.querySelector(".edit-form");
const editFormDivUser = document.querySelector(".edit-form-user");

function handleUser() {
    fetchAndDisplay(
        "https://65f199e5034bdbecc763230d.mockapi.io/user",
        generateUserCard
    );
}

function handleProduct() {
    fetchAndDisplay(
        "https://65f199e5034bdbecc763230d.mockapi.io/products",
        generateProductListCard
    );
}

function fetchAndDisplay(url, cardGenerator) {
    const contentDiv = document.querySelector(".content");
    contentDiv.innerHTML = `<h1>Loading...</h1>`;

    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            return response.json();
        })
        .then((data) => {
            contentDiv.innerHTML = data.map(cardGenerator).join("");
        })
        .catch((error) => {
            contentDiv.innerHTML = `<h1>${error}</h1>`;
        });
}

function generateUserCard(userInfo) {
    return `
        <div class='card'>
            <p>Name: ${userInfo.name}</p>
            <p>Email: ${userInfo.email}</p>
            <p>Address: ${userInfo.address}</p>
            <p>Phone: ${userInfo.phone}</p>
            <button onclick='showDetailUser(${JSON.stringify(
                userInfo
            )})'>Show Detail</button>
            <button onclick='openEditUserForm(${JSON.stringify(
                userInfo
            )})'>Edit</button>
            <button onclick='handleDeleteUser(${JSON.stringify(
                userInfo
            )})'>Delete</button>
        </div>
    `;
}
const showDetailUser = (user) => {
    const userInfoDiv = document.getElementById("userInfo");
    const userString = JSON.stringify(user);
    userInfoDiv.innerHTML = `
      <h2>${user.name}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Address</strong> ${user.address}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <button onclick='logUserInfo(${userString})'>Close</button>
    `;
    document.getElementById("modal").style.display = "block";
};

function generateProductListCard(product) {
    return `
        <div class='card'>
            <img class='product-image' src='${product.productImage}' />
            <p>Name: ${product.productName}</p>
            <p>Type: ${product.productType}</p>
            <p>Price: ${product.productPrice}</p>

            <button onclick='showDetailProduct(${JSON.stringify(
                product
            )})'>Show Detail</button>
            <button onclick='openEditProductForm(${JSON.stringify(
                product
            )})'>Edit</button>      
            <button onclick='handleDeleteProduct(${JSON.stringify(
                product.id
            )})'>Delete</button>  
        </div>
    `;
}
const showDetailProduct = (product) => {
    const userInfoDiv = document.getElementById("userInfo");
    const userString = JSON.stringify(product);
    userInfoDiv.innerHTML = `
    <div class="detail">
        <h2>Products</h2>
        <img class='product-image' src='${product.productImage}' />
        <p>Product Name: ${product.productName}</p>
        <p>Product Type: ${product.productType}</p>
        <p>Product Price: ${product.productPrice}</p>
        <p>Is Used: <input type='checkbox' ${product.isUsed && "checked"} /></p>
        <p>Count In Stock: ${product.countInStock}</p>
        <p>Discount: ${product.discount}%</p>
        <button onclick='logUserInfo(${userString})'>Close</button>
    </div>
    `;
    document.getElementById("modal").style.display = "block";
};

// ================================ CREATE =====================================================================

const createProduct = async (newProduct) => {
    const res = await fetch(
        "https://65f199e5034bdbecc763230d.mockapi.io/products",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        }
    );
    return res.ok;
};

const showCreateProductForm = () => {
    // contentDiv.innerHTML = "";
    createFormDiv.style.display = "block";
};

const handleCancelAdd = () => {
    // clear current form values
    createFormDiv.style.display = "none";
};

const handleAddProduct = async () => {
    // get form data
    const productName = document.getElementById("product-name").value;
    const productType = document.getElementById("product-type").value;
    const productPrice = document.getElementById("product-price").value;
    const productImage = document.getElementById("product-image").value;
    const isUsed = document.getElementById("is-used").checked;
    const countInStock = document.getElementById("count-in-stock").value;
    const discount = document.getElementById("discount").value;

    const newProduct = {
        productName,
        productType,
        productPrice,
        productImage,
        isUsed,
        countInStock,
        discount,
    };

    console.log({ newProduct });

    // call create-product api
    const isCreated = await createProduct(newProduct);

    if (!isCreated) {
        const errorStatus = document.createElement("h2");
        errorStatus.innerText = "Create Failed";
        errorStatus.style.color = "red";
        createFormDiv.appendChild(errorStatus);
    } else {
        // reload the page when creating successfully
        location.reload();
    }
};
// ---------------------------------------------------------------------------------------------
const createUser = async (newUser) => {
    const res = await fetch(
        "https://65f199e5034bdbecc763230d.mockapi.io/user",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUser),
        }
    );
    return res.ok;
};

const showCreateUserForm = () => {
    // contentDiv.innerHTML = "";
    createFormDivUser.style.display = "block";
};

const handleCancelAddUser = () => {
    // clear current form values
    createFormDivUser.style.display = "none";
};

const handleAddUser = async () => {
    // get form data
    const name = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const address = document.getElementById("user-address").value;
    const phone = document.getElementById("user-phone").value;

    const newUser = {
        name,
        email,
        address,
        phone,
    };

    console.log({ newUser });

    // call create-product api
    const isCreated = await createUser(newUser);

    if (!isCreated) {
        const errorStatus = document.createElement("h2");
        errorStatus.innerText = "Create Failed";
        errorStatus.style.color = "red";
        createFormDivUser.appendChild(errorStatus);
    } else {
        // reload the page when creating successfully
        location.reload();
    }
};

// ================================ EDIT ======================================================================
const editProduct = async (updatedProduct) => {
    const res = await fetch(
        `https://65f199e5034bdbecc763230d.mockapi.io/products/${updatedProduct.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProduct),
        }
    );
    return res.ok;
};

const openEditProductForm = (selectedProduct) => {
    const editFormDiv = document.querySelector(".edit-form");

    // set product value into the edit-form
    document.getElementById("edit-product-name").value =
        selectedProduct.productName;
    document.getElementById("edit-product-type").value =
        selectedProduct.productType;
    document.getElementById("edit-product-price").value =
        selectedProduct.productPrice;
    document.getElementById("edit-product-image").value =
        selectedProduct.productImage;
    document.getElementById("edit-is-used").checked = selectedProduct.isUsed;
    document.getElementById("edit-count-in-stock").value =
        selectedProduct.countInStock;
    document.getElementById("edit-discount").value = selectedProduct.discount;

    // store the selected product id
    localStorage.setItem("selected-product-id", selectedProduct.id);

    // sessionStorage
    // sessionStorage.setItem('selected-product-id', selectedProduct.id)

    editFormDiv.style.display = "block";
};

const handleCancelEdit = (event) => {
    console.log(event);
    event.preventDefault();
    editFormDiv.style.display = "none";
};

const handleEditProduct = async () => {
    // get edit-form data
    const productName = document.getElementById("edit-product-name").value;
    const productType = document.getElementById("edit-product-type").value;
    const productPrice = document.getElementById("edit-product-price").value;
    const productImage = document.getElementById("edit-product-image").value;
    const isUsed = document.getElementById("edit-is-used").checked;
    const countInStock = document.getElementById("edit-count-in-stock").value;
    const discount = document.getElementById("edit-discount").value;

    const updatedProduct = {
        id: localStorage.getItem("selected-product-id"),
        productName,
        productType,
        productPrice,
        productImage,
        isUsed,
        countInStock,
        discount,
    };

    // call edit api
    const isEdited = await editProduct(updatedProduct);

    if (isEdited) {
        location.reload();
    } else {
        const editFormDiv = document.querySelector(".edit-form");
        const errorStatus = document.createElement("h2");
        errorStatus.innerText = "Create Failed";
        errorStatus.style.color = "red";
        editFormDiv.appendChild(errorStatus);
    }
};
// ---------------------------------------------------------------------------------------------

const editUser = async (updatedUser) => {
    const res = await fetch(
        `https://65f199e5034bdbecc763230d.mockapi.io/user/${updatedUser.id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedUser),
        }
    );
    return res.ok;
};

const openEditUserForm = (selectedUser) => {
    const editFormDivUser = document.querySelector(".edit-form-user");

    // set product value into the edit-form
    document.getElementById("edit-user-name").value = selectedUser.name;
    document.getElementById("edit-user-email").value = selectedUser.email;
    document.getElementById("edit-user-address").value = selectedUser.address;
    document.getElementById("edit-user-phone").value = selectedUser.phone;

    // store the selected product id
    localStorage.setItem("selected-user-id", selectedUser.id);

    // sessionStorage
    // sessionStorage.setItem('selected-product-id', selectedProduct.id)

    editFormDivUser.style.display = "block";
};

const handleCancelEditUser = (event) => {
    console.log(event);
    event.preventDefault();
    editFormDivUser.style.display = "none";
};

const handleEditUser = async () => {
    // get edit-form data
    const name = document.getElementById("edit-user-name").value;
    const email = document.getElementById("edit-user-email").value;
    const address = document.getElementById("edit-user-address").value;
    const phone = document.getElementById("edit-user-phone").value;

    const updatedUser = {
        id: localStorage.getItem("selected-user-id"),
        name,
        email,
        address,
        phone,
    };

    // call edit api
    const isEdited = await editUser(updatedUser);

    if (isEdited) {
        location.reload();
    } else {
        const editFormDivUser = document.querySelector(".edit-form-user");
        const errorStatus = document.createElement("h2");
        errorStatus.innerText = "Create Failed";
        errorStatus.style.color = "red";
        editFormDivUser.appendChild(errorStatus);
    }
};

// ================================ DELETE =====================================================================
const deleteProduct = async (productId) => {
    const res = await fetch(`${BASE_API}/products/${productId}`, {
        method: "DELETE",
    });
    return res.ok;
};

const handleDeleteProduct = async (productId) => {
    const isDeleted = await deleteProduct(productId);

    if (!isDeleted) {
        const productListDiv = document.querySelector(".product-list");
        const errorStatus = document.createElement("h2");
        errorStatus.innerText = "Create Failed";
        errorStatus.style.color = "red";
        productListDiv.appendChild(errorStatus);
    } else {
        // reload the page when creating successfully
        location.reload();
    }
};
const deleteUser = async (userId) => {
    const res = await fetch(`${BASE_API}/user/${userId}`, {
        method: "DELETE",
    });
    return res.ok;
};

const handleDeleteUser = async (userId) => {
    const isDeleted = await deleteUser(userId);

    if (!isDeleted) {
        const userListDiv = document.querySelector(".user-list");
        const errorStatus = document.createElement("h2");
        errorStatus.innerText = "Create Failed";
        errorStatus.style.color = "red";
        userListDiv.appendChild(errorStatus);
    } else {
        // reload the page when creating successfully
        location.reload();
    }
};

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

function logUserInfo(user) {
    closeModal();
}
