import React from "react";
const CommonButton = ({ label, style }) => {
  return (
    <button className="btn btn-outline-primary btn-sm" style={style}>
      {label}
    </button>
  );
};

export default CommonButton;
