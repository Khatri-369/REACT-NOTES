import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    username: "",
    comment: "",
    rating: ""
  });

  function handleChange(e) {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevData) => {
      return {
        ...prevData,
        [fieldName]: fieldValue
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(formData);

    alert("Form Submitted!");
  }

  return (
    <div>
      <h1>Review Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
        />

        <br /><br />

        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleChange}
          placeholder="Comment"
        />

        <br /><br />

        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
          placeholder="Rating"
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>

      <hr />

      <h2>Current State</h2>

      <p>Username: {formData.username}</p>
      <p>Comment: {formData.comment}</p>
      <p>Rating: {formData.rating}</p>
    </div>
  );
}

export default App;