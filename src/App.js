import { useState } from "react";

//styles
import "./sass/App.scss";

//components
import Title from "./components/Title";
import Form from "./components/Form";
import Tip from "./components/Tip";
import Amount from "./components/Amount";
import Button from "./components/Button";
import { useEffect } from "react/cjs/react.development";

function App() {
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const { zero, setZero } = useState("");
  const [tip, setTip] = useState("");

  const handleTip = (percent) => {
    let num = (percent / 100) * bill;
    return num;
  };

  return (
    <div className="App">
      <div className="main-container">
        <Title />
        <div className="calc-container">
          <div className="section-1">
            <Form isPeople={false} setBill={setBill} bill={bill} />
            <Tip setTip={setTip} handleTip={handleTip} />
            <Form
              isPeople={true}
              setPeople={setPeople}
              people={people}
              tip={tip}
              zero={zero}
            />
          </div>
          <div className="section-2">
            <Amount bill={bill} tip={tip} people={people} />
            <Button text="reset" />
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
