import { useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const page = location.pathname.split("").splice(7).join("");

  return (
    <div className="text-sm breadcrumbs p-4 font-medium">
      <ul>
        <li>
          <a href="/" className="text-green-light noUnderline">
            Coins
          </a>
        </li>
        <li className="text-gray-500 capitalize">{page}</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
