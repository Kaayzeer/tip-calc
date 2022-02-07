import { useState } from "react";
import dollar from "../images/icon-dollar.svg";
import person from "../images/icon-person.svg";

const Form = ({ isPeople, setBill, setPeople, bill, people, tip }) => {
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

  return (
    <>
      {!isPeople ? (
        <>
          <form>
            <h1 className="h1">Bill</h1>
            <img src={dollar} className="icon" />
            <input
              name="bill"
              type="text"
              className="input-bill"
              value={bill}
              onChange={handleChange}
              placeholder="0"
            />
          </form>
        </>
      ) : (
        <form>
          <h1 className="h1">Number of People</h1>
          <img src={person} className="icon" />
          <span className="zero">{tip ? "Can´t be zero" : null}</span>
          <input
            name="people"
            type="select"
            className="input-people"
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
