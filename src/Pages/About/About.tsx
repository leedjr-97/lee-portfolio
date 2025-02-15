import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useRef } from "react";
import { Typography } from "@mui/material";
import ModiiLogo from "../../assets/mstile-310x310.png";
import NutrienLogo from "../../assets/Nutrien/Corporate logos/Nutrien N only RGB_0.png";
import ParsonsLogo from "../../assets/parsons-logo.svg";
import CSULogo from "../../assets/CSU-Symbol.png";
import "./About.css";

const description = `   Driven by a desire for excellence, I'm a front end software engineer passionate about creating innovative user experiences with rock-solid engineering that exceed expectations! I'm skilled in React, React Native, and Typescript, with additional experience in back-end programming languages such as Golang, Java, and C++. I am known for being a reliable, hard-working, quick learning engineer capable of taking the lead on development teams to solve complex problems and building a friendly and collaborative environment for engineers working towards common goals.`;
export default function About() {
  const editor = useRef(null);

  const generateWorkExperience = (
    companyName: string,
    companyLogo: string,
    jobTitle: string
  ) => {
    return (
      <div style={{ marginBottom: "16px" }}>
        <Typography
          variant={"h4"}
          style={{ display: "flex", alignItems: "center" }}
        >
          <img src={companyLogo} width={50} style={{ marginRight: "16px" }} />
          {companyName}
        </Typography>
        <Typography
          variant={"h5"}
          style={{ marginLeft: "32px", fontWeight: "bold" }}
        >
          {jobTitle}
        </Typography>
      </div>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "48px",
        paddingLeft: "48px",
        justifyContent: "center",
        alignContent: "center",
        overflowY: "scroll",
      }}
    >
      <div style={{ display: "grid", marginTop: "64px", overflow: "hidden" }}>
        <CodeMirror
          readOnly={true}
          extensions={[langs.json(), EditorView.lineWrapping]}
          minHeight={"100px"}
          ref={editor}
          theme={darcula}
          value={description}
          style={{
            justifySelf: "center",
            width: "80%",
            fontSize: "20px",
            overflow: "hidden",
          }}
          editable={false}
        />
      </div>

      <div style={{ marginTop: "32px" }}>
        <Typography
          variant={"h3"}
          style={{ textDecoration: "underline", marginBottom: "16px" }}
        >
          {"Previous Employment:"}
        </Typography>

        {generateWorkExperience(
          "Modii",
          ModiiLogo,
          "Lead Front End Software Engineer"
        )}

        {generateWorkExperience(
          "Nutrien Ag Solutions",
          NutrienLogo,
          "Software Engineer"
        )}

        {generateWorkExperience(
          "Parsons Corporation",
          ParsonsLogo,
          "Software Engineer"
        )}
      </div>

      <div>
        <Typography variant={"h3"} style={{ textDecoration: "underline" }}>
          {"Education:"}
        </Typography>

        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={CSULogo} width={75} />
          <Typography variant={"h5"} style={{ marginLeft: "16px" }}>
            {"Colorado State University"}
          </Typography>
        </div>
      </div>
    </div>
  );
}
