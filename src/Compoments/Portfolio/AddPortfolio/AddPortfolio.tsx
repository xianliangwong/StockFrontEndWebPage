import React, { SyntheticEvent } from "react";

type Props = {
  symbol: string;
};

const AddPortfolio = (props: Props) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); //to prevent default behavior of sending value to specified url and causing it
        console.log("testing");
      }}
    >
      <input readOnly={true} hidden={true} value={props.symbol}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPortfolio;
