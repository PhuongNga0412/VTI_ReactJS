import React from "react";

const Display = (props) => {
    console.log({ props });
    return (
        <>
            <h1 style={{ color: props.textColor }}>Count: {props.count}</h1>
            <h1>Intro: {props.intro}</h1>
        </>
    );
};

export default Display;
