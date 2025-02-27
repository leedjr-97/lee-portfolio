import { Theme, Typography } from "@mui/material";

import CSULogo from "../../assets/CSU-Symbol.png";
import { LabelValue } from "lee-storybook";

export default function Education({
  isMobile,
  theme,
}: {
  isMobile: boolean;
  theme: Theme;
}) {
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
      {isMobile ? (
        <Typography
          variant={"h6"}
          style={{ marginTop: "16px", marginLeft: "16px" }}
        >
          {"Honors: Cum Laude (GPA: 3.86/4.0)"}
        </Typography>
      ) : (
        <LabelValue
          label={"Honors"}
          value={"Cum Laude (GPA: 3.86/4.0)"}
          styleOverrides={{
            marginLeft: "32px",
          }}
        />
      )}
    </div>
  );
}
