import React from "react";
import HomePage from "./pages/HomePageComponent/HomePage";
import ShopPage from "./pages/shopePage/shopePage";
import Header from "./Component/header/header";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
     <Header />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/shop" element={<ShopPage />} />
    </Routes>
    </div>
  );
}

export default App;