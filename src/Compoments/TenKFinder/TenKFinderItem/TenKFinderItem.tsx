import React from "react";
import { CompanyTenK } from "../../../company";
import { Link } from "react-router-dom";

interface Props {
  tenK: CompanyTenK;
}

const TenKFinderItem = (props: Props) => {
  const fillingDate = new Date(props.tenK.fillingDate).getFullYear();
  return (
    <Link
      reloadDocument
      to={props.tenK.finalLink}
      type="button"
      className="inline-flex items-center p-4 text-md text-white bg-lightGreen rounded-md"
    >
      10K - {props.tenK.symbol} - {fillingDate}
    </Link>
  );
};

export default TenKFinderItem;
