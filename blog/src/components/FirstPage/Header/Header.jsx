import React from "react";
import "../Header/Head.css";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        <div className="header">
          <div className="text">
            {/*Location*/}
            <div className="location">
              <i class="fa-solid fa-location-dot icon"></i>
              <h3 className="loc">Lahore, Pakistan</h3>
            </div>

            {/*Hero Text*/}
            <div className="herotext">
              <h2 className="h2-1">Your favourite</h2>
              <h1 className="h1-1">
                <span>Gaming</span> Site
              </h1>
            </div>

            {/*Paragraph*/}
            <div className="para">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                duis posuere dictumst sollicitudin ornare commodo adipiscing.
              </p>
            </div>

            {/*Button*/}
            <button
              onClick={() => {
                navigate("/new-blog");
              }}
              className="cta"
            >
              Add New Blog
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
