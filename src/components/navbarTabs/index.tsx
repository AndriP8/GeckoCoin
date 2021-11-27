import { FaStar, FaPlusCircle } from "react-icons/fa";

function NavbarTabs() {
  return (
    <div className="mx-4 border-b border-gray-300 overflow-x-scroll lg:overflow-auto">
      <div className="flex items-center justify-start text-gray-500 font-medium">
        <a
          href="/"
          className="flex items-center pr-4 py-4 border-b-2 border-transparent items-tabs-hover whitespace-nowrap"
        >
          <FaStar className="text-yellow-500" />
          <span className="pl-2">Portofolio</span>
        </a>
        <a
          href="/"
          className="p-4 border-b-2 border-transparent items-tabs-hover whitespace-nowrap"
        >
          Coins
        </a>
        <a
          href="/"
          className="p-4 border-b-2 border-transparent items-tabs-hover whitespace-nowrap"
        >
          Recently Added
        </a>
        <a
          href="/"
          className="p-4 border-b-2 border-transparent items-tabs-hover whitespace-nowrap"
        >
          Large Movers
        </a>
        <a
          href="/"
          className="p-4 border-b-2 border-transparent items-tabs-hover whitespace-nowrap"
        >
          Categories
        </a>
        <a
          href="/"
          className="flex items-center p-4 border-b-2 border-transparent items-tabs-hover whitespace-nowrap"
        >
          <FaPlusCircle />
          <span className="px-1">Custom Tabs</span>
          <span className="bg-red-500 text-xs text-white px-2 rounded-md">
            New
          </span>
        </a>
      </div>
    </div>
  );
}

export default NavbarTabs;
