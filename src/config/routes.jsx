import React from "react";

import { Routes, Route } from "react-router"
import App from "../App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/chat" element={<h1 className="bg-sky-500/100">This is chat app</h1>}></Route>
      <Route path="*" element={<h1>Oops! <br /> Page Not Found</h1>}></Route>
    </Routes>
  );
}

export default AppRoutes;