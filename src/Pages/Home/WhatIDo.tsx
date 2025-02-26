import { Typography } from "@mui/material";
import ModiiMap from "../../assets/ProjectScreenshots/ModiMap.png";
import Storybook from "../../assets/ProjectScreenshots/StorybookScreenshot.png";
import RateDrawer from "../../assets/ProjectScreenshots/RateDrawer.png";
import MiroDesigns from "../../assets/ProjectScreenshots/MiroDesigns.png";
import CodeDesign from "../../assets/ProjectScreenshots/CodeDesign.png";
import EventCreation from "../../assets/ProjectScreenshots/EventCreation.png";

export default function WhatIDo() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Typography variant={"h3"} style={{ marginBottom: "16px" }}>
        {"What I Do:"}
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div style={{ width: "45%" }}>
          <Typography variant={"h4"} style={{ textDecoration: "underline" }}>
            {"Designing Components:"}
          </Typography>
          <Typography variant={"overline"} fontSize={"16px"}>
            {"From my personal projects"}
          </Typography>
          <img
            src={Storybook}
            width={"100%"}
            style={{ borderRadius: "10px" }}
          />
        </div>

        <div style={{ width: "45%", marginTop: "100px" }}>
          <Typography variant={"h4"} style={{ textDecoration: "underline" }}>
            {"Presenting Geospatial Data:"}
          </Typography>
          <Typography variant={"overline"} fontSize={"16px"}>
            {"From Modii"}
          </Typography>
          <img src={ModiiMap} width={"100%"} style={{ borderRadius: "10px" }} />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "-32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: "45%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant={"h4"} style={{ textDecoration: "underline" }}>
            {"Data Entry:"}
          </Typography>
          <Typography variant={"overline"} fontSize={"16px"}>
            {"From Modii"}
          </Typography>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img
              src={RateDrawer}
              height={"500px"}
              style={{ borderRadius: "10px", marginRight: "auto" }}
            />
            <img
              src={EventCreation}
              // height={"500px"}
              width={"50%"}
              style={{ borderRadius: "10px", marginBottom: "auto" }}
            />
          </div>
        </div>

        <div style={{ width: "45%", marginTop: "100px" }}>
          <Typography variant={"h4"} style={{ textDecoration: "underline" }}>
            {"Designing Code:"}
          </Typography>
          <Typography variant={"overline"} fontSize={"16px"}>
            {"From Modii"}
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={MiroDesigns}
              width={"75%"}
              style={{ borderRadius: "10px" }}
            />
            <img
              src={CodeDesign}
              width={"75%"}
              style={{
                borderRadius: "10px",
                marginLeft: "auto",
                marginTop: "8px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
