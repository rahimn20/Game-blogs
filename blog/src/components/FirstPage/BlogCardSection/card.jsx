import React from "react";
import "./card.css";
import IMG from "../../../assets/jett.png";
import { useNavigate } from "react-router-dom";

function Card() {
  const navigate = useNavigate();

  return (
    <>
      <div
        className="card"
        onClick={() => {
          navigate("/first-blog");
        }}
      >
        <img className="card-img" src={IMG} alt="card"></img>
        <div className="card-content">
          <h4 className="card-title">My first blog</h4>
          <p className="card-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
            deleniti sed eum? Perspiciatis odit at dolore vitae perferendis
            voluptatem enim deleniti ipsum illo voluptatibus repellendus, in
            dolor distinctio ea ipsam!
          </p>
        </div>
      </div>
    </>
  );
}

export default Card;
