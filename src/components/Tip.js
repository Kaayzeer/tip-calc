const Tip = ({ handleTip, setTip, handleCustom, custom }) => {
  const tipAmount = [
    { amount: "5", id: 1 },
    { amount: "10", id: 2 },
    { amount: "15", id: 3 },
    { amount: "25", id: 4 },
    { amount: "50", id: 5 },
  ];

  return (
    <div className="select-tip">
      <h3 className="__text">select tip %</h3>
      {tipAmount.map((amount) => (
        <button
          key={amount.id}
          className="tip-button"
          onClick={() => setTip(handleTip(amount.amount))}
        >
          {amount.amount}%
        </button>
      ))}
      <input
        type="number"
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
