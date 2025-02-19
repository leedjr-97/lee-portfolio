import { Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { DisplayedSkills } from "../../types/PortfolioTypes";

const ReactSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
const ReactNativeSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg";
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
const ReduxSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg";
const YarnSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yarn/yarn-original-wordmark.svg";
const NPMSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg";
const MaterialSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg";
export default function Frontend({ isMobile }: { isMobile: boolean }) {
  const theme = useTheme();

  const frontEndSkills: DisplayedSkills[] = useMemo(() => {
    return [
      {
        svg: ReactSvg,
        size: isMobile ? 75 : 125,
        title: "React",
        needsTitle: true,
      },
      {
        svg: ReactNativeSvg,
        size: isMobile ? 75 : 125,
        title: "React Native",
        needsTitle: true,
      },
      {
        svg: TypescriptSvg,
        size: isMobile ? 75 : 125,
        title: "Typescript",
        needsTitle: true,
      },
      {
        svg: JavaScriptSvg,
        size: isMobile ? 75 : 125,
        title: "JavaScript",
        needsTitle: true,
      },
      {
        svg: HTMLSvg,
        size: isMobile ? 75 : 125,
        title: "HTML",
        needsTitle: false,
      },
      {
        svg: CSSSvg,
        size: isMobile ? 75 : 125,
        title: "CSS",
        needsTitle: false,
      },
      {
        svg: JestSvg,
        size: isMobile ? 75 : 125,
        title: "Jest",
        needsTitle: true,
      },
      {
        svg: ReduxSvg,
        size: isMobile ? 75 : 125,
        title: "Redux",
        needsTitle: true,
      },
      {
        svg: YarnSvg,
        size: isMobile ? 75 : 125,
        title: "Yarn",
        needsTitle: false,
      },
      {
        svg: NPMSvg,
        size: isMobile ? 75 : 125,
        title: "NPM",
        needsTitle: false,
      },
      {
        svg: MaterialSvg,
        size: isMobile ? 75 : 125,
        title: "Material UI",
        needsTitle: true,
      },
    ];
  }, [isMobile]);

  return (
    <div style={{ margin: "8px 0 8px 0" }}>
      <div>
        <Typography variant={"h4"}>{"Frontend Tech Stacks:"}</Typography>

        <div
          style={{
            borderRadius: "5px",
            backgroundColor: theme.palette.grey[500],
            height: isMobile ? "125px" : "175px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflowX: "scroll",
          }}
        >
          {frontEndSkills.map((skill, index) => (
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
                <Typography
                  variant={"h5"}
                  style={{ color: "black", textWrap: "nowrap" }}
                >
                  {skill.title}
                </Typography>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
