import React from "react";
import "../styles/priceCard.css";
import { Link } from "react-router-dom";

const PriceCard = ({ primary, content, num, buttonLabel, href }) => {
  return (
    <div className="price-card  card shadow">
      <div className={"price-card-top-" + num}></div>
      <div className="card-body">
        <p className="price-card-primary card-title text-left">{primary}</p>
        <p className="price-card-content card-text text-left">{content}</p>
      </div>
      <div className="price-card-footer card-footer  border-success d-none d-lg-block">
        {href === "/trail-apply" ? (
          <a href={href} target="_blank" rel="noopener noreferrer">
            <button
              className="btn btn-primary"
              style={{
                borderRadius: "20px",
                paddingLeft: "2rem",
                paddingRight: "2rem"
              }}
            >
              {buttonLabel}
            </button>
          </a>
        ) : (
          <Link to={href}>
            <button
              className="btn btn-primary"
              style={{
                borderRadius: "20px",
                paddingLeft: "2rem",
                paddingRight: "2rem"
              }}
            >
              {buttonLabel}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default PriceCard;
