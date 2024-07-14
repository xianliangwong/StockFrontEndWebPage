import React, { useEffect, useState } from "react";
import { CompanyBalanceSheet, CompanyCashFlow } from "../../company";
import { useOutlet, useOutletContext } from "react-router";
import { getBalanceSheet } from "../../API/api";
import Table from "../Table/Table";
import Spinner from "../Spinner/Spinner";

interface Props {}

const configs = [
  {
    label: <div className="font-bold">Total Assets</div>,
    render: (company: CompanyBalanceSheet) => company.totalAssets,
  },
  {
    label: "Current Assets",
    render: (company: CompanyBalanceSheet) => company.totalCurrentAssets,
  },
  {
    label: "Total Cash",
    render: (company: CompanyBalanceSheet) => company.cashAndCashEquivalents,
  },
  {
    label: "Property & equipment",
    render: (company: CompanyBalanceSheet) => company.propertyPlantEquipmentNet,
  },
  {
    label: "Intangible Assets",
    render: (company: CompanyBalanceSheet) => company.intangibleAssets,
  },
  {
    label: "Long Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Total Debt",
    render: (company: CompanyBalanceSheet) => company.otherCurrentLiabilities,
  },
  {
    label: <div className="font-bold">Total Liabilites</div>,
    render: (company: CompanyBalanceSheet) => company.totalLiabilities,
  },
  {
    label: "Current Liabilities",
    render: (company: CompanyBalanceSheet) => company.totalCurrentLiabilities,
  },
  {
    label: "Long-Term Debt",
    render: (company: CompanyBalanceSheet) => company.longTermDebt,
  },
  {
    label: "Long-Term Income Taxes",
    render: (company: CompanyBalanceSheet) => company.otherLiabilities,
  },
  {
    label: "Stakeholder's Equity",
    render: (company: CompanyBalanceSheet) => company.totalStockholdersEquity,
  },
  {
    label: "Retained Earnings",
    render: (company: CompanyBalanceSheet) => company.retainedEarnings,
  },
];

const BalanceSheet = (props: Props) => {
  const ticker = useOutletContext<string>();

  const [balanceSheet, setBalanceSheet] = useState<CompanyBalanceSheet[]>();

  useEffect(() => {
    const getIncomeStatementData = async () => {
      const value = await getBalanceSheet(ticker);

      setBalanceSheet(value!.data);
    };

    getIncomeStatementData();
  }, []);

  return (
    <>
      {balanceSheet ? (
        <Table config={configs} data={balanceSheet}></Table>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default BalanceSheet;
