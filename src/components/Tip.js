import { useState, useEffect } from "react";

const Tip = ({ handleTip, setTip, handleCustom, custom }) => {
  const tipAmount = ["5", "10", "15", "25", "50"];

  return (
    <div className="select-tip">
      <h3 className="__text">select tip %</h3>
      {tipAmount.map((amount, index) => (
        <button
          key={index}
          className="tip-button"
          onClick={() => setTip(handleTip(amount))}
        >
          {amount}%
        </button>
      ))}
      <input
        type="text"
        value={custom}
        name="custom"
        placeholder="Custom"
        className="custom-button"
        onChange={handleCustom}
      />
    </div>
  );
};

export default Tip;
