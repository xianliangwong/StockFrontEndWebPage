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
        <h1>No results</h1>
      )}
    </>
  );
};

export default CardList;
