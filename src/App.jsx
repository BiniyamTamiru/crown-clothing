import React from "react";
import HomePage from "./pages/HomePageComponent/HomePage";
import ShopPage from "./pages/shopePage/shopePage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
  );
}

export default App;