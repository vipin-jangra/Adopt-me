import { createRoot } from "react-dom/client";
import Detail from "./Details";
import { Link } from "react-router-dom";
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import SearchParams from "./SearchParams";
import {QueryClient , QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  return (
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <header>
        <Link to ="/">Adopt Me!</Link>
      </header>
        <Routes>
          <Route path ="/details/:id" element ={<Detail />} />
          <Route path ="/" element = {<SearchParams />} />
        </Routes>
    </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);