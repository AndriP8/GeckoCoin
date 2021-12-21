import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "pages/Homepage";
import CoinDetails from "pages/Detail";
import Portfolio from "pages/Portfolio";

const query = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={query}>
      <Router>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/:page" element={<Homepage />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/coins/:id" element={<CoinDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
