import React, { ReactNode, useState } from "react";
import { createContext } from "react";
import { portfolioGetAPI } from "../../API/Service/PortfolioService";
import { toast } from "react-toastify";
import { PortfolioGet } from "../../Model/Portfolio";

export const AddPortFolioContext =
  React.createContext<portFolioContextType | null>(null);

export interface portFolioContextType {
  portFolioValue: PortfolioGet[] | null;
  setPortfolioValues: React.Dispatch<
    React.SetStateAction<PortfolioGet[] | null>
  >;
}

const AddPortFolioContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [portFolioValue, setPortfolioValues] = useState<PortfolioGet[] | null>(
    []
  );

  return (
    <AddPortFolioContext.Provider
      value={{ portFolioValue, setPortfolioValues }}
    >
      {children}
    </AddPortFolioContext.Provider>
  );
};

export default AddPortFolioContextProvider;
