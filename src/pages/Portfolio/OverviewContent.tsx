const OverviewContent = () => {
  return (
    <div className="flex items-start justify-center md:flex-row flex-col-reverse px-4 py-8">
      <div className="w-full xl:pr-48 pr-0 py-9 mr-12 text-gray-700 ">
        <h1 className="text-black text-4xl">
          Free & Powerful Crypto <hr className="hidden lg:block" /> Portfolio
          Tracker
        </h1>
        <p className="text-lg my-6">
          Track your crypto earnings like a pro, with a user-friendly and
          reliable portfolio tracker that you can rely on
        </p>
        <div className="mt-10 mb-6">
          <button className="btn btn-md bg-green-light hover:bg-[#69982f] hover:border-[#69982f] border-green-light capitalize rounded-md mr-2 w-32 text-lg font-normal">
            Sign Up
          </button>
          <button className="btn btn-md bg-transparent text-black border-gray-400 hover:border-green-light hover:bg-transparent capitalize rounded-md ml-2 w-32 text-lg font-normal">
            Login
          </button>
        </div>
        <p>Start your portfolio now!</p>
      </div>
      <div className="w-full">
        <img
          src="https://static.coingecko.com/s/portfolio_landing_1-1c41bbe632af5da2cdd0d25b0938c375cc8aec173a571a0a00a1f35867ca2405.png"
          alt="thumbnail"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default OverviewContent;
