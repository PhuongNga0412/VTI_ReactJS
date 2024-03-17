// Global variables
const BASE_API = "https://65f199e5034bdbecc763230d.mockapi.io/";
const contentDiv = document.querySelector(".content"); // k có, trả về null
const createFormDiv = document.querySelector(".create-form"); // k có, trả về null
const editFormDiv = document.querySelector(".edit-form"); // k có, trả về null
const detailModalDiv = document.querySelector(".detail-modal"); // k có, trả về null

const handleProduct = async () => {
    const res = await fetch(`${BASE_API}/products`);
    return res.json();
};

const getProductById = async (productId) => {
    const res = await fetch(`${BASE_API}/products/${productId}`);
    return res.json();
};

const createProduct = async (newProduct) => {
    const res = await fetch(`${BASE_API}/products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
    });
    return res.ok;
};

const generateProductCard = (product, index) => {
    return `
        <div class='product-card'>
            <h2 class='product-index'>${index}</h2>
            <hr />
            <img class='product-image' src='${product.productImage}' />
            <p>Name: ${product.productName}</p>
            <p>Type: ${product.productType}</p>
            <p>Price: ${product.productPrice}</p>
            <div class='actions'>
                <button onclick='openProductDetailModal(${JSON.stringify(
                    product.id
                )})'>View Detail</button>
                <button onclick='openEditProductForm(${JSON.stringify(
                    product
                )})'>Edit</button>
                <button onclick='handleDeleteProduct(${JSON.stringify(
                    product.id
                )})'>Delete</button>
            </div>
        </div>
    `;
};

const displayProductList = async () => {
    contentDiv.innerHTML = "<h1>Loading...</h1>";
    const productList = await handleProduct();
    console.log({ productList });
    if (productList.length > 0) {
        contentDiv.innerHTML = `
        <div class='product-list'>
            ${productList.map((product, index) =>
                generateProductCard(product, index)
            )}
        </div>
      `;
    } else {
        contentDiv.innerHTML = "<h1>No Product</h1>";
    }
};

const showCreateProductForm = () => {
    contentDiv.innerHTML = "";
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

const closeDetailModal = () => {
    detailModalDiv.style.display = "none";
};

const openProductDetailModal = async (selectedProductId) => {
    detailModalDiv.style.display = "block";
    detailModalDiv.innerHTML = "<h2>Loading Detail...</h2>";

    const productDetail = await getProductById(selectedProductId);

    console.log({ productDetail });

    detailModalDiv.innerHTML = `
      <div class='product-detail'>
          <img class='product-image' src='${productDetail.productImage}' />
          <p>Product Name: ${productDetail.productName}</p>
          <p>Product Type: ${productDetail.productType}</p>
          <p>Product Price: ${productDetail.productPrice}</p>
          <p>Is Used: <input type='checkbox' ${
              productDetail.isUsed && "checked"
          } /></p>
          <p>Count In Stock: ${productDetail.countInStock}</p>
          <p>Discount: ${productDetail.discount}%</p>
          <button onclick='closeDetailModal()'>close</button>
      </div>
  `;
};

// function closeModal() {
//     document.getElementById("modal").style.display = "none";
// }

// function logUserInfo(user) {
//     closeModal();
// }
displayProductList();
