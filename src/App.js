//styles
import "./sass/App.scss";

//components
import Title from "./Title";

function App() {
  const tipAmount = ["5%", "10%", "15%", "25%", "50%"];
  return (
    <div className="App">
      <div className="main-container">
        <Title />
        <div className="calc-container">
          <div className="section-1">
            <form>
              <label className="label __text">
                {" "}
                Bill
                <input type="text" className="input bill" />
              </label>
            </form>
            <div className="select-tip">
              <h3 className="__text">select tip</h3>
              {tipAmount.map((amount, index) => (
                <button key={index} className="tip-button">
                  {amount}
                </button>
              ))}
              <input
                type="text"
                placeholder="Custom"
                className="custom-button"
              />
            </div>
            <form>
              <label className="label __text">
                {" "}
                Number of People
                <input type="select" className="input people" />
              </label>
            </form>
          </div>
          <div className="section-2">
            <div className="tip-amount">
              <p className="tip-amount-text">tip amount</p>
              <span className="person">/ person</span>
              <h1 className="amount">$0.00</h1>
            </div>
            <div className="total-amount">
              <p className="total-amount-text">total amount</p>
              <span className="person">/ person</span>
              <h1 className="amount">$0.00</h1>
            </div>
            <button className="reset-button">reset</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
