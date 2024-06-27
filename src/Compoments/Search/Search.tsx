import React, { ChangeEvent, SyntheticEvent, useState } from "react";

type Props = {
  search: string | undefined;
  handleSearchChanges: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearchSubmit: (e: SyntheticEvent) => void;
};

const Search = (props: Props) => {
  return (
    <div>
      <form onSubmit={(e) => props.onSearchSubmit(e)}>
        <input
          value={props.search}
          onChange={(e) => props.handleSearchChanges(e)}
        ></input>
      </form>

      {/* // <input
      //   value={props.search}
      //   onChange={(e) => props.handleChanges(e)}
      // ></input>
      // <button onClick={(e) => props.onClick(e)}>Search</button> */}
    </div>
  );
};

export default Search;
