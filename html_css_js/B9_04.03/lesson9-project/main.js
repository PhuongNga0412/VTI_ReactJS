// B1: Lấy user list từ API
const getUserList = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const userList = response.json();
    return userList;
};

// B2: Hiển thị Loading

// B3: Tạo user card
const userCard = (userInfo) => {
    return `
    <div class="user-card">
        <p>Name: ${userInfo.name}</p>
        <p>Name: ${userInfo.email}</p>
        <p>Name: ${userInfo.address}</p>
        <p>Name: ${userInfo.phone}</p>
        <p>Name: ${userInfo.website}</p>
    </div>
    `;
};

// B4: Tạo Modal
const userCardList = userCard;
// B5: View detail trong modal
// B6: Log user detail trong modal
const contentDiv = document.querySelector(".content");
getUserList()
    .then((data) => {})
    .catch();
