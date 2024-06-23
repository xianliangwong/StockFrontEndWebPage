import React, { useState } from "react";

type Props = {};

const Search = (props: Props) => {
  const [search, setSearch] = useState<string>("");

  return (
    <div>
      <input
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default Search;
