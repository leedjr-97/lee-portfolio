import { Typography } from "@mui/material";
import Sudoku from "../../assets/ProjectScreenshots/SudokuScreenshot.png";
import Storybook from "../../assets/ProjectScreenshots/StorybookScreenshot.png";
import { useState } from "react";
import { retrieveIsMobile } from "../../redux/reduxSelectors";
import { useAppSelector } from "../../redux/store";
import HomeFooter from "../Home/HomeFooter";
// import BigDinoWithHardHat from "../../assets/BigDinoWithHardHat.png";

enum ProjectsEnum {
  sudoku,
  storybook,
}
export default function Projects() {
  const isMobile = useAppSelector(retrieveIsMobile);
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
        height: "100%",
        width: "100%",
        marginTop: "32px",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: isMobile ? "16px" : 0,
        }}
      >
        <div
          style={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            padding: isMobile ? "0" : "16px",
            cursor: "pointer",
            flexDirection: isMobile ? "column" : "row",
            backgroundColor:
              hoveredLink === ProjectsEnum.sudoku
                ? "rgba(150, 150, 150, 0.3)"
                : undefined,
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
          <Typography variant={"h2"} style={{ marginRight: "32px" }}>
            {"Sudoku"}
          </Typography>
          <img
            src={Sudoku}
            width={isMobile ? "100%" : 500}
            style={{ borderRadius: "5px", border: "solid 1px white" }}
          />
        </div>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          marginBottom: isMobile ? "16px" : 0,
        }}
      >
        <div
          style={{
            width: "fit-content",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "5px",
            padding: isMobile ? "0" : "16px",
            cursor: "pointer",
            flexDirection: isMobile ? "column" : "row",
            backgroundColor:
              hoveredLink === ProjectsEnum.storybook
                ? "rgba(150, 150, 150, 0.3)"
                : undefined,
          }}
          onClick={() => {
            window.open("https://leedjr-97.github.io/lee-storybook/", "_blank");
          }}
          onMouseEnter={() => {
            setHoveredLink(ProjectsEnum.storybook);
          }}
          onMouseLeave={() => {
            setHoveredLink(null);
          }}
        >
          <Typography variant={"h2"} style={{ marginRight: "32px" }}>
            {"Storybook"}
          </Typography>
          <img
            src={Storybook}
            width={isMobile ? "100%" : 500}
            style={{ borderRadius: "5px", border: "solid 1px white" }}
          />
        </div>
      </div>

      {/* <IconButton
        onClick={() => {
          window.open("https://github.com/leedjr-97", "_blank");
        }}
        style={{ margin: "auto" }}
      >
        <img src={BigDinoWithHardHat} />
      </IconButton> */}
      <div>
        <HomeFooter overridePadding={"16px 32px 0 32px"} />
      </div>
    </div>
  );
}
