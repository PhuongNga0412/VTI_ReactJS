import React, { useState } from "react";

const Search = (props) => {
    const handleInputChange = (event) => {
        setIntro(event.target.value);
        if (props.onInputChange) {
            props.onInputChange(event.target.value);
        }
    };

    const handleButtonClick = () => {
        setIntro("");
        if (props.onButtonClick) {
            props.onButtonClick();
        }
    };

    return (
        <div className="Search">
            <input
                type="text"
                placeholder="Enter intro"
                value={intro}
                onChange={handleInputChange}
            />
            <button disabled={!intro} onClick={handleButtonClick}>
                Submit
            </button>
        </div>
    );
};

export default Search;
