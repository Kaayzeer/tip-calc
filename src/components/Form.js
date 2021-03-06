import { useState } from "react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const Form = ({ isPeople, setBill, setPeople, bill, people, tip, custom }) => {
  const handleChange = (e) => {
    let value = e.target.value;
    switch (e.target.name) {
      case "bill":
        setBill(value);
        break;
      case "people":
        setPeople(value);
        break;
    }
  };

  const zero = tip ? "Can´t be zero" : custom ? "Can´t be zero" : null;
  const redBorder = tip ? "border-red" : custom ? "border-red" : null;
  return (
    <>
      {!isPeople ? (
        <>
          <form>
            <h1 className="h1 bill">Bill</h1>
            <img src={dollar} className="icon" />
            <input
              name="bill"
              type="number"
              className="input-bill"
              value={bill}
              onChange={handleChange}
              placeholder="0"
            />
          </form>
        </>
      ) : (
        <form>
          <h1 className="h1 people">Number of People</h1>
          <img src={person} className="icon-person" />
          <span className="zero">{zero}</span>
          <input
            name="people"
            type="number"
            className={`input-people ${redBorder}`}
            value={people}
            onChange={handleChange}
            placeholder="0"
          />
        </form>
      )}
    </>
  );
};

export default Form;
