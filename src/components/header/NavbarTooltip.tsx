import React from "react";
import { Tooltip } from "react-tippy";

interface NavbarTooltipTypes {
  children: React.ReactNode;
  firstLink: string[];
  secondLinkTitle?: string;
  secondLink?: string[];
  thirdLinkTitle?: string;
  thirdLink?: string[];
}

const NavbarTooltip = ({
  children,
  firstLink,
  secondLink,
  secondLinkTitle,
  thirdLink,
  thirdLinkTitle,
}: NavbarTooltipTypes) => {
  return (
    <Tooltip
      position="bottom-start"
      trigger="mouseenter"
      interactive
      html={
        <div className="bg-gray-100 rounded-md border border-gray-300 py-3 flex flex-col">
          {firstLink.map((link) => (
            <a href="/#" key={link} className="navbar-item-tooltip">
              {link}
            </a>
          ))}
          {secondLinkTitle && (
            <div className="flex flex-col border-t border-gray-300">
              <h6 className="px-4 font-bold text-black text-xs pb-2 pt-3">
                {secondLinkTitle}
              </h6>
              {secondLink?.map((link) => (
                <a href="/#" key={link} className="navbar-item-tooltip">
                  {link}
                </a>
              ))}
            </div>
          )}
          {thirdLinkTitle && (
            <div className="flex flex-col border-t border-gray-300">
              <h6 className="px-4 font-bold text-black text-xs pb-2 pt-3">
                {thirdLinkTitle}
              </h6>
              {thirdLink?.map((link) => (
                <a href="/#" key={link} className="navbar-item-tooltip">
                  {link}
                </a>
              ))}
            </div>
          )}
        </div>
      }
    >
      {children}
    </Tooltip>
  );
};

export default NavbarTooltip;
