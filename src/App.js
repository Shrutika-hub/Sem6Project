import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Diabetes from "./Components/Diabetes";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        {/* <Route path="/" element={<Diabetes />} /> */}
      </Routes>
    </div>
  );
};

export default App;
