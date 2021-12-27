import React from "react";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import NumberFormat from "react-number-format";
import { DetailsContext } from "pages/Detail";

const MarketDataDetails = () => {
  const details = React.useContext(DetailsContext);

  return (
    <div className="w-full block lg:flex lg:items-start lg:justify-between text-[13px] py-3">
      <div className="w-full mr-2">
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="text-gray-600">
            Market Cap <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
          <span className="text-gray-900 font-medium">
            {details?.market_data.current_price.usd && (
              <NumberFormat
                value={
                  details?.market_data.current_price.usd *
                  details?.market_data.circulating_supply
                }
                displayType="text"
                thousandSeparator={true}
                prefix="$"
              />
            )}
          </span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="text-gray-600">
            24 Hour Trading Vol{" "}
            <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
          <span className="text-gray-900 font-medium">$30,698,362,241</span>
        </div>
        {details?.market_data.max_supply && (
          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <span className="text-gray-600">
              Fully Diluted Valuation{" "}
              <AiOutlineQuestionCircle className="inline text-sm" />
            </span>
            <span className="text-gray-900 font-medium">
              <NumberFormat
                value={
                  details?.market_data.current_price.usd *
                  details?.market_data.max_supply
                }
                displayType="text"
                thousandSeparator={true}
                prefix="$"
              />
            </span>
          </div>
        )}
      </div>
      <div className="w-full ml-0 lg:ml-2">
        <div className="w-full flex items-center justify-between py-3 border-b border-gray-300">
          <span className="text-gray-600">
            Circulating Supply{" "}
            <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
          <span className="text-gray-900 font-medium">
            <NumberFormat
              value={details?.market_data.circulating_supply}
              displayType="text"
              thousandSeparator={true}
            />{" "}
            <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
        </div>
        <div className="w-full flex items-center justify-between py-3 border-b border-gray-300">
          <span className="text-gray-600">
            Total Supply <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
          {details?.market_data.total_supply ? (
            <span className="text-gray-900 font-medium">
              <NumberFormat
                value={details?.market_data.total_supply}
                displayType="text"
                thousandSeparator={true}
              />
            </span>
          ) : (
            <span className="text-gray-900 font-medium">∞</span>
          )}
        </div>
        <div className="w-full flex items-center justify-between py-3 border-b border-gray-300">
          <span className="text-gray-600">
            Max Supply <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
          {details?.market_data.max_supply ? (
            <span className="text-gray-900 font-medium">
              <NumberFormat
                value={details?.market_data.max_supply}
                displayType="text"
                thousandSeparator={true}
              />
            </span>
          ) : (
            <span className="text-gray-900 font-medium">∞</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketDataDetails;
