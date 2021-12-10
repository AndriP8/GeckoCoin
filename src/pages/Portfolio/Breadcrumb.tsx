const Breadcrumb = () => {
  return (
    <div className="text-sm breadcrumbs px-4 py-4">
      <ul className="font-medium">
        <li className="text-green-light">
          <a href="/" className="noUnderline">
            Home
          </a>
        </li>
        <li className="text-gray-400">Portfolio</li>
      </ul>
    </div>
  );
};

export default Breadcrumb;
