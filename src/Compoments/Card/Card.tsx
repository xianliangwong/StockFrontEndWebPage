import React from "react";
import "./Card.css";

interface Props {
  companyName: string;
  ticker: string;
  price: number;
}

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://t4.ftcdn.net/jpg/00/59/96/75/360_F_59967553_9g2bvhTZf18zCmEVWcKigEoevGzFqXzq.jpg"
        alt="apple image"
      ></img>

      <div className="details">
        <h2>
          {props.companyName} ({props.ticker})
        </h2>
        <p>${props.price}</p>
      </div>

      <p className="info">info here</p>
    </div>
  );
};

export default Card;
