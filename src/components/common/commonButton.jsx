import React from "react";
const CommonButton = ({ label, style }) => {
  return (
    <button className="btn-primary btn-sm" style={style}>
      {label}
    </button>
  );
};

export default CommonButton;
