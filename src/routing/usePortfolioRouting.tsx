import { generatePath, useLocation, useNavigate } from "react-router-dom";
import { PortfolioRouting } from "./RouteInfo";

export default function usePortfolioRouting() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const navigateToRoute = (newRoute: PortfolioRouting) => {
    const path = generatePath(newRoute);

    navigate({ pathname: path });
  };
  const goBack = () => {
    navigate(-1);
  };

  return {
    pathname,
    navigateToRoute,
    goBack,
  };
}
