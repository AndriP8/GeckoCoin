import NavbarTooltip from "./NavbarTooltip";

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
          <div className="flex items-baseline">
            <NavbarTooltip
              firstLink={[
                "market cap rank",
                "recently added",
                "categories",
                "discover",
                "large movers",
                "high volumes",
              ]}
              secondLinkTitle="Derivatives"
              secondLink={["perpetuals", "futures"]}
            >
              <a href="/" className="navbar-item">
                Coins
              </a>
            </NavbarTooltip>
            <NavbarTooltip firstLink={["spot", "DEX", "derivatives"]}>
              <a href="/" className="navbar-item">
                Exchanges
              </a>
            </NavbarTooltip>
            <a href="/" className="navbar-item">
              DeFi
            </a>
            <NavbarTooltip
              firstLink={[
                "NFTs & collectibles",
                "NFT spotlight",
                "NFT related coins",
              ]}
            >
              <a href="/" className="navbar-item">
                NFT
              </a>
            </NavbarTooltip>
            <a href="/" className="navbar-item">
              Portfolio
            </a>
            <NavbarTooltip
              firstLink={["crypto reports", "newsletter", "podcast", "blog"]}
              secondLinkTitle="Books"
              secondLink={["how to bitcoin", "how to deFi"]}
              thirdLinkTitle="Guides"
              thirdLink={["coinGecko buzz", "glossary"]}
            >
              <a href="/" className="navbar-item">
                Publication
              </a>
            </NavbarTooltip>
            <NavbarTooltip
              firstLink={[
                "earn crypto",
                "yield farming",
                "compare coins",
                "explore all coins",
                "bitcoin halving",
              ]}
              secondLinkTitle="Public Companies Treasury"
              secondLink={["bitcoin treasury", "ethereum treasury"]}
              thirdLinkTitle="In The News"
              thirdLink={["beam updates", "latest news"]}
            >
              <a href="/" className="navbar-item">
                Resource
              </a>
            </NavbarTooltip>
            <NavbarTooltip
              firstLink={["premium subscription", "mobile app", "store"]}
              secondLinkTitle="Developers"
              secondLink={[
                "crypto API",
                "widgets",
                "request form",
                "methodology",
              ]}
            >
              <a href="/" className="navbar-item">
                Products
              </a>
            </NavbarTooltip>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-auto">
        <input
          type="text"
          className="p-2 rounded-lg border bg-gray-100 border-gray-300 lg:w-72 w-full"
          placeholder="Search"
        />
      </div>
    </div>
  );
}

export default Navbar;
