import React, { ReactNode } from "react";
import LayoutHeader from "components/header";
import Footer from "components/footer";

type Props = {
  children?: ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-gray-100 w-full">
      <LayoutHeader />
      {children}
      <Footer />
    </div>
  );
};

export default Page;
