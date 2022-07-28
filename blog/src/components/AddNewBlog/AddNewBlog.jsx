import React from "react";
import "./AddNewBlog.css";
import Form from "./Form";

function AddNewBlog() {
  return (
    <>
      <div className="add-blog-container">
        {/*Add New Blog Heading*/}
        <h1 className="newblog">
          ADD A NEW <span>BLOG</span>
        </h1>

        {/*Form*/}
        <div className="from-div">
          <Form />
        </div>
      </div>
    </>
  );
}

export default AddNewBlog;
