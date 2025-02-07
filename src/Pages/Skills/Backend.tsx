import { Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { DisplayedSkills } from "../../types/PortfolioTypes";
import RestApiSvg from "../../assets/rest-api-icon.webp";

const PythonSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg";
const JavaSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg";
const CPlusPlusSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg";
const GraphqlSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg";
const GoSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg";
const PerlSvg =
  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/perl/perl-original.svg";

export default function Backend() {
  const theme = useTheme();

  const backEndSkills: DisplayedSkills[] = useMemo(() => {
    return [
      { svg: PythonSvg, size: 125, title: "Python", needsTitle: false },
      { svg: JavaSvg, size: 125, title: "Java", needsTitle: false },
      { svg: CPlusPlusSvg, size: 125, title: "C Plus Plus", needsTitle: false },
      { svg: GraphqlSvg, size: 125, title: "GraphQL", needsTitle: false },
      { svg: GoSvg, size: 125, title: "Go", needsTitle: true },
      { svg: PerlSvg, size: 125, title: "Perl", needsTitle: true },
      { svg: RestApiSvg, size: 125, title: "Rest APIs", needsTitle: false },
    ];
  }, []);

  return (
    <div style={{ margin: "8px 0 8px 0" }}>
      <div>
        <Typography variant={"h4"}>{"Backend Tech Stacks:"}</Typography>

        <div
          style={{
            borderRadius: "5px",
            backgroundColor: theme.palette.grey[500],
            height: "175px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflowX: "scroll",
          }}
        >
          {backEndSkills.map((skill, index) => (
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
    </div>
  );
}
