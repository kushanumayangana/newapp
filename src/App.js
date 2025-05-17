import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from "./page/Page";
import Help from "./components/Help"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
