function Navbar() {
  return (
    <div className="navbar justify-between mb-2text-black border-0 lg:border-t lg:border-b border-gray-300 p-4">
      <div className="lg:flex hidden">
        <div className="flex-1 bg-transparent">
          <img
            src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
            alt="CoinCrypto"
            className="w-36 h-[38px]"
          />
        </div>
        <div className="flex-none hidden px-2 mx-2 lg:flex">
          <div className="flex items-center">
            <a href="/" className="navbar-item">
              Coins
            </a>
            <a href="/" className="navbar-item">
              Exchanges
            </a>
            <a href="/" className="navbar-item">
              DeFi
            </a>
            <a href="/" className="navbar-item">
              NFT
            </a>
            <a href="/" className="navbar-item">
              Portfolio
            </a>
            <a href="/" className="navbar-item">
              Publication
            </a>
            <a href="/" className="navbar-item">
              Resource
            </a>
            <a href="/" className="navbar-item">
              Products
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto">
        <input
          type="text"
          className="p-2 rounded-lg border bg-gray-100 border-gray-300 outline lg:w-72 w-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Navbar;
