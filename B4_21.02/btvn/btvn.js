// ========= users ============
const users = [
    {
        id: 1,
        name: "John Smith",
        email: "john.smith@example.com",
        age: 35,
        city: "New York",
    },
    {
        id: 2,
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        age: 28,
        city: "Los Angeles",
    },
    {
        id: 3,
        name: "Michael Brown",
        email: "michael.brown@example.com",
        age: 42,
        city: "Chicago",
    },
    {
        id: 4,
        name: "Emma Davis",
        email: "emma.davis@example.com",
        age: 31,
        city: "Houston",
    },
    {
        id: 5,
        name: "Sophia Wilson",
        email: "sophia.wilson@example.com",
        age: 25,
        city: "Phoenix",
    },
    {
        id: 6,
        name: "Daniel Martinez",
        email: "daniel.martinez@example.com",
        age: 40,
        city: "San Antonio",
    },
    {
        id: 7,
        name: "Olivia Anderson",
        email: "olivia.anderson@example.com",
        age: 29,
        city: "San Diego",
    },
    {
        id: 8,
        name: "Alexander Thomas",
        email: "alexander.thomas@example.com",
        age: 38,
        city: "Dallas",
    },
    {
        id: 9,
        name: "Ava Taylor",
        email: "ava.taylor@example.com",
        age: 33,
        city: "Philadelphia",
    },
    {
        id: 10,
        name: "William White",
        email: "william.white@example.com",
        age: 27,
        city: "San Francisco",
    },
    {
        id: 11,
        name: "Mia Harris",
        email: "mia.harris@example.com",
        age: 45,
        city: "Austin",
    },
    {
        id: 12,
        name: "James Martin",
        email: "james.martin@example.com",
        age: 26,
        city: "Seattle",
    },
    {
        id: 13,
        name: "Charlotte Garcia",
        email: "charlotte.garcia@example.com",
        age: 39,
        city: "Denver",
    },
    {
        id: 14,
        name: "Benjamin Rodriguez",
        email: "benjamin.rodriguez@example.com",
        age: 32,
        city: "Portland",
    },
    {
        id: 15,
        name: "Amelia Martinez",
        email: "amelia.martinez@example.com",
        age: 30,
        city: "Atlanta",
    },
    {
        id: 16,
        name: "Ethan Walker",
        email: "ethan.walker@example.com",
        age: 36,
        city: "Miami",
    },
    {
        id: 17,
        name: "Isabella King",
        email: "isabella.king@example.com",
        age: 24,
        city: "Detroit",
    },
    {
        id: 18,
        name: "Abigail Green",
        email: "abigail.green@example.com",
        age: 34,
        city: "Minneapolis",
    },
    {
        id: 19,
        name: "Liam Adams",
        email: "liam.adams@example.com",
        age: 41,
        city: "Tampa",
    },
    {
        id: 20,
        name: "Grace Scott",
        email: "grace.scott@example.com",
        age: 37,
        city: "Boston",
    },
];

// ========= products ==========

const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
    { id: 2, name: "Smartphone", category: "Electronics", price: 699.99 },
    { id: 3, name: "Headphones", category: "Electronics", price: 149.99 },
    { id: 4, name: "Running Shoes", category: "Sports", price: 89.99 },
    { id: 5, name: "Yoga Mat", category: "Sports", price: 29.99 },
    { id: 6, name: "Dumbbells", category: "Sports", price: 49.99 },
    { id: 7, name: "Coffee Maker", category: "Kitchen", price: 79.99 },
    { id: 8, name: "Blender", category: "Kitchen", price: 39.99 },
    { id: 9, name: "Toaster", category: "Kitchen", price: 29.99 },
    { id: 10, name: "Desk Lamp", category: "Home", price: 19.99 },
    { id: 11, name: "Throw Pillow", category: "Home", price: 14.99 },
    { id: 12, name: "Picture Frame", category: "Home", price: 24.99 },
    { id: 13, name: "Watch", category: "Accessories", price: 199.99 },
    { id: 14, name: "Sunglasses", category: "Accessories", price: 129.99 },
    { id: 15, name: "Wallet", category: "Accessories", price: 49.99 },
    { id: 16, name: "Backpack", category: "Bags", price: 79.99 },
    { id: 17, name: "Tote Bag", category: "Bags", price: 39.99 },
    { id: 18, name: "Messenger Bag", category: "Bags", price: 59.99 },
    { id: 19, name: "Gaming Mouse", category: "Gaming", price: 49.99 },
    { id: 20, name: "Gaming Keyboard", category: "Gaming", price: 69.99 },
];

