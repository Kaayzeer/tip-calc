const Amount = ({ bill, tip, people }) => {
  return (
    <>
      <div className="tip-amount">
        <p className="tip-amount-text">tip amount</p>
        <span className="person">/ person</span>
        <h1 className="amount">{people ? tip : "$0.00"}</h1>
      </div>
      <div className="total-amount">
        <p className="total-amount-text">total amount</p>
        <span className="person">/ person</span>
        <h1 className="amount">
          {people ? (people * bill + tip) / people : "$0.00"}
        </h1>
      </div>
    </>
  );
};

export default Amount;
