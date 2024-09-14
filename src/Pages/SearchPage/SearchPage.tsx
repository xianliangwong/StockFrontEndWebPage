import React, {
  ChangeEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useState,
} from "react";
import NavBar from "../../Compoments/NavBar/NavBar";
import AddPortFolioContextProvider, {
  AddPortFolioContext,
  portFolioContextType,
} from "../../Compoments/Context/AddPortFolioContextProvider";
import { searchCompanies } from "../../API/api";
import ListPortfolio from "../../Compoments/Portfolio/ListPortfolio/ListPortfolio";
import CardList from "../../Compoments/CardList/CardList";

import { CompanySearch } from "../../company";
import Search from "../../Compoments/Search/Search";
import { PortfolioGet } from "../../Model/Portfolio";
import { portfolioGetAPI } from "../../API/Service/PortfolioService";
import { toast } from "react-toastify";

function SearchPage() {
  const [search, setSearch] = useState<string>("");

  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  const value = useContext(AddPortFolioContext) as portFolioContextType;

  // const PortFolioProviderValue = { portfolioValues, setPortfolioValues };

  const getPorfolio = () => {
    portfolioGetAPI()
      .then((res) => {
        if (res?.data) {
          value.setPortfolioValues(res?.data);
        }
      })
      .catch((e) => {
        toast.warning("could not get portfolio values!");
      });
  };

  useEffect(() => {
    getPorfolio();
  }, []);

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
      <>
        <ListPortfolio />
        <CardList items={searchResult} />
      </>
    </div>
  );
}

export default SearchPage;
