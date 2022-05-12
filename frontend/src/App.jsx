import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import ShopHome from "./pages/ShopHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
