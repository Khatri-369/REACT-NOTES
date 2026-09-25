import { useState, useEffect } from "react";

export default function Joker() {

    const [joke, setJoke] = useState({
        setup: "",
        punchline: ""
    });

    let makeJoke = async () => {
        let URL = "https://official-joke-api.appspot.com/random_joke";
        let res = await fetch(URL);
        let joke = await res.json();
        setJoke({ setup: joke.setup, punchline: joke.punchline });
    }

    //WHEN LOAD
    useEffect(() => {
        makeJoke();
    }, [])

    return (
        <>
            <h1>JOKER HERE</h1>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>
            <button onClick={makeJoke}>Get a Joke</button>
        </>
    );
}