import { useState } from 'react'

export default function Form() {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    });

    let handleChange = (e) => {
        let fieldName = e.target.name;
        let fieldValue = e.target.value;
        setFormData((prevData) => {
            return { ...prevData, [fieldName]: fieldValue };
        });
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='fullname'>FULLNAME</label>&nbsp;&nbsp;
            <input type="text" id='fullname' placeholder="ENTER THE FULL NAME" value={formData.fullName} name="fullName" onChange={(e) => handleChange(e)} />
            <br /> <br />
            <label htmlFor='username'>USERNAME</label>&nbsp;&nbsp;
            <input type="text" id='username' placeholder="ENTER THE USERNAME" value={formData.username} name="username" onChange={(e) => handleChange(e)} />
            <br /> <br />
            <label htmlFor='password'>PASSWORD</label>&nbsp;&nbsp;
            <input type="password" id='password' placeholder="ENTER THE PASSWORD" value={formData.password} name="password" onChange={(e) => handleChange(e)} />
            <br /> <br />
            <button>SUBMIT</button>
        </form>
    );
}