import { BrowserRouter, Routes, Route } from "react-router-dom";

// import PageNav from "../PageNav/PageNav.jsx";
import Home from "../Home/Home.jsx";
import HomeIcon from "../HomeIcon/HomeIcon.jsx";
import BinarySearch from "../Algorithms/DivideAndConquer/BinarySerach/BinarySearch.jsx";
import CollatzLineChart from "../Algorithms/Collatz/Collatz.jsx";
import "./App.css";

const basename = process.env.NODE_ENV === "production" ? "/DS-REACT" : "/";
console.log(basename);

function App() {
  return (
    <BrowserRouter basename={basename}>
      <HomeIcon />
      <main>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/binary-search" element={<BinarySearch />} />
          <Route path="/collatz" element={<CollatzLineChart />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
