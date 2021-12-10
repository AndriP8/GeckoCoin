import Page from "components/layout";
import Breadcrumb from "./Breadcrumb";
import Feature from "./Feature";
import OverviewContent from "./OverviewContent";
import OverviewContentMobile from "./OverviewContentMobile";

const Portfolio = () => {
  return (
    <Page>
      <Breadcrumb />
      <OverviewContent />
      <Feature />
      <OverviewContentMobile />
    </Page>
  );
};

export default Portfolio;
