import { Typography, useTheme } from "@mui/material";
import { DisplayedSkills } from "../../types/PortfolioTypes";
import { useMemo } from "react";

const JiraSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg";
const FigmaSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg";
const DockerSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg";
const AWSSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg";
const FirebaseSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg";
const DbeaverSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg";
const GitSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg";
const VScodeSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg";
export default function Tools({ isMobile }: { isMobile: boolean }) {
  const theme = useTheme();

  const toolSkills: DisplayedSkills[] = useMemo(() => {
    return [
      {
        svg: JiraSvg,
        size: isMobile ? 75 : 125,
        title: "Jira",
        needsTitle: false,
      },
      {
        svg: FigmaSvg,
        size: isMobile ? 75 : 125,
        title: "Figma",
        needsTitle: true,
      },
      {
        svg: DockerSvg,
        size: isMobile ? 75 : 125,
        title: "Docker",
        needsTitle: true,
      },
      {
        svg: AWSSvg,
        size: isMobile ? 75 : 125,
        title: "AWS",
        needsTitle: false,
      },
      {
        svg: FirebaseSvg,
        size: isMobile ? 75 : 125,
        title: "Firebase",
        needsTitle: false,
      },
      {
        svg: DbeaverSvg,
        size: isMobile ? 75 : 125,
        title: "DBeaver",
        needsTitle: true,
      },
      {
        svg: GitSvg,
        size: isMobile ? 75 : 125,
        title: "Git",
        needsTitle: false,
      },
      {
        svg: VScodeSvg,
        size: isMobile ? 75 : 125,
        title: "VSCode",
        needsTitle: false,
      },
    ];
  }, [isMobile]);

  return (
    <div style={{ margin: "8px 0 8px 0" }}>
      <Typography variant={"h4"}>{"Relevant Tools/Technologies:"}</Typography>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: theme.palette.grey[400],
          height: isMobile ? "125px" : "175px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          overflowX: "scroll",
        }}
      >
        {toolSkills.map((skill, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              margin: "0 16px 0 16px",
            }}
            key={index}
          >
            <img
              src={skill.svg}
              width={skill.size}
              style={{ marginTop: "8px" }}
            />
            {skill.needsTitle && (
              <Typography variant={"h5"} style={{ color: "black" }}>
                {skill.title}
              </Typography>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
