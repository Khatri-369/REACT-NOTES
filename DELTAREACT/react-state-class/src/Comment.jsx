import { useState } from "react";

export default function Comment({ addNewComment }) {

    const [formData, setFormData] = useState({
        username: "",
        comment: "",
        rating: ""
    });

    let handlechange = (e) => {
        let targetName = e.target.name;
        let targetValue = e.target.value;

        setFormData((prevDate) => {
            return {
                ...prevDate,
                [targetName]: targetValue
            };
        })
    }

    let onSubmit = (e) => {
        e.preventDefault();
        if (!formData.username || !formData.comment || !formData.rating) {
            alert("Please fill all the fields");
            return;
        }
        addNewComment(formData);
        setFormData({
            username: "",
            comment: "",
            rating: ""
        });
    }

    return (
        <form onSubmit={onSubmit}>
            USERNAME : <input type="text" placeholder="username" value={formData.username} name="username" onChange={handlechange} />
            <br /><br />
            COMMENT : <input type="text" placeholder="comment" value={formData.comment} name="comment" onChange={handlechange} />
            <br /><br />
            RATING : <input type="number" min="1" max="5" placeholder="rating" value={formData.rating} name="rating" onChange={handlechange} />
            <br /><br />
            <button>SUBMIT</button>
        </form>
    );
}