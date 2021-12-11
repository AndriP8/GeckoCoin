import { AiOutlineQuestionCircle } from "react-icons/ai";
import NumberFormat from "react-number-format";

interface MarketDataDetailsProps {
  market_data: any;
}

const MarketDataDetails = ({ market_data }: MarketDataDetailsProps) => {
  return (
    <div className="w-full block lg:flex lg:items-center lg:justify-between text-[13px] py-3">
      <div className="w-full mr-2">
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="text-gray-600">
            Market Cap <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
          <span className="text-gray-900 font-medium">
            <NumberFormat
              value={
                market_data?.current_price.usd * market_data?.circulating_supply
              }
              displayType="text"
              thousandSeparator={true}
              prefix="$"
            />
          </span>
        </div>
        <div className="flex items-center justify-between py-3 border-b border-gray-300">
          <span className="text-gray-600">
            24 Hour Trading Vol{" "}
            <AiOutlineQuestionCircle className="inline text-sm" />
          </span>
          <span className="text-gray-900 font-medium">
            $30,698,362,241 null
          </span>
        </div>
        {market_data?.max_supply && (
          <div className="flex items-center justify-between py-3 border-b border-gray-300">
            <span className="text-gray-600">
              Fully Diluted Valuation{" "}
              <AiOutlineQuestionCircle className="inline text-sm" />
            </span>
            <span className="text-gray-900 font-medium">
              <NumberFormat
                value={market_data?.current_price.usd * market_data?.max_supply}
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
              value={market_data?.circulating_supply}
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
          {market_data?.total_supply ? (
            <span className="text-gray-900 font-medium">
              <NumberFormat
                value={market_data?.total_supply}
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
          {market_data?.max_supply ? (
            <span className="text-gray-900 font-medium">
              <NumberFormat
                value={market_data?.max_supply}
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
