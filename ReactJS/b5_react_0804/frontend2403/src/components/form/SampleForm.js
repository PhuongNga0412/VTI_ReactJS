import React, { useState } from "react";
import "./SampleForm.css";

const SampleForm = () => {
    const [user, setUser] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [skills, setSkills] = useState("");
    const [text, setText] = useState("");
    const [form, setForm] = useState(null);

    const onChangeUser = (event) => {
        setUser(event.target.value);
    };
    const onChangeAge = (event) => {
        setAge(event.target.value);
    };
    const onChangeGender = (event) => {
        setGender(event.target.value);
    };
    const onChangeSkill = (event, skill) => {
        if (event.target.checked) {
            setSkills([...skills, skill]);
        } else {
            setSkills(skills.filter((s) => s !== skill));
        }
    };
    const handleChange = (event) => {
        setText(event.target.value);
    };

    const onSubmit = () => {
        setForm({ user, age, gender, skills, text });
    };
    const clear = () => {
        setUser("");
        setAge("");
        setGender("");
        setSkills([]);
        setText("");
    };
    return (
        <>
            {/* ------------------------ Sample Form ------------------------ */}

            <div className="sampleForm">
                <h3>Question 4</h3>
                <label className="txt">Full Name</label>
                <input
                    placeholder="Enter your name"
                    onChange={onChangeUser}
                    value={user}
                ></input>
                <label className="txt">Age</label>
                <input
                    type="number"
                    placeholder="Enter your age"
                    onChange={onChangeAge}
                    value={age}
                ></input>
                <label className="txt">Gender</label>
                <select onChange={onChangeGender} value={gender}>
                    <option value="" disabled selected hidden>
                        Select Gender
                    </option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                </select>
                <label className="txt">Skills</label>
                <div className="checkBox">
                    <label>
                        <input
                            type="checkbox"
                            onChange={(event) =>
                                onChangeSkill(event, "Programming")
                            }
                            checked={skills.includes("Programming")}
                        />
                        Programming
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            onChange={(event) =>
                                onChangeSkill(event, "Development")
                            }
                            checked={skills.includes("Development")}
                        />
                        Development
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            onChange={(event) => onChangeSkill(event, "Design")}
                            checked={skills.includes("Design")}
                        />
                        Design
                    </label>
                    <label>
                        <input
                            type="checkbox"
                            onChange={(event) =>
                                onChangeSkill(event, "Testing")
                            }
                            checked={skills.includes("Testing")}
                        />
                        Testing
                    </label>
                </div>
                <label className="txt">About you</label>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    onChange={handleChange}
                    value={text}
                ></textarea>
                <div className="sampleForm__btn">
                    <button onClick={onSubmit}>Submit</button>
                    <button onClick={clear}>Clear</button>
                </div>
                {form && (
                    <div>
                        <h3>Form Data</h3>
                        <p>Full name: {form.user}</p>
                        <p>Age: {form.age}</p>
                        <p>Gender: {form.gender}</p>
                        <p>Skills: {form.skills.join(", ")}</p>
                        <p>About you: {form.text}</p>
                    </div>
                )}
            </div>
        </>
    );
};
export default SampleForm;
