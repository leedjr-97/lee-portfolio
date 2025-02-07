import { Typography, useTheme } from "@mui/material";
import Tools from "./Tools";
import Frontend from "./Frontend";
import Backend from "./Backend";

export default function Skills() {
  const theme = useTheme();
  // Geospatial

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

      <Frontend />

      <Backend />

      <Tools />
    </div>
  );
}
