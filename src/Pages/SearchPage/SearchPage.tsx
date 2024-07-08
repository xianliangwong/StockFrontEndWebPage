import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import NavBar from "../../Compoments/NavBar/NavBar";
import AddPortFolioContextProvider from "../../Compoments/Context/AddPortFolioContextProvider";
import { searchCompanies } from "../../API/api";
import ListPortfolio from "../../Compoments/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Compoments/CardList/CardList";

import { CompanySearch } from "../../company";
import Search from "../../Compoments/Search/Search";

function SearchPage() {
  const [search, setSearch] = useState<string>("");
  const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  // const PortFolioProviderValue = { portfolioValues, setPortfolioValues };

  function handleChanges(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const onClick = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await searchCompanies(search);
    if (typeof result === "string") {
      setServerError("API returned error");
    } else if (Array.isArray(result.data)) {
      setSearchResult(result.data);
    }
    console.log(searchResult);
  };

  return (
    <div className="App">
      <Search
        search={search}
        handleSearchChanges={handleChanges}
        onSearchSubmit={onClick}
      />
      {serverError && <h1>Error message: {serverError}</h1>}

      <AddPortFolioContextProvider>
        <ListPortfolio />
        <CardList items={searchResult} />
      </AddPortFolioContextProvider>
    </div>
  );
}

export default SearchPage;
