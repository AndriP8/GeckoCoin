import { useQuery } from "react-query";
import { getTrendingCoin } from "service/homepage";
import { TrendingCoinItemsTypes } from "types";
import TrendingCategories from "./TrendingCategories";

function TrendingCoin() {
  const { data } = useQuery("trending-coin", getTrendingCoin);

  return (
    <div className="h-auto px-4 py-10">
      <div>
        <h3 className="text-gray-700">Trending Coins</h3>
        <div className="grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-4 my-10">
          {data?.data.coins.map(({ item }: TrendingCoinItemsTypes) => (
            <div
              key={item.name}
              className="card shadow-2xl lg:card-side bg-primary text-primary-content"
            >
              <div className="card-body p-4 bg-white">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <img
                      src={item.small}
                      className="w-9 h-9 mr-1"
                      alt="Coin-icon"
                    />
                    <div>
                      <p className="text-gray-600 text-xs font-medium">
                        {item.name}
                      </p>
                      <p className="text-black">$0.33423432</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-green-light">13%</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <TrendingCategories />
        </div>
      </div>
    </div>
  );
}

export default TrendingCoin;
