import { IconButton, ListItemIcon, Typography } from "@mui/material";
import LinkedInLogo from "../../assets/LinkedIn-Logos/LI-In-Bug.png";
import GithubLogo from "../../assets/github-mark/github-mark-white.svg";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ResumePDF from "../../assets/Mine/EdwardLeeFrontEndEngineer.pdf";
import "./HomeFooter.css";

export default function HomeFooter({
  overridePadding,
}: {
  overridePadding?: string;
}) {
  return (
    <>
      <div id={"line"} />
      <div
        style={{
          padding: overridePadding ?? "16px 32px 48px 32px",
          backgroundColor: "black",
          textAlign: "center",
          height: "300px",
        }}
      >
        <Typography variant={"h3"} style={{ marginBottom: "16px" }}>
          {"Want to Connect?"}
        </Typography>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: "16px",
            marginLeft: "24px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/edward-lee-frontend-engineer/",
                "_blank"
              );
            }}
          >
            <ListItemIcon style={{ justifyContent: "center" }}>
              <img src={LinkedInLogo} width={40} />
            </ListItemIcon>
          </IconButton>

          <IconButton
            onClick={() => {
              window.open("https://github.com/leedjr-97", "_blank");
            }}
          >
            <ListItemIcon style={{ justifyContent: "center" }}>
              <img src={GithubLogo} width={40} />
            </ListItemIcon>
          </IconButton>

          <IconButton
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
          </IconButton>
        </div>

        <Typography
          variant={"overline"}
          fontSize={20}
          style={{ marginLeft: "24px" }}
        >
          {"lee.edward008@gmail.com"}
        </Typography>

        <Typography>{"Made by Edward Lee with ReactJS"}</Typography>
      </div>
    </>
  );
}
