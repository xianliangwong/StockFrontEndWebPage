import React, { ChangeEvent, SyntheticEvent, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardList from "./Compoments/CardList/CardList";
import Search from "./Compoments/Search/Search";
import { CompanySearch } from "./company";
import { searchCompanies } from "./API/api";

function App() {
  const [search, setSearch] = useState<string>("");
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState<string>("");

  function handleChanges(e: ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    console.log(e.target.value);
  }

  const onClick = async (e: SyntheticEvent) => {
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
      <Search search={search} handleChanges={handleChanges} onClick={onClick} />
      {serverError && <h1>Error message: {serverError}</h1>}
      <CardList />
    </div>
  );
}

export default App;
