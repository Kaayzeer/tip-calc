import { useState, useEffect } from "react";

//styles
import "./sass/App.scss";

//components
import Title from "./components/Title";
import Form from "./components/Form";
import Tip from "./components/Tip";
import Amount from "./components/Amount";
import Reset from "./components/Reset";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [tip, setTip] = useState("");
  const [custom, setCustom] = useState("");

  const handleTip = (percent) => {
    let num = (percent / 100) * bill;
    return num;
  };

  const handleCustom = (e) => {
    setCustom(e.target.value);
  };

  const handleReset = () => {
    setBill("");
    setPeople("");
    setCustom("");
  };

  return (
    <div className="App">
      <div className="main-container">
        <Title />
        <div className="calc-container">
          <div className="section-1">
            <Form isPeople={false} setBill={setBill} bill={bill} />
            <Tip
              setTip={setTip}
              handleTip={handleTip}
              handleCustom={handleCustom}
              custom={custom}
            />
            <Form
              isPeople={true}
              setPeople={setPeople}
              people={people}
              tip={tip}
              custom={custom}
            />
          </div>
          <div className="section-2">
            <Amount bill={bill} tip={tip} people={people} custom={custom} />
            <Reset text="reset" handleReset={handleReset} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

{
  /* <img src={dollar} alt="dollar-image" /> */
}
