import { IconButton, Tooltip, Typography } from "@mui/material";
import DinoWithHardHat from "../../assets/DinoWithHardHat.png";
import Sudoku from "../../assets/SudokuScreenshot.png";
import { useState } from "react";

enum ProjectsEnum {
  sudoku,
}
export default function Projects() {
  const [hoveredLink, setHoveredLink] = useState<null | ProjectsEnum>(null);
  // Rest-API driven Dashboard
  // Geospatial something
  // Component Library
  // Some front end game
  // Next.js Rubix cube
  // Recipe Holder?

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
      {/* <Tooltip title={"Hard at work on more!"}>
        <IconButton onClick={() => {}}>
          <img src={DinoWithHardHat} width={256} />
        </IconButton>
      </Tooltip> */}

      <div
        style={{
          width: "100%",
          cursor: "pointer",
          display: "flex",
          justifyContent: "center",
        }}
        onClick={() => {
          window.open("https://leedjr-97.github.io/lee-sudoku/", "_blank");
        }}
        onMouseEnter={() => {
          setHoveredLink(ProjectsEnum.sudoku);
        }}
        onMouseLeave={() => {
          setHoveredLink(null);
        }}
      >
        <div
          style={{
            width: "fit-content",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            padding: "16px",
            backgroundColor:
              hoveredLink === ProjectsEnum.sudoku
                ? "rgba(150, 150, 150, 0.3)"
                : undefined,
          }}
        >
          <Typography variant={"h2"} style={{ marginRight: "32px" }}>
            {"Sudoku"}
          </Typography>
          <img
            src={Sudoku}
            width={500}
            style={{ borderRadius: "5px", border: "solid 1px white" }}
          />
        </div>
      </div>
    </div>
  );
}
