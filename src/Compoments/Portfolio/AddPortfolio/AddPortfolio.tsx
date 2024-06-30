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
      onSubmit={(e: any) => {
        e.preventDefault(); //to prevent default behavior of sending value to specified url and causing it
        const hasAdded = value.portFolioValue.find(
          (target) => target === e.target[0].value
        );
        if (hasAdded) {
          return;
        }
        const updatedPortfolio = [...value.portFolioValue, e.target[0].value];
        value.setPortfolioValues(updatedPortfolio);
        console.log("testing");
      }}
    >
      <input readOnly={true} hidden={true} value={props.symbol}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPortfolio;
