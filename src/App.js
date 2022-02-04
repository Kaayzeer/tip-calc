//styles
import "./sass/App.scss";
import dollar from "./images/icon-dollar.svg";

//components
import Title from "./components/Title";
import Form from "./components/Form";
import Tip from "./components/Tip";
import Amount from "./components/Amount";
import Button from "./components/Button";

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Title />
        <div className="calc-container">
          <div className="section-1">
            <Form isPeople={false} />
            <Tip />
            <Form isPeople={true} />
          </div>
          <div className="section-2">
            <Amount />
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
