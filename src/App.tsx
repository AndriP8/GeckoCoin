import { QueryClientProvider, QueryClient } from "react-query";
import LayoutHeader from "components/header";
import NavbarTabs from "components/navbarTabs";
import Homepage from "pages/Homepage";

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <div className="bg-gray-100 w-full">
        <LayoutHeader />
        <NavbarTabs />
        <Homepage />
      </div>
    </QueryClientProvider>
  );
}

export default App;
