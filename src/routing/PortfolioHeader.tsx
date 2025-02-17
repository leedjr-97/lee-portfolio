import { List, ListItemButton, useTheme } from "@mui/material";
import usePortfolioRouting from "./usePortfolioRouting";
import { PortfolioRouting } from "./RouteInfo";
import { InfoTooltip } from "lee-storybook";

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
        justifyContent: "space-between",
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

      <div
        style={{ margin: "auto 0 auto 0" }}
        onClick={() => {
          window.open(
            "https://medium.com/@valgaze/the-hidden-purple-memorial-in-your-web-browser-7d84813bb416",
            "_blank"
          );
        }}
      >
        <InfoTooltip
          tooltipTitle={"Learn the story behind this color"}
          tooltipStyles={{ margin: "auto" }}
          iconColor={"gray"}
        />
      </div>
    </div>
  );
}
