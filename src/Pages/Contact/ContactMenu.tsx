import { ListItemIcon, MenuItem, MenuList, useTheme } from "@mui/material";
import LinkedInLogo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";
import GithubLogo from "../../assets/github-mark/github-mark-white.svg";

export default function ContactMenu() {
  const theme = useTheme();
  return (
    <MenuList
      style={{
        width: "70px",
        backgroundColor: "black",
        borderBottomRightRadius: "10px",
        borderTopRightRadius: "10px",
        position: "absolute",
        left: 0,
        top: "40%",
        padding: "32px 0 32px 0",
      }}
    >
      <MenuItem>
        <ListItemIcon>
          <img src={LinkedInLogo} width={40} />
        </ListItemIcon>
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <img src={GithubLogo} width={40} />
        </ListItemIcon>
      </MenuItem>
    </MenuList>
  );
}
