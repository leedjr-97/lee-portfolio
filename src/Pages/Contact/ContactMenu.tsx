import {
  List,
  ListItemButton,
  ListItemIcon,
  MenuItem,
  MenuList,
  useTheme,
} from "@mui/material";
import LinkedInLogo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";
import GithubLogo from "../../assets/github-mark/github-mark-white.svg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

export default function ContactMenu() {
  const theme = useTheme();

  // return (
  //   <MenuList
  //     style={{
  //       width: "70px",
  //       backgroundColor: "black",
  //       borderBottomRightRadius: "10px",
  //       borderTopRightRadius: "10px",
  //       position: "absolute",
  //       left: 0,
  //       top: "40%",
  //       padding: "32px 0 32px 0",
  //     }}
  //   >
  //     <MenuItem style={{ marginBottom: "16px" }}>
  //       <ListItemIcon>
  //         <img src={LinkedInLogo} width={40} />
  //       </ListItemIcon>
  //     </MenuItem>

  //     <MenuItem style={{ marginBottom: "16px" }}>
  //       <ListItemIcon>
  //         <img src={GithubLogo} width={40} />
  //       </ListItemIcon>
  //     </MenuItem>

  //     <MenuItem>
  //       <ListItemIcon>
  //         <EmailRoundedIcon fontSize={"large"} />
  //       </ListItemIcon>
  //     </MenuItem>
  //   </MenuList>
  // );

  return (
    <div
      style={{
        backgroundColor: "black",
        borderBottomRightRadius: "10px",
        borderTopRightRadius: "10px",
        position: "absolute",
        left: 0,
        top: "40%",
        padding: "16px 0 16px 0",
      }}
    >
      <List>
        <ListItemButton
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/edward-lee-frontend-engineer/",
              "_blank"
            );
          }}
          style={{ marginBottom: "8px" }}
        >
          <ListItemIcon style={{ justifyContent: "center" }}>
            <img src={LinkedInLogo} width={40} />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            window.open("https://github.com/leedjr-97", "_blank");
          }}
          style={{ marginBottom: "8px" }}
        >
          <ListItemIcon style={{ justifyContent: "center" }}>
            <img src={GithubLogo} width={40} />
          </ListItemIcon>
        </ListItemButton>

        <ListItemButton
          onClick={() => {
            navigator.clipboard.writeText("stuffity");
          }}
        >
          <ListItemIcon style={{ justifyContent: "center" }}>
            <EmailRoundedIcon fontSize={"large"} />
          </ListItemIcon>
        </ListItemButton>
      </List>
    </div>
  );
}
