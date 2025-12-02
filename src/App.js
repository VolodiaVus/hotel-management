import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import { ItemsProvider } from "./context/ItemsContext"; 
import "./App.css";

function App() {
  return (
    <ItemsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
        </Routes>
      </Router>
    </ItemsProvider>
  );
}

export default App;



