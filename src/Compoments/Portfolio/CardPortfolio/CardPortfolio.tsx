import React from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";

interface Props {
  portfolioValues: string;
}

const CardPortfolio = (props: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <p className="pt-6 text-xl font-bold">{props.portfolioValues}</p>
      <DeletePortfolio portFolioValue={props.portfolioValues} />
    </div>
  );
};

export default CardPortfolio;
