import Comment from "./Comment.jsx";
import { useState } from "react";

export default function ShowComment() {
    let styles = {
        textAlign: "center",
        padding: "10px",
        backgroundColor: "lightgray",
        borderWidth: "2px",
        border: "solid",
        borderColor: "black",
        margin: "10px",
        borderRadius: "10px",
        color: "black"
    };

    const [comment, setComment] = useState([
        {
            username: "John",
            comment: "Great product!",
            rating: 5
        },

    ]);

    let addNewComment = (newComment) => {
        setComment((prevComment) => {
            return [...prevComment, newComment];
        });
    }

    return (
        <>
            <h1>Product Comments</h1>

            {comment.map((comment, index) => (
                <h3 key={index} style={styles}>{comment.username} - {comment.comment} - {comment.rating}</h3>
            ))}

            <Comment addNewComment={addNewComment} />
        </>
    );
}