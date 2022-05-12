import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ShopHome from "./pages/ShopHome";
import CatnipItem from "./pages/CatnipItem";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/shop/test" element={<CatnipItem />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
