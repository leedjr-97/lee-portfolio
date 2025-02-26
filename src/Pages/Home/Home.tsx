import { Typography } from "@mui/material";
import ProfilePicture from "../../assets/Mine/ProfilePicture.jpg";
import { useAppSelector } from "../../redux/store";
import { retrieveIsMobile } from "../../redux/reduxSelectors";
import Recommendations from "./Recommendations";
import WhatIDo from "./WhatIDo";

export default function Home() {
  const isMobile = useAppSelector(retrieveIsMobile);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "48px",
        paddingLeft: "48px",
        height: "100%",
        overflowX: "scroll",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          width: "100%",
          paddingTop: "100px",
          justifyContent: "space-between",
          paddingBottom: "50px",
        }}
      >
        <div style={{ textAlign: "center", width: isMobile ? "100%" : "65%" }}>
          <Typography variant={"h1"} style={{ zIndex: 1 }}>
            {"Edward Lee"}
          </Typography>
          <Typography variant={"h3"} style={{ marginTop: "4px", zIndex: 1 }}>
            {"<Tech Lead />"}
          </Typography>
          <Typography variant={"h3"} style={{ marginTop: "4px", zIndex: 1 }}>
            {"<Software Engineer />"}
          </Typography>
          <Typography variant={"h3"} style={{ marginTop: "4px", zIndex: 1 }}>
            {"<Designer />"}
          </Typography>
          <Typography variant={"h5"} style={{ marginTop: "16px", zIndex: 1 }}>
            {
              '"And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him." - Colossians 3:17'
            }
          </Typography>
        </div>
        <div style={{ width: isMobile ? "100%" : "30%", paddingRight: "64px" }}>
          <img
            src={ProfilePicture}
            width={isMobile ? "100%" : 400}
            style={{
              borderRadius: "25px",
              marginTop: isMobile ? "32px" : undefined,
            }}
          />
        </div>
      </div>

      <WhatIDo />

      <Recommendations />
    </div>
  );
}
