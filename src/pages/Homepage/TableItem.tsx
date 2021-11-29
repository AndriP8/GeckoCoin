import { FaRegStar } from "react-icons/fa";
import NumberFormat from "react-number-format";
import { MarketCapTypes } from "types";
import { useQuery } from "react-query";
import axios from "axios";

const fetchMarketCap = () => {
  return axios.get(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=2&page=1&price_change_percentage=1h%2C24h%2C7d"
  );
};

function TableItem() {
  const { isLoading, data } = useQuery("market_cap", fetchMarketCap, {
    refetchInterval: 600000,
  });

  if (isLoading) {
    return <h1>Loading.....</h1>;
  }

  const Percentage = ({ percent }: { percent: any }) => {
    let formatPercent: any;
    formatPercent = Number.parseFloat(percent).toFixed(1);

    if (percent > 0) {
      return <p className="text-green-light">{formatPercent}%</p>;
    } else {
      return <p className="text-red-600">{formatPercent}%</p>;
    }
  };

  return (
    <div className="overflow-x-auto px-4 h-screen">
      <table className="table w-full">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Coin</th>
            <th>Price</th>
            <th>1h</th>
            <th>24h</th>
            <th>7d</th>
            <th>24h Volume</th>
            <th>Mkt Cap</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((item: MarketCapTypes) => (
            <tr key={item.id} className="hover">
              <th className="flex items-center">
                <FaRegStar />
                <span className="pl-2">{1}</span>
              </th>
              <td>
                <div className="flex items-center justify-between">
                  <div className="flex items-center mr-12">
                    <img src={item.image} className="w-5 h-5" alt="Coin-name" />
                    <span className="font-bold ml-4">{item.name}</span>
                  </div>
                  <div>
                    <p className="uppercase text-left pr-2">{item.symbol}</p>
                  </div>
                </div>
              </td>
              <td>
                <NumberFormat
                  value={item.current_price}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                />
              </td>
              <td>
                <Percentage
                  percent={item.price_change_percentage_1h_in_currency}
                />
              </td>
              <td>
                <Percentage
                  percent={item.price_change_percentage_24h_in_currency}
                />
              </td>
              <td>
                <Percentage
                  percent={item.price_change_percentage_7d_in_currency}
                />
              </td>
              <td>
                <NumberFormat
                  value={item.total_volume}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                />
              </td>
              <td>
                <NumberFormat
                  value={item.market_cap}
                  displayType="text"
                  thousandSeparator={true}
                  prefix="$"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableItem;
