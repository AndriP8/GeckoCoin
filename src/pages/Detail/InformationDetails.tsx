import React from "react";
import { RiFileCopyLine } from "react-icons/ri";
import { DetailsContext } from ".";
import InformationDetailItem from "./InformationDetailItem";

const InformationDetails = () => {
  const details = React.useContext(DetailsContext);

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
          <div className="flex items-start justify-between">
            <p className="w-1/3 text-gray-600 pt-1">Website</p>
            <InformationDetailItem
              main_web={details?.links.homepage}
              link="main"
            />
          </div>
          <div className="flex items-start justify-between">
            <p className="w-1/3 text-gray-600 pt-1">Explorers</p>
            <InformationDetailItem
              blockchain_site={details?.links.blockchain_site}
              link="explorer"
            />
          </div>
          <div className="flex items-start justify-between">
            <p className="w-1/3 text-gray-600 pt-1">Wallets</p>
            <InformationDetailItem
              wallets={[
                "Crypto.com - DeFi Wallet",
                "Ledger",
                "Trezor",
                "Electrum",
              ]}
              link="wallets"
            />
          </div>
          <div className="flex items-start justify-between">
            <p className="w-1/3 text-gray-600 pt-1">Comunnity</p>
            <InformationDetailItem
              forum={details?.links.official_forum_url}
              chat_url={details?.links.chat_url}
              twitter_screen_name={details?.links.twitter_screen_name}
              facebook_username={details?.links.facebook_username}
              subreddit_url={details?.links.subreddit_url}
              link="community"
            />
          </div>
          <div className="flex items-start justify-between">
            <p className="w-1/3 text-gray-600 pt-1">Source code</p>
            <InformationDetailItem
              source_code={details?.links.repos_url.github}
              link="source_code"
            />
          </div>
          <div className="flex items-start justify-between">
            <p className="w-1/3 text-gray-600 pt-1">API id</p>
            <div className="w-full flex flex-wrap font-medium">
              <span className=" bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1">
                {details?.id}{" "}
                <RiFileCopyLine className="inline cursor-pointer" />
              </span>
            </div>
          </div>
          <div className="flex items-start justify-between">
            <p className="w-1/3 text-gray-600 pt-1">Tags</p>
            <InformationDetailItem tags={details?.categories} link="tags" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationDetails;
