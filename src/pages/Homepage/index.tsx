import Page from "components/layout";
import { FiCornerRightDown } from "react-icons/fi";
import Summary from "./Summary";
import TableItem from "./TableItem";
import TrendingCoin from "./TrendingCoin";

function Homepage() {
  return (
    <Page>
      <div className="px-4">
        <div className="flex items-center justify-start py-4">
          <h3 className="text-gray-700">Cryptocurrency Prices by Market Cap</h3>
          <span className="px-3 mt-1">Show Stats</span>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            The global cryptocurrency market cap today is $2.58 Trillion, a
            -7.8%{" "}
            <span>
              <FiCornerRightDown className="inline-flex text-red-500 -ml-1" />
            </span>{" "}
            change in the last 24 hours.{" "}
            <span className="underline"> Read More</span>
          </p>
        </div>
        <div className="pt-4 pb-3 border-b border-gray-300">
          <div className="btn btn-sm btn-outline btn-accent rounded-full py-1 px-4 border-gray-300">
            <button>USD</button>
          </div>
          <div className="btn btn-sm btn-outline btn-accent rounded-full py-1 px-4 border-gray-300 mx-3 capitalize">
            <button>All Categories</button>
          </div>
          <div className="btn btn-sm btn-outline btn-accent rounded-full py-1 px-4 border-gray-300 capitalize">
            <button>Filter</button>
          </div>
        </div>
      </div>
      <TableItem />
      <TrendingCoin />
      <Summary />
    </Page>
  );
}

export default Homepage;
