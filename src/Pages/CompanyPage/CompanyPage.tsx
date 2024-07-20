import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { CompanyProfile } from "../../company";
import { getCompanyProfile } from "../../API/api";
import SideBar from "../../Compoments/SideBar/SideBar";
import CompanyDashBoard from "../../Compoments/CompanyDashBoard/CompanyDashBoard";
import Tile from "../../Compoments/Tile/Tile";
import Spinner from "../../Compoments/Spinner/Spinner";
import TenKFinder from "../../Compoments/TenKFinder/TenKFinder";

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

          <CompanyDashBoard ticker={ticker!}>
            <Tile tittle="Company Name" subTitle={company.companyName}></Tile>
            <Tile
              tittle="Price"
              subTitle={"$" + company.price.toString()}
            ></Tile>
            <Tile tittle="Sector" subTitle={company.sector}></Tile>
            <Tile tittle="DCF" subTitle={company.dcf.toString()}></Tile>
            <div className="bg-white shadow rounded mt-3 m-4">
              <h4 className="font-bold text-medium text-gray-900 p-3 pb-0">
                Description:
              </h4>
              <p className="text-medium text-gray-900 pt-2 pl-3 pb-2">
                {company.description}
              </p>
            </div>
            <TenKFinder ticker={company.symbol} />
          </CompanyDashBoard>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default CompanyPage;
