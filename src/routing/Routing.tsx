import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import FallBack from "./Fallback";
import Home from "../Pages/Home/Home";
import { PortfolioRouting } from "./RouteInfo";
import About from "../Pages/About/About";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";

const Routing = () => {
  return (
    <Suspense fallback={<FallBack />}>
      <Routes>
        <Route index element={<Home />} />

        <Route index path={PortfolioRouting.About} element={<About />} />

        <Route index path={PortfolioRouting.Skills} element={<Skills />} />

        <Route index path={PortfolioRouting.Projects} element={<Projects />} />
      </Routes>
    </Suspense>
  );
};

export default Routing;
