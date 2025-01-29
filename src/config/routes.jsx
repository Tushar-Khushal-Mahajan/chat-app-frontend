import React from "react";

import { Routes, Route } from "react-router"
import App from "../App";
import ChatPage from "../components/chatpage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/chat" element={<ChatPage />}></Route>
      <Route path="*" element={<h1>Oops! <br /> Page Not Found</h1>}></Route>
    </Routes>
  );
}

export default AppRoutes;