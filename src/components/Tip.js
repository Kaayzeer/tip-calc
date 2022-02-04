const Tip = () => {
  const tipAmount = ["5%", "10%", "15%", "25%", "50%"];
  return (
    <div className="select-tip">
      <h3 className="__text">select tip</h3>
      {tipAmount.map((amount, index) => (
        <button key={index} className="tip-button">
          {amount}
        </button>
      ))}
      <input type="text" placeholder="Custom" className="custom-button" />
    </div>
  );
};

export default Tip;
