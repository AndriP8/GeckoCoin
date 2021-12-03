import NumberFormat from "react-number-format";
import { FaRegStar } from "react-icons/fa";
import { MarketCapTypes } from "types";
import React from "react";
import { useQuery } from "react-query";
import { getMarketCap } from "service/homepage";
import { useNavigate } from "react-router-dom";

function TableItem() {
  const [page, setPage] = React.useState(1);

  const navigate = useNavigate();

  const { data } = useQuery(["market_cap", page], () => getMarketCap(page), {
    refetchInterval: 30000,
  });

  const handlePage = (number: number): any => {
    navigate(`/?page=${number}`);
    setPage(number);
  };

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
    <>
      <div className="overflow-x-auto px-4 h-screen">
        <table className="table w-full text-right">
          <thead>
            <tr className="border-b-2">
              <th className="text-center w-[2%]">#</th>
              <th className="text-left w-1/5">Coin</th>
              <th>Price</th>
              <th>1h</th>
              <th>24h</th>
              <th>7d</th>
              <th>24h Volume</th>
              <th>Mkt Cap</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((item: MarketCapTypes, idx: number) => (
              <tr key={item.id} className="hover bg-white">
                <th className="flex items-center">
                  <FaRegStar />
                  <span className="pl-2 font-normal">
                    {page > 1 ? idx + page * 100 - 100 + 1 : idx + 1}
                  </span>
                </th>
                <td>
                  <div className="flex items-center">
                    <div className="lg:flex lg:items-center lg:w-4/5 w-max text-left">
                      <img
                        src={item.image}
                        className="w-5 h-5"
                        alt="Coin-name"
                      />
                      <span className="font-bold ml-4 whitespace-normal hidden lg:inline">
                        {item.name}
                      </span>
                    </div>
                    <div>
                      <p className="uppercase text-left font-bold lg:font-normal ml-2">
                        {item.symbol}
                      </p>
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
      <div className="btn-group px-4 justify-start lg:justify-center my-8 pagination">
        <button
          className="btn btn-sm btn-pagin-hover"
          onClick={() => handlePage(page - 1)}
        >
          Prev
        </button>
        <button
          className="btn btn-sm btn-pagin-hover btn-active"
          onClick={() => handlePage(1)}
        >
          1
        </button>
        <button
          className="btn btn-sm btn-pagin-hover"
          onClick={() => handlePage(2)}
        >
          2
        </button>
        <button
          className="btn btn-sm btn-pagin-hover"
          onClick={() => handlePage(3)}
        >
          3
        </button>
        <button
          className="btn btn-sm btn-pagin-hover"
          onClick={() => handlePage(4)}
        >
          4
        </button>
        <button
          className="btn btn-sm btn-pagin-hover"
          onClick={() => handlePage(page + 1)}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default TableItem;
