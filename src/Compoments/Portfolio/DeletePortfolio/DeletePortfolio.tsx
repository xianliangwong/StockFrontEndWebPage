import React, { useContext } from "react";
import {
  AddPortFolioContext,
  portFolioContextType,
} from "../../Context/AddPortFolioContextProvider";
import { PortfolioGet } from "../../../Model/Portfolio";
import {
  portfolioDeleteAPI,
  portfolioGetAPI,
} from "../../../API/Service/PortfolioService";
import { toast } from "react-toastify";

interface Props {
  portFolioValue: PortfolioGet;
}

const DeletePortfolio = (props: Props) => {
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
    <>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          portfolioDeleteAPI(e.target[0].value)
            .then((res) => {
              if (res?.status === 200) {
                console.log("success");
                toast.success("stock deleted from portfolio");
                getPorfolio();
              }
            })
            .catch((e) => {
              toast.warning("could not delete portfolio item");
            });
          // const result = value.portFolioValue!.filter((target) => {
          //   return target !== e.target[0].value;
          // });
          // value.setPortfolioValues(result);
        }}
      >
        <input
          hidden={true}
          readOnly={true}
          value={props.portFolioValue.symbol}
        />
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
