import { IoMdArrowDropdown, IoMdBookmark } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";

function Header() {
  return (
    <div className="navbar justify-between px-4">
      <div className="lg:hidden block">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
      <div className="lg:hidden block bg-transparent">
        <img
          src="https://static.coingecko.com/s/coingecko-logo-d13d6bcceddbb003f146b33c2f7e8193d72b93bb343d38e392897c3df3e78bdd.png"
          alt="CoinCrypto"
          className="w-36 h-[38px] text-gray-700"
        />
      </div>
      <div className="h-auto flex lg:justify-end lg:w-full w-auto">
        <ul className="flex justify-center text-xs text-gray-700">
          <li className="header-item-lg">
            <span>EN</span>
            <IoMdArrowDropdown />
          </li>
          <li className="header-item-lg">
            <span>USD</span>
            <IoMdArrowDropdown />
          </li>
          <li className="header-item-lg hover:text-green-light">
            <span>Help</span>
          </li>
          <li className="header-item-xs hover:text-green-light">
            <IoMdBookmark />
          </li>
          <li className="header-item-xs lg:hidden">
            <FaUserAlt />
          </li>
          <li className="header-item-lg hover:text-green-light">
            <span>Login</span>
          </li>
          <li className="px-2 lg:flex items-center cursor-pointer text-green-light hidden">
            <span>Free Sign Up</span>
          </li>
          <li className="header-item-lg ">
            <a
              href="/"
              className="text-xs font-bold text-green-light btn btn-sm bg-transparent hover:bg-gray-200 border-green-light"
            >
              Subscribe
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
