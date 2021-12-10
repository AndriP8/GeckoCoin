const Feature = () => {
  return (
    <div className="flex items-start justify-center md:flex-row flex-col px-4">
      <div className="w-full md:w-1/3 my-4 md:mr-8">
        <p className="font-bold text-lg text-gray-600 py-5">
          <span className="pr-2">📈</span>
          Real-time Price Data (1,000+ coins)
        </p>
        <p>
          From the world's largest independent cryptocurrency data aggregator
        </p>
      </div>
      <div className="w-full md:w-1/3 my-4 md:mx-8">
        <p className="font-bold text-lg text-gray-600 py-5">
          <span className="pr-2">📲</span>
          Synced across Web & Mobile App
        </p>
        <p>Portfolio tracking at your fingertips - anytime, anywhere</p>
      </div>
      <div className="w-full md:w-1/3 my-4 md:ml-8">
        <p className="font-bold text-lg text-gray-600 py-5">
          <span className="pr-2">📊</span>
          Create Multiple Portfolios
        </p>
        <p>
          Cover all strategies - conservative, risky, long term HODL, DeFi,
          low-cap gems, high risk positions and more!
        </p>
      </div>
    </div>
  );
};

export default Feature;
