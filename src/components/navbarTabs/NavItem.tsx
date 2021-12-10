import React from "react";
import cx from "classnames";

interface NavItemTypes {
  route: string;
  children: React.ReactNode;
  active?: boolean;
  itemIcon?: boolean;
}

const NavItem = (props: NavItemTypes) => {
  const { route, children, active, itemIcon } = props;

  const navItem = cx({
    "mr-8 py-4 border-b-2 border-transparent items-tabs-hover whitespace-nowrap":
      true,
    active: active,
    "flex items-center justify-center": itemIcon,
  });

  return (
    <>
      <a href={route} className={navItem}>
        {children}
      </a>
    </>
  );
};

export default NavItem;
