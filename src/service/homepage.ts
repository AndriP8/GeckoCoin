import axios from "axios";

const ROOT_API = process.env.REACT_APP_ROOT_API;
const VERSION_API = process.env.REACT_APP_VERSION_API;

export const getMarketCap = async (page: number) => {
  return axios.get(
    `${ROOT_API}/${VERSION_API}/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=${page}&price_change_percentage=1h%2C24h%2C7d`
  );
};

export const getTrendingCoin = async () => {
  return axios.get(`${ROOT_API}/${VERSION_API}/search/trending`);
};

export const getCoinDetails = async (coinId: string) => {
  return axios.get(
    `${ROOT_API}/${VERSION_API}/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`
  );
};
