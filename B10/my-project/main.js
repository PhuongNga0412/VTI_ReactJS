const baseAPI = "https://65e85df24bb72f0a9c4f1308.mockapi.io/api";
const getAllProducts = async () => {
    const data = await fetch(`${baseAPI}/products`);
    return data.json();
};
const getProductDetail = async (id) => {
    const data = await fetch(`${baseAPI}/products/${id}`);
    return data.json();
};
const getProduct = async (id) => {};
const createProduct = async (data) => {};
const updateProduct = async (data) => {};
const deleteProduct = async (id) => {};

const handleViewDetail = async (productId) => {
    console.log({ productId });
    const productDetail = await getProductDetail(productId);
    console.log({ productDetail });
};

const handleAdd = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const productName = document.getElementById("product-name").value;
    const productType = document.getElementById("product-type").value;
    const price = document.getElementById("product-price").value;
    const productImage = document.getElementById("product-img").value;
    const data = {
        productName,
        productType,
        price,
        productImage,
    };
    console.log({ data }); // gọi API create
    createProduct(data);
};

const generateProductCard = (product, index) => {
    return `
    <div class="product-card">
        <h2>${index}</h2>
        <img src='${product.productImage}'/>
        <p>Product Name: ${product.productName}</p>
        <p>Product Type: ${product.productType}</p>
        <p>Price: ${product.price}</p>
        <button onclick="handleViewDetail(${JSON.stringify(
            product.id
        )})">View Detail</button>
    </div>
    `;
};

const generateProductCardList = (productList) => {
    return `
    <div class="product-list-content">
    ${productList
        .map((product, index) => generateProductCard(product, index))
        .join("")}
    </div>`;
};

// show loading
const productListContainerDiv = document.querySelector(
    ".product-list-container"
);
productListContainerDiv.innerHTML = "<h1>Loading...</h1>";

getAllProducts()
    .then((data) => {
        console.log({ data });
        productListContainerDiv.innerHTML = generateProductCardList(data);
    })
    .catch((error) => {
        productListContainerDiv.innerHTML = `error`;
    });
