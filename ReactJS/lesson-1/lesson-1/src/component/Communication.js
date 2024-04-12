import React, { useState } from "react";
import ChildComponent from "./ChildComponent";
const Communication = () => {
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    };
    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    };
    const Communication = () => {
        return (
            <div>
                <div>
                    <button onClick={handleIncrease}>+</button>
                    <button onClick={handleDecrease}>-</button>
                </div>
                <ChildComponent />
            </div>
        );
    };
};

export default Communication;
