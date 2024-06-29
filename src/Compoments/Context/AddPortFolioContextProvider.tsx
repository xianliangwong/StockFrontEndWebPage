import React, { ReactNode, useState } from "react";
import { createContext } from "react";

export const AddPortFolioContext =
  React.createContext<portFolioContextType | null>(null);

export interface portFolioContextType {
  portFolioValue: string[];
  setPortfolioValues: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddPortFolioContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [portFolioValue, setPortfolioValues] = useState<string[]>([]);

  return (
    <AddPortFolioContext.Provider
      value={{ portFolioValue, setPortfolioValues }}
    >
      {children}
    </AddPortFolioContext.Provider>
  );
};

export default AddPortFolioContextProvider;
