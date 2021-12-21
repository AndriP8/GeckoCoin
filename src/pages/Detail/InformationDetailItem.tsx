import { BsReddit, BsTwitter, BsFacebook, BsGithub } from "react-icons/bs";

interface urlTypes {
  main_web?: string[];
  blockchain_site?: string[];
  wallets?: string[];
  source_code?: string[];
  subreddit_url?: string;
  twitter_screen_name?: string;
  facebook_username?: string;
  chat_url?: string[];
  forum?: string[];
  tags?: string[];
  link?: "main" | "explorer" | "wallets" | "community" | "source_code" | "tags";
}

const InformationDetailItem = (props: urlTypes) => {
  const {
    main_web,
    blockchain_site,
    wallets,
    source_code,
    forum,
    chat_url,
    twitter_screen_name,
    facebook_username,
    subreddit_url,
    link,
    tags,
  } = props;

  const mainWeb = (str: string) => {
    const path = new URL(str).hostname;
    return path.split(".").length < 3
      ? path.split(".").join(".")
      : path.split(".").splice(1, 3).join(".");
  };

  const explorerWeb = (str: string) => {
    const path = new URL(str).hostname;
    return path.split(".").length < 3
      ? path.split(".").shift()
      : path.split(".")[1];
  };

  const forumWeb = (str: string) => {
    const path = new URL(str).hostname;
    return path.split(".").join(".");
  };

  return (
    <div className="w-full flex flex-wrap font-medium">
      {link === "main" &&
        main_web?.map((val) =>
          val !== "" ? (
            <a
              key={val}
              href={val}
              className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1"
            >
              {mainWeb(val)}
            </a>
          ) : null
        )}
      {link === "explorer" &&
        blockchain_site?.map((val) =>
          val !== "" ? (
            <a
              key={val}
              href={val}
              className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1 capitalize"
            >
              {explorerWeb(val)}
            </a>
          ) : null
        )}
      {link === "wallets" &&
        wallets?.map((val) => (
          <a
            key={val}
            href="/"
            className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1"
          >
            {val}
          </a>
        ))}
      {link === "community" && (
        <>
          {subreddit_url !== "" ? (
            <a
              href={subreddit_url}
              className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1 capitalize"
            >
              <span>
                <BsReddit className="inline-flex mr-1 mb-1" />
              </span>
              Reddit
            </a>
          ) : null}
          {twitter_screen_name !== "" ? (
            <a
              href={`https://twitter.com/${twitter_screen_name}`}
              className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1 capitalize"
            >
              <span>
                <BsTwitter className="inline-flex mr-1 mb-1" />
              </span>
              Twitter
            </a>
          ) : null}
          {facebook_username !== "" ? (
            <a
              href={`https://www.facebook.com/${facebook_username}`}
              className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1 capitalize"
            >
              <span>
                <BsFacebook className="inline-flex mr-1 mb-1" />
              </span>
              Facebook
            </a>
          ) : null}
          {chat_url?.map((val) =>
            val !== "" ? (
              <a
                key={val}
                href={val}
                className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1 capitalize"
              >
                {explorerWeb(val)}
              </a>
            ) : null
          )}
          {forum?.map((val) =>
            val !== "" ? (
              <a
                key={val}
                href={val}
                className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1"
              >
                {forumWeb(val)}
              </a>
            ) : null
          )}
        </>
      )}
      {link === "source_code" &&
        source_code?.slice(0, 1).map((val) => (
          <a
            key={val}
            href={val}
            className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1 capitalize"
          >
            <span>
              <BsGithub className="inline-flex mr-1 mb-1" />
            </span>
            {explorerWeb(val)}
          </a>
        ))}
      {link === "tags" &&
        tags?.map((val) =>
          val !== "" ? (
            <span
              key={val}
              className="bg-gray-200 rounded-md px-3 py-1 mr-1 mb-1"
            >
              {val}
            </span>
          ) : null
        )}
    </div>
  );
};

export default InformationDetailItem;
