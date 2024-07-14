import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";
import { Link } from "react-router-dom";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card = (props: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-between w-full p-6 bg-slate-100 rounded-lg md:flex-row"
      key={props.id}
      id={props.id}
    >
      <div className="details">
        <Link
          to={`/company/${props.searchResult.symbol}/company-profile`}
          className="font-bold text-center text-black md:text-left"
        >
          {props.searchResult.name} ({props.searchResult.symbol})
        </Link>
        <p className="text-black">${props.searchResult.currency}</p>
      </div>
      <p className="font-bold text-black">
        {props.searchResult.exchangeShortName}--
        {props.searchResult.stockExchange}
      </p>
      <AddPortfolio symbol={props.searchResult.symbol} />
    </div>
  );
};

export default Card;
