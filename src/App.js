import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/FastFoodDelivery" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;