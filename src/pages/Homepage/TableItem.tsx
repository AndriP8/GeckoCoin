import React from "react";
import Pagination from "./Pagination";
import NumberFormat from "react-number-format";
import { FaRegStar } from "react-icons/fa";
import { MarketCapTypes } from "types";
import { useQuery } from "react-query";
import { getMarketCap } from "service/homepage";
import { useNavigate } from "react-router-dom";

function TableItem() {
  const params = new URLSearchParams(window.location.search).get("page");

  const [page, setPage] = React.useState(Number(params));

  const navigate = useNavigate();

  const { data } = useQuery(["market_cap", params], () => getMarketCap(page), {
    refetchInterval: 30000,
  });

  const handlePage = (number: number) => {
    navigate(`/?page=${number}`);
    setPage(number);
  };

  const Percentage = ({ percent }: { percent: string | number }) => {
    let newNum = percent === null ? "0" : percent.toString();
    let formatPercent = Number.parseFloat(newNum).toFixed(1);

    if (percent > 0) {
      return <p className="text-green-light">{formatPercent}%</p>;
    } else if (percent === null) {
      return <p>?</p>;
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
              <tr key={item.id} className="hover bg-white h-full">
                <th>
                  <div className="flex items-center">
                    <FaRegStar />
                    <span className="pl-2 font-normal">
                      {page > 1 ? idx + page * 100 - 100 + 1 : idx + 1}
                    </span>
                  </div>
                </th>
                <td>
                  <div className="flex items-center">
                    <div className="flex items-center w-4/5 text-left">
                      <img
                        src={item.image}
                        className="w-5 h-5 mr-4"
                        alt="Coin-name"
                      />
                      <a href={`/coins/${item.id}`}>
                        <span className="font-bold whitespace-normal hidden lg:inline hover:underline">
                          {item.name}
                        </span>
                        <span className="uppercase text-left font-bold whitespace-normal lg:hidden inline hover:underline">
                          {item.symbol}
                        </span>
                      </a>
                    </div>
                    <div>
                      <p className="uppercase text-left font-bold hidden lg:inline ml-2">
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
        <Pagination
          handlePage={() => handlePage(page - 1)}
          page={"Prev"}
          disabled={page === 1}
        />
        <Pagination
          handlePage={() => handlePage(1)}
          page={1}
          active={page === 1}
        />
        <Pagination
          handlePage={() => handlePage(2)}
          page={2}
          active={page === 2}
        />
        <Pagination
          handlePage={() => handlePage(3)}
          page={3}
          active={page === 3}
        />
        <Pagination
          handlePage={() => handlePage(4)}
          page={4}
          active={page === 4}
        />
        <Pagination
          handlePage={() => handlePage(5)}
          page={5}
          active={page === 5}
        />
        <Pagination handlePage={() => handlePage(4)} page={"..."} disabled />
        <Pagination
          handlePage={() => handlePage(114)}
          page={114}
          active={page === 114}
        />
        <Pagination
          handlePage={() =>
            page === 0 ? handlePage(page + 2) : handlePage(page + 1)
          }
          page={"Next"}
        />
      </div>
    </>
  );
}

export default TableItem;
