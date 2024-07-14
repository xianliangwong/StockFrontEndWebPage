import React from "react";
import { testIncomeStatementData } from "./testData";
import { v4 as uuidv4 } from "uuid";

interface Props {
  data: any;
  config: any;
}

const Table = (props: Props) => {
  const renderedRow = props.data.map((company: any) => {
    return (
      <tr key={uuidv4()}>
        {props.config.map((config: any) => {
          return (
            <td className="p-3 whitespace-nowrap text-sm font-normal text-gray-900">
              {config.render(company)}
            </td>
          );
        })}
      </tr>
    );
  });

  const renderedHeader = props.config.map((headerValue: any) => {
    return (
      <th
        className="p-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide"
        key={uuidv4()}
      >
        {headerValue.label}
      </th>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 mt-5">
      <table className="min-w-full divide-y divide-gray-200 m-5">
        <thead key={uuidv4()} className="bg-gray-50">
          {renderedHeader}
        </thead>
        <tbody key={uuidv4()}>{renderedRow}</tbody>
      </table>
    </div>
  );
};

export default Table;
