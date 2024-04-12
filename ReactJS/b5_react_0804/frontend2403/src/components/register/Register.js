import React, { useState } from "react";
import "./Register.css";

const Register = () => {
    const [fullName, setFullName] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [object, setObject] = useState("student");
    // const [object, setObject] = useState({ value: "" });
    const [favorite, setFavorite] = useState("");
    const [address, setAddress] = useState("");
    const [birthday, setBirthday] = useState("");
    const [img, setPicture] = useState("");
    const [form, setForm] = useState(null);

    const onChangeFullName = (event) => {
        setFullName(event.target.value);
    };
    const onChangeUserName = (event) => {
        setUserName(event.target.value);
    };
    const onChangePassword = (event) => {
        setPassword(event.target.value);
    };
    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    };
    const onChangePhone = (event) => {
        setPhone(event.target.value);
    };
    // const onChangeObject = (event) => {
    //     setObject(event.target.value);
    // };
    const onChangeObject = (event) => {
        setObject({ value: event.target.value });
    };
    const onChangeSkill = (event, skill) => {
        if (event.target.checked) {
            setFavorite([...favorite, skill]);
        } else {
            setFavorite(favorite.filter((s) => s !== skill));
        }
    };
    const onChangeAddress = (event) => {
        setAddress(event.target.value);
    };
    const onChangeBirthday = (event) => {
        setBirthday(event.target.value);
    };
    const OnChangePicture = (event) => {
        setPicture(event.target.value);
    };
    const onSubmit = () => {
        if (
            !fullName ||
            !userName ||
            !email ||
            !phone ||
            !favorite ||
            !address ||
            !birthday ||
            !img
        ) {
            alert("Please fill in all the required fields.");
            return;
        }
        setForm({
            fullName,
            userName,
            email,
            phone,
            object: object.value,
            favorite,
            address,
            birthday,
            img,
        });
    };

    return (
        <div className="form">
            <h3>Question 5</h3>
            <lable className="txt">Full name</lable>
            <input
                type="text"
                placeholder="Input your fullname..."
                onChange={onChangeFullName}
                value={fullName}
            />
            <lable className="txt">Username</lable>
            <input
                type="text"
                placeholder="Input your username..."
                onChange={onChangeUserName}
                value={userName}
            />
            <lable className="txt">Password</lable>
            <input
                type="password"
                placeholder="Input your password..."
                onChange={onChangePassword}
                value={password}
            />
            <lable className="txt">Email</lable>
            <input
                type="email"
                placeholder="Input your email..."
                onChange={onChangeEmail}
                value={email}
            />
            <lable className="txt">Telephone number</lable>
            <input
                type="phone"
                placeholder="Input your phone number..."
                onChange={onChangePhone}
                value={phone}
            />
            <label className="txt">Input Object</label>
            <div className="radio">
                <label>
                    <input
                        type="radio"
                        name="object"
                        value="Student"
                        checked={object.value === "Student"}
                        onChange={onChangeObject}
                    />
                    Student
                </label>
                <label>
                    <input
                        type="radio"
                        name="object"
                        value="Teacher"
                        checked={object.value === "Teacher"}
                        onChange={onChangeObject}
                    />
                    Teacher
                </label>
            </div>
            <label className="txt">Favorite</label>
            <div className="checkBox">
                <label>
                    <input
                        type="checkbox"
                        onChange={(event) => onChangeSkill(event, "Badminton")}
                        checked={favorite.includes("Badminton")}
                    />
                    Badminton
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={(event) => onChangeSkill(event, "Volleyball")}
                        checked={favorite.includes("Volleyball")}
                    />
                    Volleyball
                </label>
                <label>
                    <input
                        type="checkbox"
                        onChange={(event) => onChangeSkill(event, "Football")}
                        checked={favorite.includes("Football")}
                    />
                    Football
                </label>
            </div>
            <label className="txt">Address</label>
            <select onChange={onChangeAddress} value={address}>
                <option value="" disabled selected hidden>
                    Select Address
                </option>
                <option>Bắc Giang</option>
                <option>Hà Nội</option>
                <option>Hải Phòng</option>
                <option>Hà Nam</option>
            </select>
            <label className="txt">Birthday</label>
            <input type="date" onChange={onChangeBirthday} value={birthday} />
            <label className="txt">Your picture</label>
            <input type="file" onChange={OnChangePicture} value={img} />
            <button className="form__btn" onClick={onSubmit}>
                Đăng ký
            </button>
            {form && (
                <div>
                    <h3>Form Data</h3>
                    <p>Full name: {form.fullName}</p>
                    <p>Username: {form.userName}</p>
                    <p>Email: {form.email}</p>
                    <p>Telephone number: {form.phone}</p>
                    <p>Object: {form.object}</p>
                    <p>Favorite: {form.favorite.join(", ")}</p>
                    <p>Address: {form.address}</p>
                    <p>Birthday: {form.birthday}</p>
                    <p>Image: {form.img}</p>
                </div>
            )}
        </div>
    );
};
export default Register;
