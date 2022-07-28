import React from "react";
import "./blogSection.css";
import Card from "./card";

function Blogs() {
  return (
    <>
      <div className="blogcont">
        <div className="blog">
          {/*Heading for Latest Blog*/}
          <h1 className="textblog">Latest Blogs</h1>

          {/*Card*/}
          <div className="card-div">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogs;
