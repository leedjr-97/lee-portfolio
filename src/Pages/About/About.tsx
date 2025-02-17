import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useRef } from "react";
import "./About.css";
import PreviousEmployment from "./PreviousEmployment";
import Education from "./Education";
import BeyondSoftware from "./BeyondSoftware";
import DesignPassion from "./DesignPassion";

const description = `   Driven by a desire for excellence, I'm a front end software engineer passionate about creating innovative user experiences with rock-solid engineering that exceed expectations! I'm skilled in React, React Native, and Typescript, with additional experience in back-end programming languages such as Golang, Java, and C++. I am known for being a reliable, hard-working, quick learning engineer capable of taking the lead on development teams to solve complex problems and building a friendly and collaborative environment for engineers working towards common goals.`;
export default function About() {
  const editor = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "64px 48px 24px 48px",
        justifyContent: "center",
        overflowY: "scroll",
      }}
    >
      <div style={{ display: "grid", overflow: "hidden" }}>
        <CodeMirror
          readOnly={true}
          extensions={[langs.json(), EditorView.lineWrapping]}
          minHeight={"100px"}
          ref={editor}
          theme={darcula}
          value={description}
          style={{
            justifySelf: "center",
            width: "90%",
            fontSize: "24px",
            overflow: "hidden",
          }}
          editable={false}
        />
      </div>

      <DesignPassion />

      <BeyondSoftware />

      <PreviousEmployment />

      <Education />
    </div>
  );
}
