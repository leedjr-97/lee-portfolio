import { Typography, useTheme } from "@mui/material";

export default function Tools() {
  const theme = useTheme();

  return (
    <div style={{ margin: "8px 0 8px 0" }}>
      <Typography variant={"h4"}>{"Relevant Technologies:"}</Typography>
      <div
        style={{
          borderRadius: "5px",
          backgroundColor: theme.palette.grey[500],
          height: "175px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: "0 16px 0 8px",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
        </div>

        <div
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: "0 8px 0 8px",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original-wordmark.svg" />
        </div>

        <div
          style={{
            height: "150px",
            width: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            margin: "0 8px 0 8px",
          }}
        >
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dbeaver/dbeaver-original.svg" />
        </div>

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg" />
      </div>
    </div>
  );
}
