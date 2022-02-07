const Amount = ({ bill, tip, people, custom }) => {
  const setFinalAmount = () => {
    if (tip) {
      return tip;
    }
    if (custom) {
      return (custom / 100) * bill;
    }
  };

  return (
    <>
      <div className="tip-amount">
        <p className="tip-amount-text">tip amount</p>
        <span className="person">/ person</span>
        <h1 className="amount">
          {people ? setFinalAmount() / people : "$0.00"}
        </h1>
      </div>
      <div className="total-amount">
        <p className="total-amount-text">total amount</p>
        <span className="person">/ person</span>
        <h1 className="amount">
          {people ? (people * bill + setFinalAmount()) / people : "$0.00"}
        </h1>
      </div>
    </>
  );
};

export default Amount;
