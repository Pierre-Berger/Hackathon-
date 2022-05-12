import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import RecipeDetails from "./pages/RecipeDetails";
import CatnipItem from "./pages/CatnipItem";

function App() {
  return (
    <div className="App">
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
