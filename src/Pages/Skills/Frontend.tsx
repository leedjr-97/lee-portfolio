import { Typography, useTheme } from "@mui/material";

const ReactSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg";
const TypescriptSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg";
const JavaScriptSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg";
const HTMLSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg";
const CSSSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg";
const JestSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg";
const NPMSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg";
const redux =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg";
const yarnSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original-wordmark.svg";
export default function Frontend() {
  const theme = useTheme();

  return (
    <div style={{ margin: "8px 0 8px 0" }}>
      <div>
        <Typography variant={"h4"}>{"Frontend Tech Stacks:"}</Typography>

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
            <img src={ReactSvg} width={125} style={{ marginTop: "8px" }} />
            {/* <Typography variant={"h4"} style={{ marginTop: "8px" }}>
              {"React"}
            </Typography> */}
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
            <img src={JavaScriptSvg} width={125} style={{ marginTop: "8px" }} />
            <Typography variant={"h4"} style={{ marginTop: "0" }}>
              {"JavaScript"}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}
