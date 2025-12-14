import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import ItemPage from "./pages/ItemPage";
import CartPage from "./pages/CartPage";

import Navigation from "./components/Navigation"; // ← твій navbar
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navigation /> {/* тепер навбар з cart буде тут */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
