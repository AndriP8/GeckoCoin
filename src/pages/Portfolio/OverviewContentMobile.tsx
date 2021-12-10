const OverviewContentMobile = () => {
  return (
    <div className="flex items-start justify-center md:flex-row flex-col px-4 py-12 mt-12 mb-28">
      <img
        src="https://static.coingecko.com/s/portfolio_landing_2_mobile-2555583bc4622eea2d7915546e242404069d9a5102e91f84f8651295bebd5f07.png"
        alt="thumbhnail-2"
        className="mx-auto"
      />
      <div className="mx-auto pt-4 md:pt-24 px-8">
        <h1 className="mx-auto text-4xl">
          Bring it to the next level with mobile app
        </h1>
        <div className="flex justify-center md:flex-row flex-col text-lg">
          <p className="w-full text-left md:text-right px-0 md:px-4 my-4">
            <span className="pr-4">🔄</span>Synced Portfolios
          </p>
          <p className="w-full text-left md:text-right px-0 md:px-4 my-4">
            <span className="pr-4">🔔</span>Price Alerts
          </p>
          <p className="w-full text-left md:text-right px-0 md:px-4 my-4">
            <span className="pr-4">💰</span>Price Widgets
          </p>
        </div>
        <div className="flex justify-start md:justify-center text-lg mt-6 mb-4">
          <p>
            <span>⭐️⭐️⭐️⭐️✨</span> 4.8 average app rating
          </p>
        </div>
        <div className="flex items-center justify-start md:justify-center w-full mb-6">
          <div>
            <a href="/">
              <img
                src="https://static.coingecko.com/s/coingecko_logos/google_play_store-836027fba5bce52aa7f436d7edf8fadf2707c7607842f994e3af58748ef141a0.svg"
                className="w-full h-12"
                alt="icon-playstore"
              />
            </a>
          </div>
          <div className="px-2">
            <a href="/">
              <img
                src="https://static.coingecko.com/s/coingecko_logos/apple_app_store-2b96ff447647976493b4622a5af700da687ffb28b64e3bd8c9c1bbd7ac20d028.svg"
                className="w-full h-12"
                alt="icon-appstore"
              />
            </a>
          </div>
        </div>
        <p className="text-center">
          Trusted by more than 1,000,000 smart crypto traders
        </p>
      </div>
    </div>
  );
};

export default OverviewContentMobile;
