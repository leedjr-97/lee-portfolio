import { Typography } from "@mui/material";

import CSULogo from "../../assets/CSU-Symbol.png";
import { LabelValue } from "lee-storybook";

export default function Education() {
  return (
    <div>
      <Typography variant={"h3"} style={{ textDecoration: "underline" }}>
        {"Education:"}
      </Typography>

      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={CSULogo} width={60} />
        <Typography variant={"h5"} style={{ marginLeft: "16px" }}>
          {"Colorado State University"}
        </Typography>
      </div>
      <LabelValue
        label={"Honors"}
        value={"Honors: Cum Laude (GPA: 3.86/4.0)"}
        styleOverrides={{
          marginLeft: "32px",
        }}
      />
    </div>
  );
}
