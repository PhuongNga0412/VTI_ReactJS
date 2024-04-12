import React from "react";
import "./App.css"; // ES6: import ----> đây là nơi mình import Style cho component
// import CardComponent from "./components/CardComponent";
// import Card from "./components/Card";
// import CardGroup from "./components/card/CardGroup";
// import Fragment from "./components/fragment/Fragment";
import SampleForm from "./components/form/SampleForm";
import Register from "./components/register/Register";
const App = () => {
    // const Hello = () => {
    //     console.log("Hello");
    // };

    // const styleObject = {
    //     border: "2px solid red",
    // };

    // const user = {
    //     firstName: "Phương",
    //     lastName: "Nga",
    //     showFullName() {
    //         return `${this.firstName} ${this.lastName}`;
    //     },
    // };
    return (
        <div>
            {/* <h1 onClick={Hello}>Hello World</h1>
            <p>My first paragraph</p>
            <h2>DANH SÁCH LỚP HỌC</h2>
            <ol>
                <li>Nguyễn Ngọc Duy</li>
                <li>Tống Quang Anh</li>
                <li>Đinh Thu Loan</li>
                <li>Hà Văn Tiến</li>
                <li>Nguyễn Hải Đăng</li>
                <li>Nguyễn Tiến Quang</li>
                <li>Nguyễn Văn Chiến</li>
            </ol>
            <ol>
                <li>
                    Cơm trưa
                    <ul>
                        <li>Cơm chiên hải sản</li>
                        <li>Cơm sườn non nấu cam</li>
                        <li>Cơm canh chua cá lóc</li>
                    </ul>
                </li>
                <li>
                    Tráng miệng trái cây
                    <ul>
                        <li>Nho tươi</li>
                        <li>Chuối</li>
                        <li>Mận</li>
                    </ul>
                </li>
            </ol>
            <h3 style={styleObject}>Hello World</h3>
            <h3 style={{ border: "2px solid blue" }}>Hello World</h3>
            <h3 className="text-3">Hello World</h3>
            <div>FullName: {user.showFullName()}</div> */}
            {/* <CardComponent />
            <Card />
            <CardGroup />
            <Fragment /> */}
            <div className="formData">
                <SampleForm />
                <Register />
            </div>
        </div>
    );
};
export default App;
