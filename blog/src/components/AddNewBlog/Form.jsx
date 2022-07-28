import React from "react";
import "./Form.css";

function Form() {
  return (
    <>
      <div className="form-container">
        {/*Image Picker*/}
        <input type="file" id="file" accept="image/*"></input>
        <label for="file" className="img-picker">
          <i class="fa-solid fa-image"></i> &nbsp; Choose your image
        </label>

        {/*Add Title*/}
        <form>
          <input
            type="text"
            className="input-title"
            placeholder="Please enter title of the blog"
          />
          <textarea
            type="text"
            className="input-desc"
            placeholder="Please enter description of the blog"
          />
          {/*Publish Button*/}
          <button className="publish-cta">Publish</button>
        </form>
      </div>
    </>
  );
}

export default Form;
