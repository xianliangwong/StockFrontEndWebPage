import React from "react";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { Link } from "react-router-dom";
import { PortfolioGet } from "../../../Model/Portfolio";

interface Props {
  portfolioValues: PortfolioGet;
}

const CardPortfolio = (props: Props) => {
  return (
    <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
      <Link
        to={`/company/${props.portfolioValues}/company-profile`}
        className="pt-6 text-xl font-bold"
      >
        {props.portfolioValues.companyName}
      </Link>
      <DeletePortfolio portFolioValue={props.portfolioValues} />
    </div>
  );
};

export default CardPortfolio;
