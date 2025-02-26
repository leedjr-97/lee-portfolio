import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import LinkedInLogo from "../assets/LinkedIn-Logos/LI-In-Bug.png";
import GithubLogo from "../assets/github-mark/github-mark-white.svg";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import ResumePDF from "../assets/Mine/EdwardLeeFrontEndEngineer.pdf";

export default function MobileFooter() {
  return (
    <BottomNavigation style={{ justifySelf: "flex-end" }}>
      <BottomNavigationAction
        label={"LinkedIn"}
        icon={<img src={LinkedInLogo} width={40} />}
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/edward-lee-frontend-engineer/",
            "_blank"
          );
        }}
      />
      <BottomNavigationAction
        label={"Github"}
        icon={<img src={GithubLogo} width={40} />}
        onClick={() => {
          window.open("https://github.com/leedjr-97", "_blank");
        }}
      />
      <BottomNavigationAction
        label={"Email"}
        icon={<EmailRoundedIcon fontSize={"large"} />}
        onClick={() => {
          navigator.clipboard.writeText("lee.edward008@gmail.com");
        }}
      />
      <BottomNavigationAction
        label={"Email"}
        icon={<FileOpenIcon fontSize={"large"} />}
        onClick={() => {
          const resumeUrl = ResumePDF;
          const link = document.createElement("a");
          link.href = resumeUrl;
          link.download = "EdwardLeeFrontEndEngineer.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
      />
    </BottomNavigation>
  );
}
