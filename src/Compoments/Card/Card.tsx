import React from "react";
import "./Card.css";
import { CompanySearch } from "../../company";
import AddPortfolio from "../Portfolio/AddPortfolio/AddPortfolio";

interface Props {
  id: string;
  searchResult: CompanySearch;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg"
        alt="Company Logo"
      ></img>

      <div className="details">
        <h2>
          {props.searchResult.name} ({props.searchResult.symbol})
        </h2>
        <p>${props.searchResult.currency}</p>
      </div>

      <p className="info">
        {props.searchResult.exchangeShortName}--
        {props.searchResult.stockExchange}
      </p>
      <AddPortfolio symbol={props.searchResult.symbol} />
    </div>
  );
};

export default Card;
