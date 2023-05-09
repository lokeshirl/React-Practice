import { useState } from "react";

function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>{number}</h1>
            {/* Add counter by 1 btn */}
            <button onClick={() => {
                setNumber(number + 1);
            }}
            >
                Add
            </button>
            {/* Reset Button */}
            <button onClick={() => {
                setNumber(0);
            }}
            >
                Reset
            </button>
        </>
    );
}

export default Counter;