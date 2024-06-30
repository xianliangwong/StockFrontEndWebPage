import React, { useContext } from "react";
import {
  AddPortFolioContext,
  portFolioContextType,
} from "../../Context/AddPortFolioContextProvider";

interface Props {
  portFolioValue: string;
}

const DeletePortfolio = (props: Props) => {
  const value = useContext(AddPortFolioContext) as portFolioContextType;

  return (
    <>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          const result = value.portFolioValue.filter((target) => {
            return target !== e.target[0].value;
          });
          value.setPortfolioValues(result);
        }}
      >
        <input hidden={true} readOnly={true} value={props.portFolioValue} />
        <button
          type="submit"
          className="block w-full py-3 text-white duration-200 border-2 rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500"
        >
          X
        </button>
      </form>
    </>
  );
};

export default DeletePortfolio;
