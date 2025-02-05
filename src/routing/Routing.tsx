import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallBack from "./Fallback";
import Home from "../Pages/Home/Home";
import { PortfolioRouting } from "./RouteInfo";

const Routing = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Routes>
        <Route index element={<Home />} />

        <Route index path={PortfolioRouting.About} element={<></>} />

        <Route index path={PortfolioRouting.Projects} element={<></>} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
