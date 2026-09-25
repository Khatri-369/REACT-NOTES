import { useState, useEffect } from "react";

export default function CounterEffect() {

    const [countx, setCoutx] = useState(0);
    const [county, setCounty] = useState(0);

    useEffect(function printSomething() {
        console.log("Effect is running");
    }, [countx]);

    let increasex = () => {
        setCoutx((prevCount) => prevCount + 1);
    };

    let increasey = () => {
        setCounty((prevCount) => prevCount + 1);
    };

    return (
        <>
            <h1>CountX : {countx}</h1>
            <h1>CountY : {county}</h1>
            <button onClick={increasex}>Click me X</button>
            <button onClick={increasey}>Click me Y</button>
        </>
    );
}