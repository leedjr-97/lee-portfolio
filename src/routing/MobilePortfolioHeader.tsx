import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import usePortfolioRouting from "./usePortfolioRouting";
import { PortfolioRouting } from "./RouteInfo";
import DinoWithGlasses from "../assets/DinoWithGlasses.png";
import { InfoTooltip } from "lee-storybook";

export default function MobilePortfolioHeader() {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const { navigateToRoute, pathname } = usePortfolioRouting();

  const handleNavigate = (route: PortfolioRouting) => {
    navigateToRoute(route);
  };

  const getTitle = () => {
    switch (pathname) {
      case PortfolioRouting.Home:
        return "Portfolio";
      case PortfolioRouting.About:
        return "About";
      case PortfolioRouting.Skills:
        return "Skills";
      case PortfolioRouting.Projects:
        return "Projects";
      default:
        return "Portfolio";
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: theme.palette.secondary.main,
        }}
      >
        <IconButton
          style={{ marginLeft: "8px" }}
          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
            setAnchorEl(event.currentTarget);
          }}
        >
          <MenuIcon fontSize={"large"} />
        </IconButton>

        <div style={{ display: "flex", alignItems: "center" }}>
          <IconButton
            onClick={() => {
              handleNavigate(PortfolioRouting.Home);
            }}
          >
            <img src={DinoWithGlasses} />
          </IconButton>
          <Typography variant={"h4"}>{getTitle()}</Typography>
        </div>

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
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={() => {
          setAnchorEl(null);
        }}
      >
        <MenuItem
          onClick={() => {
            handleNavigate(PortfolioRouting.Home);
            setAnchorEl(null);
          }}
        >
          <Typography variant={"h4"}>{"Home"}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleNavigate(PortfolioRouting.About);
            setAnchorEl(null);
          }}
        >
          <Typography variant={"h4"}>{"About"}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleNavigate(PortfolioRouting.Skills);
            setAnchorEl(null);
          }}
        >
          <Typography variant={"h4"}>{"Skills"}</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleNavigate(PortfolioRouting.Projects);
            setAnchorEl(null);
          }}
        >
          <Typography variant={"h4"}>{"Projects"}</Typography>
        </MenuItem>
      </Menu>
    </>
  );
}
