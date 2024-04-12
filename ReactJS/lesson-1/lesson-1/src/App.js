import { useState } from "react";
import "./App.css"; // ES6: import ----> đây là nơi mình import Style cho component
// import { Button } from "@mui/material";
import Lifecycle from "./component/Communication";
function App() {
    const [isShow, setIsShow] = useState(true);
    const handleShow = () => setIsShow(true);
    const handleHide = () => setIsShow(false);
    const handleToggle = () => setIsShow(!isShow);
    return (
        <>
            <div>
                <button onClick={handleShow}>Show</button>
                <button onClick={handleHide}>Hide</button>
                <button onClick={handleToggle}>Toggle</button>
                {/* <Button variant="outlined">hh</Button> */}
            </div>
            {isShow && <Lifecycle />}
        </>
    );
}
export default App; // ES6: Export
