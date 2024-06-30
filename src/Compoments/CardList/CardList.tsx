import React from "react";
import Card from "../Card/Card";
import { CompanySearch } from "../../company";
import { v4 as uuidv4 } from "uuid";

interface Props {
  items: CompanySearch[];
}

const CardList = ({ items }: Props) => {
  console.log("cardlist test");
  return (
    <>
      {items.length > 0 ? (
        items.map((x) => {
          return <Card id={x.symbol} key={uuidv4()} searchResult={x} />;
        })
      ) : (
        <p className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
          No results!
        </p>
      )}
    </>
  );
};

export default CardList;
