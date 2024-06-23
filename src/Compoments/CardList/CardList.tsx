import React from "react";
import Card from "../Card/Card";

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName="Apple" ticker="AAPL" price={100}></Card>
      <Card companyName="Microsoft" ticker="MSFT" price={100}></Card>
    </div>
  );
};

export default CardList;
