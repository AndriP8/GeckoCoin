import { GoSearch } from "react-icons/go";
import { FaRegCalendarPlus, FaListAlt } from "react-icons/fa";

function TrendingCategories() {
  return (
    <>
      <div className="card shadow-2xl lg:card-side bg-primary text-primary-content">
        <div className="card-body p-4 bg-white text-gray-600 font-bold flex justify-center items-start">
          <div className="flex items-center justify-between">
            <GoSearch className="mt-1 mr-2 text-green-light text-2xl" />
            <p>More Coins</p>
          </div>
        </div>
      </div>
      <div className="card shadow-2xl lg:card-side bg-primary text-primary-content">
        <div className="card-body p-4 bg-white text-gray-600 font-bold flex justify-center items-start">
          <div className="flex items-center justify-between">
            <FaListAlt className="mt-1 mr-2 text-green-light text-2xl" />
            <p>Top Categories</p>
          </div>
        </div>
      </div>
      <div className="card shadow-2xl lg:card-side bg-primary text-primary-content">
        <div className="card-body p-4 bg-white text-gray-600 font-bold flex justify-center items-start">
          <div className="flex items-center justify-between">
            <FaRegCalendarPlus className="mt- mr-2 text-green-light text-2xl" />
            <p>Recently Added</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TrendingCategories;
