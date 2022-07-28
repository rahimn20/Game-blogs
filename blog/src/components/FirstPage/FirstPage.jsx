import React from "react";
import Header from "./Header/Header";
import Blogs from "./BlogCardSection/BlogSection";

function FirstPage() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Blogs />
      </div>
    </>
  );
}

export default FirstPage;
