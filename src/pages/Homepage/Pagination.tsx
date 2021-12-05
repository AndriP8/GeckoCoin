import cx from "classnames";

interface PaginationTypes {
  handlePage: () => void;
  page: number | string;
  active?: boolean;
  disabled?: boolean;
}

function Pagination(props: PaginationTypes) {
  const { handlePage, page, active, disabled } = props;

  const btnClass = cx({
    "btn btn-sm btn-pagin-hover": true,
    "btn-active": active,
    "btn-disabled": disabled,
  });

  return (
    <button className={btnClass} onClick={handlePage}>
      {page}
    </button>
  );
}

export default Pagination;