// ======== orders ===========
const orders = [
    {
        id: 1,
        userId: 1,
        productId: 2,
        quantity: 2,
        date: "2024-02-21T08:00:00Z",
    },
    {
        id: 2,
        userId: 2,
        productId: 3,
        quantity: 1,
        date: "2024-02-20T10:30:00Z",
    },
    {
        id: 3,
        userId: 3,
        productId: 1,
        quantity: 3,
        date: "2024-02-19T15:45:00Z",
    },
    {
        id: 4,
        userId: 4,
        productId: 4,
        quantity: 2,
        date: "2024-02-18T12:15:00Z",
    },
    {
        id: 5,
        userId: 5,
        productId: 5,
        quantity: 1,
        date: "2024-02-17T09:20:00Z",
    },
    {
        id: 6,
        userId: 1,
        productId: 6,
        quantity: 2,
        date: "2024-02-16T14:30:00Z",
    },
    {
        id: 7,
        userId: 2,
        productId: 7,
        quantity: 1,
        date: "2024-02-15T11:45:00Z",
    },
    {
        id: 8,
        userId: 3,
        productId: 8,
        quantity: 3,
        date: "2024-02-14T10:00:00Z",
    },
    {
        id: 9,
        userId: 4,
        productId: 9,
        quantity: 2,
        date: "2024-02-13T13:20:00Z",
    },
    {
        id: 10,
        userId: 5,
        productId: 10,
        quantity: 1,
        date: "2024-02-12T09:00:00Z",
    },
    {
        id: 11,
        userId: 1,
        productId: 11,
        quantity: 3,
        date: "2024-02-11T16:15:00Z",
    },
    {
        id: 12,
        userId: 2,
        productId: 12,
        quantity: 1,
        date: "2024-02-10T14:30:00Z",
    },
    {
        id: 13,
        userId: 3,
        productId: 13,
        quantity: 2,
        date: "2024-02-09T11:45:00Z",
    },
    {
        id: 14,
        userId: 4,
        productId: 14,
        quantity: 1,
        date: "2024-02-08T10:00:00Z",
    },
    {
        id: 15,
        userId: 5,
        productId: 15,
        quantity: 3,
        date: "2024-02-07T13:20:00Z",
    },
    {
        id: 16,
        userId: 1,
        productId: 16,
        quantity: 2,
        date: "2024-02-06T09:00:00Z",
    },
    {
        id: 17,
        userId: 2,
        productId: 17,
        quantity: 1,
        date: "2024-02-05T16:15:00Z",
    },
    {
        id: 18,
        userId: 3,
        productId: 18,
        quantity: 3,
        date: "2024-02-04T14:30:00Z",
    },
    {
        id: 19,
        userId: 4,
        productId: 19,
        quantity: 2,
        date: "2024-02-03T11:45:00Z",
    },
    {
        id: 20,
        userId: 5,
        productId: 20,
        quantity: 1,
        date: "2024-02-02T10:00:00Z",
    },
];

// btvn:
// 1. hiển thị list product có category là 'Home'
console.log("----- 1. hiển thị list product có category là Home -----");
const listProductCategory = products.filter(function (product) {
    return product.category == "Home";
});
console.log(listProductCategory);

// 2. hiển thị list product có price > 50 và sắp xếp sản phẩm có giá từ cao xuống thấp
console.log(
    "\n----- 2. hiển thị list product có price > 50 và sắp xếp sản phẩm có giá từ cao xuống thấp -----"
);
const listProductPrice = products.filter(function (product) {
    return product.price > 50;
});
listProductPrice.sort(function (a, b) {
    return b.price - a.price;
});
console.log(listProductPrice);

// 3. hiển thị list order của Emma Davis (gợi ý: dùng 'Emma Davis' để tìm userId, dùng userId để lọc danh sách order)
console.log(
    "\n----- 3. hiển thị list order của Emma Davis (gợi ý: dùng 'Emma Davis' để tìm userId, dùng userId để lọc danh sách order) -----"
);
const listOrder = orders.filter(function (order) {
    const Emma = users.find(function (user) {
        return user.name == "Emma Davis";
    });
    return order.userId == Emma.id;
});
console.log(listOrder);

// 4. tính tổng tiền bill của Emma Davis (gợi ý: dùng reduce)
console.log(
    "\n----- 4. tính tổng tiền bill của Emma Davis (gợi ý: dùng reduce) -----"
);
const totalBill = listOrder.reduce(function (total, order) {
    const listBill = products.find(function (product) {
        return product.id == order.productId;
    });
    return total + listBill.price * order.quantity;
}, 0);

console.log(totalBill);

// 5. hiển thị top 3 users chi tiêu mạnh nhất

// 6. so sánh tổng tiền bill của Emily Johnson và Emma Davis

// 7. kiểm tra xem có phải tất cả user đều có bill > 400

// 8. hiển thị top 3 sản phẩm đc mua nhiều nhất
// 9. tìm danh sách các sản phẩm được mua bởi user 2 và 3
