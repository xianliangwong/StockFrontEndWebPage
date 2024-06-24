import React, { ChangeEvent, SyntheticEvent, useState } from "react";

type Props = {
  search: string | undefined;
  handleChanges: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: SyntheticEvent) => void;
};

const Search = (props: Props) => {
  return (
    <div>
      <input
        value={props.search}
        onChange={(e) => props.handleChanges(e)}
      ></input>
      <button onClick={(e) => props.onClick(e)}>Search</button>
    </div>
  );
};

export default Search;
