import { List, ListItemButton, ListItemIcon, Tooltip } from "@mui/material";
import LinkedInLogo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";
import GithubLogo from "../../assets/github-mark/github-mark-white.svg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ResumePDF from "../../assets/EdwardLeeFrontEndEngineer.pdf";
export default function ContactMenu() {
  return (
    <div
      style={{
        backgroundColor: "black",
        borderBottomRightRadius: "10px",
        borderTopRightRadius: "10px",
        borderBottom: "1px solid white",
        borderTop: "1px solid white",
        borderRight: "1px solid white",

        position: "absolute",
        left: 0,
        top: "10%",
        padding: "16px 0 16px 0",
        zIndex: "5",
      }}
    >
      <List>
        <Tooltip title={"LinkedIn Profile"} placement={"right"}>
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
        </Tooltip>

        <Tooltip title={"Github Profile"} placement={"right"}>
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
        </Tooltip>

        <Tooltip title={"Copy Email Address"} placement={"right"}>
          <ListItemButton
            onClick={() => {
              navigator.clipboard.writeText("lee.edward008@gmail.com");
            }}
          >
            <ListItemIcon style={{ justifyContent: "center" }}>
              <EmailRoundedIcon fontSize={"large"} />
            </ListItemIcon>
          </ListItemButton>
        </Tooltip>

        <Tooltip title={"Download My Resume"} placement={"right"}>
          <ListItemButton
            onClick={() => {
              const resumeUrl = ResumePDF;
              const link = document.createElement("a");
              link.href = resumeUrl;
              link.download = "EdwardLeeFrontEndEngineer.pdf";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
          >
            <ListItemIcon style={{ justifyContent: "center" }}>
              <FileOpenIcon fontSize={"large"} />
            </ListItemIcon>
          </ListItemButton>
        </Tooltip>
      </List>
    </div>
  );
}
