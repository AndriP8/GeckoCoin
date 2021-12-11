import { RiFileCopyLine } from "react-icons/ri";

const InformationDetails = () => {
  return (
    <div className="w-full lg:w-5/12 h-screen">
      <div className="flex flex-wrap text-white">
        <button className="bg-[#69A235] rounded-md py-1 px-3 mr-1 mb-1">
          Buy / Sell
        </button>
        <button className="bg-[#69A235] rounded-md py-1 px-3 mr-1 mb-1">
          Long / Short
        </button>
        <button className="bg-[#69A235] rounded-md py-1 px-3 mr-1 mb-1">
          Earn / Loan
        </button>
        <button className="bg-[#69A235] rounded-md py-1 px-3 mr-1 mb-1">
          Mine
        </button>
      </div>
      <div>
        <h2 className="text-xl">Info</h2>
        <div className="text-sm">
          <div className="flex items-center justify-between">
            <p className="w-1/3 text-gray-600">Website</p>
            <div className="w-full flex flex-wrap font-medium">
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Bitcoin.org
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Bitcoin.org
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-1/3 text-gray-600">Explorers</p>
            <div className="w-full flex flex-wrap font-medium">
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Blockchair
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Btc
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Tokenview
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-1/3 text-gray-600">Wallets</p>
            <div className="w-full flex flex-wrap font-medium">
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                BlCrypto.com - Defi Wallet
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Ledger
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Trezor
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Electrum
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Exdefi
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-1/3 text-gray-600">Comunnity</p>
            <div className="w-full flex flex-wrap font-medium">
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Reddit
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Twitter
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Facebook
              </a>
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                bitcointalk.org
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-1/3 text-gray-600">Source code</p>
            <div className="w-full flex flex-wrap font-medium">
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Github
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-1/3 text-gray-600">API id</p>
            <div className="w-full flex flex-wrap font-medium">
              <span className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1">
                bitcoin <RiFileCopyLine className="inline cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <p className="w-1/3 text-gray-600">Tags</p>
            <div className="w-full flex flex-wrap font-medium">
              <a
                href="/"
                className=" bg-gray-200 rounded-md p-2 py-1 mr-1 mb-1"
              >
                Cryptocurrency
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationDetails;
