import React from "react";
import { v4 as uuidv4 } from "uuid";

interface Props {
  data: any;
  config: any;
}

const RatioList = (props: Props) => {
  const renderedRows = props.config.map((row: any) => {
    return (
      <li key={uuidv4()} className="py-3 sm:py-4 border-b-2 border-b-gray-200 ">
        <div className="flex items-center space-x-4">
          <div className="flex-1 space-y-2">
            <p className="text-sm font-medium text-gray-900 truncate">
              {row.Label}
            </p>
            <p className="text-sm text-gray-900 truncate">
              {row.subTitle && row.subTitle}
            </p>
          </div>
          <div className="inline-flex item-center text-base font-semibold text-gray-900">
            {row.render(props.data)}
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 h-full">
      <ul key={uuidv4()} className="flex flex-col space-y-2">
        {renderedRows}
      </ul>
    </div>
  );
};

export default RatioList;
