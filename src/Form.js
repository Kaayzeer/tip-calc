const Form = ({ isPeople }) => {
  return (
    <>
      {isPeople ? (
        <form>
          <label className="label __text">
            {" "}
            Number of People
            <input type="select" className="input people" />
          </label>
        </form>
      ) : (
        <form>
          <label className="label __text">
            {" "}
            Bill
            <input type="text" className="input bill" />
          </label>
        </form>
      )}
    </>
  );
};

export default Form;
