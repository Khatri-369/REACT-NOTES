import { useState } from "react";

export default function Counter() {

    const [count, setCount] = useState(RANDOM); //WE PASS ONLY REFERANCE OF THE FUNCTION TO THE USESTATE FUNCTION NOT
    console.log("COMPONENT WAS RENDERED");

    function increasecount() {
        setCount((prev) => {
            return prev + 1;
        })
        setCount((prev) => {
            return prev + 1;
        })
    }

    return (
        <>
            <h2>{count}</h2>
            <button onClick={increasecount}>increase</button>
        </>
    )
}