import { useState } from "react";

const Reset = ({ text, handleReset }) => {
  return (
    <button className="reset-button" onClick={handleReset}>
      {text}
    </button>
  );
};

export default Reset;
