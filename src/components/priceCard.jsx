import React from "react";
import "../styles/priceCard.css";

const PriceCard = ({ primary, content, num, button }) => {
  return (
    <div className="price-card  card shadow">
      <div className={"price-card-top-" + num}></div>
      <div className="card-body">
        <p className="price-card-primary card-title text-left">{primary}</p>
        <p className="price-card-content card-text text-left">{content}</p>
      </div>
      <div className="price-card-footer card-footer  border-success d-none d-lg-block">
        <button
          className="btn btn-primary"
          style={{
            borderRadius: "20px",
            paddingLeft: "2rem",
            paddingRight: "2rem"
          }}
        >
          {button}
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
