import NumberFormat from "react-number-format";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { FiCornerRightDown, FiStar } from "react-icons/fi";
import { TiArrowForwardOutline } from "react-icons/ti";
import { IoMdNotifications, IoMdStar } from "react-icons/io";
import { getCoinDetails } from "service/homepage";
import MarketDataDetails from "./MarketDataDetails";
import React from "react";
import { MarketDataTypes } from "types";

const MarketData = () => {
  const location = useLocation();
  const page = location.pathname.split("").splice(7).join("");

  const { data } = useQuery("coin-detaails", () => getCoinDetails(page));

  const [detail, setDetails] = React.useState<MarketDataTypes>();

  React.useEffect(() => {
    setDetails(data?.data);
  }, [data?.data]);

  return (
    <div className="w-full mr-8">
      <div className="bg-gray-800 rounded-md py-1 px-2 mb-2 badge">
        <p className="text-xs font-medium">
          Rank <span>#{detail?.market_cap_rank}</span>
        </p>
      </div>
      <div className="flex items-center">
        <img src={detail?.image.small} className="w-7 h-7 mr-2" alt="" />
        <p className="text-xl font-bold">
          {detail?.name} <span className="uppercase">({detail?.symbol})</span>
        </p>
      </div>
      <div className="flex items-center py-2 font-bold">
        <p className="text-3xl pr-2">
          <NumberFormat
            value={detail?.market_data.current_price.usd}
            displayType="text"
            thousandSeparator={true}
            prefix="$"
          />
        </p>
        <p className="text-xl text-green-light">4.8%</p>
      </div>
      <div className="text-gray-600 text-sm">
        <p>
          {detail?.market_data.current_price.btc} BTC
          <span className="ml-2">
            0.0%
            <FiCornerRightDown className="inline-flex text-red-500 -ml-1" />
          </span>
        </p>
      </div>
      <div className="flex items-center w-3/5 my-3">
        <div className="border border-gray-400 rounded-md py-1 px-[14px] mr-1">
          <TiArrowForwardOutline className="text-lg" />
        </div>
        <div className="border border-gray-400 rounded-md py-1 px-[14px] mr-1">
          <IoMdNotifications className="text-lg" />
        </div>
        <div className="border border-gray-400 rounded-md py-1 px-[14px] mr-1">
          <FiStar className="text-lg" />
        </div>
        <div className="hidden md:flex items-center px-1 text-xs font-medium bg-gray-300 rounded">
          <IoMdStar className="text-yellow-400 text-xl" />
          <span>831,215 people like this</span>
        </div>
      </div>
      <div className="w-3/5 space-y-2 artboard phone">
        <progress className="progress" value="100" max="100"></progress>
        <div className="w-full flex items-center justify-between text-black font-medium">
          <p>$47,032.56</p>
          <p>24H Range</p>
          <p>$50,087.88</p>
        </div>
      </div>
      <MarketDataDetails market_data={detail?.market_data} />
    </div>
  );
};

export default MarketData;
