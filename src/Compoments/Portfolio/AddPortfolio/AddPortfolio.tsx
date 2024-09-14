import React, { SyntheticEvent, useContext, useEffect } from "react";
import {
  AddPortFolioContext,
  portFolioContextType,
} from "../../Context/AddPortFolioContextProvider";
import {
  portfolioAddAPI,
  portfolioGetAPI,
} from "../../../API/Service/PortfolioService";
import { toast } from "react-toastify";

type Props = {
  symbol: string;
};

const AddPortfolio = (props: Props) => {
  const value = useContext(AddPortFolioContext) as portFolioContextType;

  const getPorfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          value.setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        toast.warning("could not get portfolio values!");
      });
  };

  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault(); //to prevent default behavior of sending value to specified url and causing it
        const hasAdded = value.portFolioValue!.find(
          (target) => target === e.target[0].value
        );
        if (hasAdded) {
          return;
        }
        portfolioAddAPI(e.target[0].value)
          .then((res) => {
            if (res?.status === 201) {
              toast.success("stock added to portfolio");
              getPorfolio();
            }
          })
          .catch((e) => {
            toast.warning("could not add portfolio item");
          });
        // const updatedPortfolio = [...value.portFolioValue!, e.target[0].value];
        // value.setPortfolioValues(updatedPortfolio);
      }}
    >
      <input readOnly={true} hidden={true} value={props.symbol}></input>
      <button type="submit">Add</button>
    </form>
  );
};

export default AddPortfolio;
