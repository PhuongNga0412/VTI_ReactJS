import { Button } from "@mui/material";
import React, { useState } from "react";
import Display from "./Display";
import Search from "./Search";

const ActionButton = () => {
    const [count, setCount] = useState(0);
    const [intro, setIntro] = useState("");

    const handleIncrease = () => {
        console.log("increase");
        const newCount = count + 1;
        setCount(newCount);
    };

    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    };

    const handleDoubleUp = () => setCount(count * 2);

    return (
        <div className="ActionButton">
            <Display
                count={count}
                intro={intro}
                onDoubleUp={handleDoubleUp}
                onSend={handleSendIntro}
                textColor={count % 2 === 0 ? "red" : "#1976D2"}
            />
            <div>
                <Button onClick={handleIncrease} variant="contained">
                    +
                </Button>
                <Button
                    onClick={handleDecrease}
                    variant="outlined"
                    disabled={count <= 0}
                >
                    -
                </Button>
                <Button onClick={handleDoubleUp} variant="contained">
                    x
                </Button>
                <Search />
            </div>
        </div>
    );
};

export default ActionButton;
