import Page from "components/layout";
import NavbarTabs from "components/navbarTabs";
import MarketCap from "./MarketCap";
import Summary from "./Summary";
import TableItem from "./TableItem";
import TrendingCoin from "./TrendingCoin";

function Homepage() {
  return (
    <Page>
      <NavbarTabs />
      <MarketCap />
      <TableItem />
      <TrendingCoin />
      <Summary />
    </Page>
  );
}

export default Homepage;
