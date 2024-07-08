import React from "react";
import { testIncomeStatementData } from "./testData";

const testData = testIncomeStatementData;

interface Props {}

type Company = (typeof testData)[0];

const configs = [
  {
    Label: "Year",
    render: (company: Company) => company.acceptedDate, //return acceptedDate
  },
  {
    Label: "Cost of Revenu",
    render: (company: Company) => company.costOfRevenue, //returns cost of revenue
  },
];

const Table = (props: Props) => {
  const renderedRow = testData.map((company) => {
    return (
      <tr key={company.cik}>
        {configs.map((config: any) => {
          return (
            <td className="p-4 whitespace-nowrap text-sm font-normal text-gray-900">
              {config.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderedHeader = configs.map((headerValue: any) => {
    return (
      <th
        className="p-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
        key={headerValue.Label}
      >
        {headerValue.Label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
      <table>
        <thead className="min-w-full divide-y divide-gray-200 m-5">
          {renderedHeader}
        </thead>
        <tbody>{renderedRow}</tbody>
      </table>
    </div>
  );
};

export default Table;
