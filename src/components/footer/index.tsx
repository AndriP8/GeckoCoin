function Footer() {
  return (
    <footer className="px-4 bg-[#181818] h-auto text-gray-400 text-sm">
      <div className="lg:flex lg:items-start lg:justify-between lg:pt-12 hidden">
        <div className="mr-20 max-w-xs w-full">
          <img
            src="https://static.coingecko.com/s/coingecko-logo-white-3f2aeb48e13428b7199395259dbb96280bf47ea05b2940ef7d3e87c61e4d8408.png"
            className="h-16"
            alt="coinCrypto"
          />
          <p className=" my-3">
            CoinGecko provides a fundamental analysis of the crypto market. In
            addition to tracking price, volume and market capitalisation,
            CoinGecko tracks community growth, open-source code development,
            major events and on-chain metrics.
          </p>
        </div>
        <div className="px-1 xl:px-3">
          <div className="pt-2">
            <h6 className="text-gray-300">About CoinGecko</h6>
            <ul className="footer-item">
              <li>
                <a href="/">About Us</a>
              </li>
              <li>
                <a href="/">Methodology</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Branding Guide</a>
              </li>
              <li>
                <a href="/">Request Form</a>
              </li>
              <li>
                <a href="/">Advertising</a>
              </li>
              <li>
                <a href="/">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-1 xl:px-3">
          <div className="pt-2">
            <h6 className="text-gray-300">For Developers</h6>
            <ul className="footer-item">
              <li>
                <a href="/">Developer API</a>
              </li>
              <li>
                <a href="/">Widgets</a>
              </li>
            </ul>
          </div>
          <div className="pt-8">
            <h6 className="text-gray-300">Donations</h6>
            <ul className="footer-item">
              <li>
                <a href="/">Bitcoin</a>
              </li>
              <li>
                <a href="/">Ethereum</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-1 xl:px-3">
          <div className="pt-2">
            <h6 className="text-gray-300">Community</h6>
            <ul className="footer-item">
              <li>
                <a href="/">Twitter</a>
              </li>
              <li>
                <a href="/">Telegram Chat</a>
              </li>
              <li>
                <a href="/">Telegram News</a>
              </li>
              <li>
                <a href="/">Instagram</a>
              </li>
              <li>
                <a href="/">Reddit</a>
              </li>
              <li>
                <a href="/">Discord</a>
              </li>
              <li>
                <a href="/">Facebook</a>
              </li>
              <li>
                <a href="/">Youtube</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-2 px-1 xl:pl-3 max-w-xs w-full">
          <h6 className="text-gray-300">
            Interested to stay up-to-date with cryptocurrencies?
          </h6>
          <h6 className="my-3">
            Get the latest crypto news, updates, and reports by subscribing to
            our free newsletter.
          </h6>
          <div className="form-control">
            <input
              type="text"
              className="px-3 py-2 rounded-md input-primary outline-none text-gray-700"
              placeholder="Enter Your Email"
            />
          </div>
          <button className="btn btn-sm bg-green-light hover:bg-[#69982f] capitalize rounded-md my-2">
            Subscribe
          </button>
        </div>
      </div>
      <div className="lg:flex lg:items-start lg:justify-between lg:pt-2 lg:pb-10">
        <div className="pt-1">
          <div className="my-1 hidden lg:block">
            <a href="/" className="pr-[5px]">
              <span>Help Center</span>
            </a>
            <a href="/" className="px-[5px] mini-border-right">
              <span>Contact</span>
            </a>
            <a href="/" className="px-[5px] mini-border-right">
              <span>Bug Bounty</span>
            </a>
            <a href="/" className="px-[5px] mini-border-right">
              <span>Disclaimer</span>
            </a>
          </div>
          <div className="my-1 flex items-center justify-center lg:block lg:p-0 text-white lg:text-gray-400">
            <a href="/" className="inline-flex lg:hidden">
              <span className="text-[13px] lg:text-sm">Disclaimer</span>
            </a>
            <span className="mx-1 text-gray-400 inline lg:hidden">•</span>
            <a href="/" className="lg:pr-[5px] pr-0">
              <span className="text-[13px] lg:text-sm">Terms of Service</span>
            </a>
            <span className="ml-1 text-gray-400 inline lg:hidden">•</span>
            <a
              href="/"
              className="px-[5px] border-0 lg:border-l-[1.5px] border-gray-400"
            >
              <span className="text-[13px] lg:text-sm">Privacy Policy</span>
            </a>
            <a
              href="/"
              className="px-[5px] hidden lg:inline-flex border-0 lg:border-l-[1.5px] border-gray-400"
            >
              <span>Ad Policy</span>
            </a>
          </div>
          <div className="flex items-center justify-center lg:block lg:p-0 pt-1 pb-2">
            <p className="text-[13px] lg:text-sm">
              © 2021 CoinGecko. All Rights Reserved.
            </p>
          </div>
        </div>
        <div className="hidden lg:block max-w-xs px-1 xl:pl-3 w-full">
          <h6 className="text-gray-300">Download our app now</h6>
          <div className="flex items-center w-full py-3">
            <div>
              <img
                src="https://static.coingecko.com/s/coingecko_logos/google_play_store-836027fba5bce52aa7f436d7edf8fadf2707c7607842f994e3af58748ef141a0.svg"
                className="w-full h-10"
                alt="icon-playstore"
              />
            </div>
            <div className="px-2">
              <img
                src="https://static.coingecko.com/s/coingecko_logos/apple_app_store-2b96ff447647976493b4622a5af700da687ffb28b64e3bd8c9c1bbd7ac20d028.svg"
                className="w-full h-10"
                alt="icon-appstore"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
