import React from "react";

const Button = ({ addCountry, updateCountry }) => {
  return (
    <div className="button-group">
      <button type="submit" onClick={addCountry}>
        국가 추가
      </button>
      <button type="button" onClick={updateCountry}>
        업데이트
      </button>
    </div>
  );
};

export default Button;
