import React from "react";
import { DetailsContext } from "pages/Detail";

const Breadcrumb = () => {
  const details = React.useContext(DetailsContext);
  console.log(details);

  return (
    <div className="text-sm breadcrumbs p-4 font-medium">
      <ul>
        <li>
          <a href="/" className="text-green-light noUnderline">
            Coins
          </a>
        </li>
        <li className="text-gray-500">{details?.name}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
