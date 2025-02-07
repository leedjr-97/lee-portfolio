import CodeMirror from "@uiw/react-codemirror";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { langs } from "@uiw/codemirror-extensions-langs";
import { useRef } from "react";

const description = `Driven by a desire for excellence, I'm a front end software engineer passionate about building solutions exceed expectations!
  Something`;
export default function About() {
  const editor = useRef(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "48px",
        paddingLeft: "48px",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <div style={{ display: "grid", marginTop: "32px" }}>
        <CodeMirror
          readOnly={true}
          extensions={[langs.json()]}
          minHeight={"100px"}
          ref={editor}
          theme={darcula}
          value={description}
          style={{ justifySelf: "center", width: "80%" }}
        />
      </div>
    </div>
  );
}
