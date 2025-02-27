import { Typography } from "@mui/material";
import ModiiMap from "../../assets/ProjectScreenshots/ModiMap.png";
import Storybook from "../../assets/ProjectScreenshots/StorybookScreenshot.png";
import RateDrawer from "../../assets/ProjectScreenshots/RateDrawer.png";
import MiroDesigns from "../../assets/ProjectScreenshots/MiroDesigns.png";
import CodeDesign from "../../assets/ProjectScreenshots/CodeDesign.png";
import EventCreation from "../../assets/ProjectScreenshots/EventCreation.png";
import { LeftMargin } from "../../types/PortfolioTypes";

export default function WhatIDo({ isMobile }: { isMobile: boolean }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "48px",
        paddingLeft: `${48 + LeftMargin}px`,
      }}
    >
      <Typography
        variant={"h3"}
        style={{
          marginBottom: "16px",
          textDecoration: isMobile ? "underline" : undefined,
        }}
      >
        {"What I Do:"}
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          textAlign: "center",
        }}
      >
        <div style={{ width: isMobile ? "100%" : "45%" }}>
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

        <div
          style={{
            width: isMobile ? "100%" : "45%",
            marginTop: isMobile ? "16px" : "100px",
          }}
        >
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
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          marginTop: isMobile ? "16px" : "-32px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: isMobile ? "100%" : "45%",
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
          <div
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            <img
              src={RateDrawer}
              height={"500px"}
              style={{
                borderRadius: "10px",
                marginRight: isMobile ? undefined : "auto",
                margin: isMobile ? "auto auto 16px auto" : "0 auto 0 0",
              }}
            />
            <img
              src={EventCreation}
              width={isMobile ? "100%" : "50%"}
              style={{ borderRadius: "10px", marginBottom: "auto" }}
            />
          </div>
        </div>

        <div
          style={{
            width: isMobile ? "100%" : "45%",
            marginTop: isMobile ? "16px" : "100px",
          }}
        >
          <Typography variant={"h4"} style={{ textDecoration: "underline" }}>
            {"Designing Code:"}
          </Typography>
          <Typography variant={"overline"} fontSize={"16px"}>
            {"From Modii"}
          </Typography>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <img
              src={MiroDesigns}
              width={isMobile ? "100%" : "75%"}
              style={{ borderRadius: "10px" }}
            />
            <img
              src={CodeDesign}
              width={isMobile ? "100%" : "75%"}
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
