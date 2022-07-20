import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Films } from "../pages/films";

export const RouteList = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/films" element={<Films />} />
    </Routes>
  );
};
