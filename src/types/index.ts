export interface MarketCapTypes {
  id: string;
  name: string;
  symbol: string;
  image: string;
  current_price: number;
  price_change_percentage_1h_in_currency: number;
  price_change_percentage_24h_in_currency: number;
  price_change_percentage_7d_in_currency: number;
  total_volume: number;
  market_cap: number;
}
interface TrendingCoinTypes {
  name: string;
  small: string;
}

export interface TrendingCoinItemsTypes {
  item: TrendingCoinTypes;
}

export interface MarketDataDetailsTypes {
  current_price: {
    btc: number;
    usd: number;
  };
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
}

export interface CoinDetailsTypes {
  id: string;
  categories: string[];
  market_cap_rank: string;
  image: {
    small: string;
  };
  name: string;
  symbol: string;
  market_data: MarketDataDetailsTypes;
}
