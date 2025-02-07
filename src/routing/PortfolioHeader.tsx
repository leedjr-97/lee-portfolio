import { List, ListItemButton, useTheme } from "@mui/material";
import usePortfolioRouting from "./usePortfolioRouting";
import { PortfolioRouting } from "./RouteInfo";

export default function PortfolioHeader() {
  const theme = useTheme();
  const { navigateToRoute, pathname } = usePortfolioRouting();

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
          style={{
            textDecoration:
              pathname === PortfolioRouting.Home ? "underline" : undefined,
          }}
        >
          {"Home"}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.About);
          }}
          style={{
            textDecoration:
              pathname === PortfolioRouting.About ? "underline" : undefined,
          }}
        >
          {"About"}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.Skills);
          }}
          style={{
            textDecoration:
              pathname === PortfolioRouting.Skills ? "underline" : undefined,
          }}
        >
          {"Skills"}
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.Projects);
          }}
          style={{
            textDecoration:
              pathname === PortfolioRouting.Projects ? "underline" : undefined,
          }}
        >
          {"Projects"}
        </ListItemButton>
        {/* <ListItemButton
          onClick={() => {
            handleNavigate(PortfolioRouting.Contact);
          }}
          style={{
            textDecoration:
              pathname === PortfolioRouting.Contact ? "underline" : undefined,
          }}
        >
          {"Contact"}
        </ListItemButton> */}
      </List>
    </div>
  );
}
