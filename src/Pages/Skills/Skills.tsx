import { Typography } from "@mui/material";
import Tools from "./Tools";
import Frontend from "./Frontend";
import Backend from "./Backend";
import { useAppSelector } from "../../redux/store";
import { retrieveIsMobile } from "../../redux/reduxSelectors";

export default function Skills() {
  const isMobile = useAppSelector(retrieveIsMobile);

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
      <Typography variant={"h2"} style={{ marginTop: "32px" }}>
        {"Skills"}
      </Typography>

      <Frontend isMobile={isMobile} />

      <Backend isMobile={isMobile} />

      <Tools isMobile={isMobile} />
    </div>
  );
}
