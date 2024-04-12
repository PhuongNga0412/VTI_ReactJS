import { useEffect, useState } from "react";
import "./Lifecycle.css";
const Lifecycle = () => {
    // tao state
    // console.log("1");
    const [count, setCount] = useState(0);
    // console.log("2");
    // useEffect(() => {
    //     console.log("100 - run every time component re-render");
    // });
    // useEffect(() => {
    //     console.log("200 - run 1 time when component mounting");
    // }, []);
    // useEffect(() => {
    //     console.log(
    //         "300 - run 1 time when component mounting and when count is changed"
    //     );
    // }, [count]);

    useEffect(() => {
        return () => {
            // do sth before unmouting
            console.log("unmounting 1");
        };
    });
    useEffect(() => {
        return () => {
            console.log("unmouting 2");
        };
    }, []);
    useEffect(() => {
        return () => {
            console.log("unmouting 3");
        };
    }, [count]);

    const handleIncrease = () => {
        const newCount = count + 1;
        setCount(newCount);
    };
    const handleDecrease = () => {
        const newCount = count - 1;
        setCount(newCount);
    };
    // console.log("3");
    return (
        <div className="Lifecycle">
            {/* {console.log("4")} */}
            <h1>Count: {count}</h1>
            <div>
                <button onClick={handleIncrease}>+</button>
                <button onClick={handleDecrease}>-</button>
            </div>
        </div>
    );
};
export default Lifecycle;

// useEffect là 1 hook để xử lí side effect (xử lí những công việc phụ, ví dụ: call api)
// hiển thị giao diện, render giao diện --> return
// + chạy sau return

// lifecycle của 1 component gồm 3 trạng thái:
// - mounting: lần đầu component vào DOM
// - updating
// - unmounting
