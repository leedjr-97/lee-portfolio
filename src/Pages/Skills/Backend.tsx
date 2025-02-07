import { Typography, useTheme } from "@mui/material";
import { useMemo } from "react";

export default function Backend() {
  const theme = useTheme();

  const skills = useMemo(() => {
    return [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg", // JAVA
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", // C++
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg", // GRAPHQL
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/perl/perl-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg",
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg" />
          </div>

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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
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
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain-wordmark.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}
