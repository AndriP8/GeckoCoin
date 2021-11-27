import { FaGasPump } from "react-icons/fa";

function HeaderStats() {
  return (
    <div className="flex items-center justify-start border-b border-gray-300 px-4 py-3 text-xs overflow-x-scroll lg:overflow-auto">
      <div className="wrap-items-stats">
        <p>Coin : </p>
        <span className="font-normal text-blue-400"> 1159</span>
      </div>
      <div className="wrap-items-stats">
        <p>Exchange : </p>
        <span className="font-normal text-blue-400">525</span>
      </div>
      <div className="wrap-items-stats">
        <p>Market Cap : </p>
        <span className="font-normal text-blue-400">
          $2,588,761,513,501
        </span>{" "}
        <span className="font-normal text-red-500">-7.4%</span>
      </div>
      <div className="wrap-items-stats">
        <p>24h Vol : </p>
        <span className="font-normal text-blue-400">$206,282,720,540</span>
      </div>
      <div className="wrap-items-stats">
        <p>Dominance : </p>
        <span className="font-normal">BTC 39.5%</span>{" "}
        <span className="font-normal">ETH 18.7%</span>
      </div>
      <div className="wrap-items-stats items-center">
        <FaGasPump className="pr-1" />
        <p>ETH Gas : </p>
        <span className="font-normal">87 gwei</span>
      </div>
    </div>
  );
}

export default HeaderStats;
