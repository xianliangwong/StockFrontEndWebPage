import React, { SyntheticEvent, useContext } from "react";
import {
  AddPortFolioContext,
  portFolioContextType,
} from "../../Context/AddPortFolioContextProvider";

type Props = {
  symbol: string;
};

const AddPortfolio = (props: Props) => {
  const value = useContext(AddPortFolioContext) as portFolioContextType;
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
