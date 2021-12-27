import React from "react";
import { FaStar, FaPlusCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import NavItem from "./NavItem";

function NavbarTabs() {
  const location = useLocation();

  const [page, setPage] = React.useState("");

  React.useEffect(() => {
    setPage(location.pathname.split("").splice(1).join(""));
  }, [location.pathname]);

  return (
    <div className="mx-4 border-b border-gray-300 overflow-x-scroll lg:overflow-auto">
      <div className="flex items-center justify-start text-gray-500 font-medium">
        <NavItem route="/portfolio" itemIcon active={page === "portfolio"}>
          <FaStar className="text-yellow-500" />
          <span className="pl-2">Portfolio</span>
        </NavItem>
        <NavItem route="/" active={page === ""}>
          Coins
        </NavItem>
        <NavItem route="/#" active={page === "recently_added"}>
          Recently Added
        </NavItem>
        <NavItem route="/#" active={page === "trending"}>
          Large Movers
        </NavItem>
        <NavItem route="/#" active={page === "categories"}>
          Categories
        </NavItem>
        <NavItem route="/#" itemIcon>
          <FaPlusCircle />
          <span className="px-1">Custom Tabs</span>
          <span className="bg-red-500 text-xs text-white px-2 rounded-md">
            New
          </span>
        </NavItem>
      </div>
    </div>
  );
}

export default NavbarTabs;
