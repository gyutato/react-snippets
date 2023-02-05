import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import TopOrMarginTop from "./pages/TopOrMarginTop";
import FetchDataRender from "./pages/FetchDataRender";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/topOrMarginTop" element={<TopOrMarginTop />} />
      <Route path="/fetchDataRender" element={<FetchDataRender />} />
    </Routes>
  );
};

export default AppRoutes;
