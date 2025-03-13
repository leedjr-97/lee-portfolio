import { Typography } from "@mui/material";
import Tools from "./Tools";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { useAppSelector } from "../../redux/store";
import { retrieveIsMobile } from "../../redux/reduxSelectors";
import { LeftMargin } from "../../types/PortfolioTypes";
import HomeFooter from "../Home/HomeFooter";

export default function Skills() {
  const isMobile = useAppSelector(retrieveIsMobile);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          margin: `24px 48px 48px ${60 + LeftMargin}px`,
        }}
      >
        <Typography variant={"h2"} style={{ marginTop: "32px" }}>
          {"Skills"}
        </Typography>

        <Frontend isMobile={isMobile} />

        <Backend isMobile={isMobile} />

        <Tools isMobile={isMobile} />
      </div>

      <div>
        <HomeFooter overridePadding={"16px 32px 0 32px"} />
      </div>
    </div>
  );
}
