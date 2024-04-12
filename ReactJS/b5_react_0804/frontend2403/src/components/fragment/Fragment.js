import React, { useState } from "react";
import "./Fragment.css";
const Fragment = () => {
    const [count, setCount] = useState(1);
    const [userName, setUserName] = useState("");

    const increase = () => {
        setCount((prevState) => prevState + 1);
    };
    const decrease = () => {
        setCount((prevState) => prevState - 1);
    };
    const onChangeUserName = (event) => {
        setUserName(event.target.value);
    };
    console.log("event", userName);

    const onSubmit = () => {
        alert(userName);
    };

    return (
        <>
            <h1
                className="heading"
                style={{ color: count % 2 === 0 ? "yellow" : "blue" }}
            >
                Count: {count}
            </h1>
            <h1 className="heading">
                <button
                    className="btn"
                    onClick={increase}
                    disabled={count >= 10}
                >
                    Increase count ➕
                </button>
            </h1>
            <h1 className="heading">
                <button
                    className="btn"
                    onClick={decrease}
                    disabled={count <= 0}
                >
                    Decrease count ➖
                </button>
            </h1>

            {/* ------------------------ Form ------------------------ */}
            <div className="form">
                <div className="form__input">
                    <label>Username: </label>
                    <input
                        placeholder="Typing your name..."
                        onChange={onChangeUserName}
                        value={userName}
                    ></input>
                </div>
                <div>
                    <button className="form__btn" onClick={onSubmit}>
                        Submit form
                    </button>
                </div>
            </div>

            <label className="showName">Name: {userName}</label>
        </>
    );
};
export default Fragment;
