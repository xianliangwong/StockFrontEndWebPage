import React from "react";
import Table from "../../Compoments/Table/Table";
import RatioList from "../../Compoments/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../company";
import { testIncomeStatementData } from "../../Compoments/Table/testData";

interface Props {}

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        This is FinShar's design page. This is where we will house various
        design aspects of the app
      </h2>
      <RatioList data={testIncomeStatementData} config={tableConfig} />
      <Table />
    </>
  );
};

export default DesignPage;
