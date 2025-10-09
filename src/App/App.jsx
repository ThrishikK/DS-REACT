import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageNav from "../PageNav/PageNav.jsx";
import Home from "../Home/Home.jsx";
import BinarySearch from "../DivideAndConquer/BinarySerach/BinarySearch.jsx";
import "./App.css";

const basename = process.env.NODE_ENV === "production" ? "/DS-REACT" : "/";

function App() {
  return (
    <BrowserRouter basename={basename}>
      <main>
        <PageNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/binary-search" element={<BinarySearch />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
