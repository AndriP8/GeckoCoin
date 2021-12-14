import React from "react";
import Page from "components/layout";
import Breadcrumb from "./Breadcrumb";
import MarketData from "./MarketData";
import InformationDetails from "./InformationDetails";
import { useQuery } from "react-query";
import { getCoinDetails } from "service/homepage";
import { useLocation } from "react-router-dom";
import { CoinDetailsTypes } from "types";

export const DetailsContext = React.createContext({} as CoinDetailsTypes);

function CoinDetails() {
  const page = useLocation();
  const coinId = page.pathname.split("").splice(7).join("");

  const { data } = useQuery("coin-details", () => getCoinDetails(coinId));

  return (
    <Page>
      <DetailsContext.Provider value={data?.data}>
        <Breadcrumb />
        <div className="block lg:flex items-start justify-center p-4">
          <MarketData />
          <InformationDetails />
        </div>
      </DetailsContext.Provider>
    </Page>
  );
}

export default CoinDetails;
