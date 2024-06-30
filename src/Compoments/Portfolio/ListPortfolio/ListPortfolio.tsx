import React, { useContext } from "react";
import {
  AddPortFolioContext,
  portFolioContextType,
} from "../../Context/AddPortFolioContextProvider";
import CardPortfolio from "../CardPortfolio/CardPortfolio";
import { v4 as uuidv4 } from "uuid";

interface Props {}

const ListPortfolio = (props: Props) => {
  const value = useContext(AddPortFolioContext) as portFolioContextType;

  return (
    <>
      {/* <h3>My portfolio</h3>
      <ul>
        {value.portFolioValue &&
          value.portFolioValue.map((x) => {
            return <CardPortfolio key={uuidv4()} portfolioValues={x} />;
          })}
      </ul> */}

      <section id="portfolio">
        <h2 className="mb-3 mt-3 text-3xl font-semibold text-center md:text-4xl">
          My Portfolio
        </h2>
        <div className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 mb-5 md:px-6 md:space-y-0 md:space-x-7 md:flex-row">
          <>
            {value.portFolioValue.length > 0 ? (
              value.portFolioValue.map((x) => {
                return <CardPortfolio key={uuidv4()} portfolioValues={x} />;
              })
            ) : (
              <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
                Your portfolio is empty.
              </h3>
            )}
          </>
        </div>
      </section>
    </>
  );
};

export default ListPortfolio;
