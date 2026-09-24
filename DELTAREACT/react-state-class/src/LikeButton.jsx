import { useState } from "react";

export default function LikeButton() {

    const [isLiked, setisLiked] = useState(false); // INITIALIZATION

    console.log("COMPONENT RENDERED");
    function handleClick() {
        setisLiked(!isLiked);
    }

    return (
        <div>
            <h3>STATE IN REACT</h3>
            <p onClick={handleClick}>{isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>}</p>
        </div>
    );
}