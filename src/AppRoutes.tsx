import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TopOrMarginTop from "./pages/TopOrMarginTop";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/topOrMarginTop" element={<TopOrMarginTop />} />
    </Routes>
  );
};

export default AppRoutes;
