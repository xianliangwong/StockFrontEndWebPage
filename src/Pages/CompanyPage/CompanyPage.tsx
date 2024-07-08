import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../API/api";
import SideBar from "../../Compoments/SideBar/SideBar";
import CompanyDashBoard from "../../Compoments/CompanyDashBoard/CompanyDashBoard";
import Tile from "../../Compoments/Tile/Tile";

interface Props {}

const CompanyPage = (props: Props) => {
  let { ticker } = useParams();
  const [company, setCompany] = useState<CompanyProfile>();

  useEffect(() => {
    const getProfileInit = async () => {
      const result = await getCompanyProfile(ticker!);
      setCompany(result?.data[0]);
    };

    getProfileInit();
  }, []);

  return (
    <>
      {company ? (
        <div className="w-full relative flex ct-docs-disable-sidebar-content overflow-x-hidden">
          <SideBar />

          <CompanyDashBoard>
            <Tile tittle="Company Name" subTitle={company.companyName}></Tile>
          </CompanyDashBoard>
        </div>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
};

export default CompanyPage;
