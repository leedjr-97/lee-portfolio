import { List, ListItemButton, useTheme } from "@mui/material";
import usePortfolioRouting from "./usePortfolioRouting";
import { PortfolioRouting } from "./RouteInfo";

export default function PortfolioHeader() {
  const theme = useTheme();
  const { navigateToRoute } = usePortfolioRouting();

  const handleNavigate = (route: PortfolioRouting) => {
    navigateToRoute(route);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "left",
        backgroundColor: theme.palette.secondary.main,
      }}
    >
      <List
        style={{ display: "flex", flexDirection: "row", marginLeft: "16px" }}
      >
        <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.Home);
          }}
        >
          {"Home"}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.About);
          }}
        >
          {"About"}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.Projects);
          }}
        >
          {"Projects"}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.Contact);
          }}
        >
          {"Contact"}
        </ListItemButton>
      </List>
    </div>
  );
}
