import React from "react";
import { Route, Routes } from "react-router-dom";

import "./index.scss";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";


const App = () => {
  return <div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="page1" element={<Page1 />} />
      <Route path="page2" element={<Page2 />} />
    </Routes>
  </div>

};

export default App;
