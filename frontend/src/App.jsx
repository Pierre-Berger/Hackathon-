import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./css/App.css";
import RecipeDetails from "./pages/RecipeDetails";
import Navbar from "./components/Navbar";
import CatnipItem from "./pages/CatnipItem";

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/shop/test" element={<CatnipItem />} />
          <Route path="/" element={<Home />} />
          <Route path="/RecipeDetails" element={<RecipeDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
