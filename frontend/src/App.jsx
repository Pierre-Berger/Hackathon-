import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import "./css/App.css";
import ShopHome from "./pages/ShopHome";
import RecipeDetails from "./pages/RecipeDetails";
import CatnipItem from "./pages/CatnipItem";
import Recipes from "./pages/Recipes";
import GameContent from "./components/GameContent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/shop/:id" element={<CatnipItem />} />
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopHome />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/GameContent" element={<GameContent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
