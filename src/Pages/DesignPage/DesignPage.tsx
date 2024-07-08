import React from "react";
import Table from "../../Compoments/Table/Table";

interface Props {}

const DesignPage = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        This is FinShar's design page. This is where we will house various
        design aspects of the app
      </h2>
      <Table />
    </>
  );
};

export default DesignPage;
