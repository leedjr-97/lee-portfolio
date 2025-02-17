import { Typography } from "@mui/material";
import { LabelValue } from "lee-storybook";

export const generateWorkExperience = (
  companyName: string,
  companyLogo: string,
  jobTitle: string
) => {
  return (
    <div style={{ marginBottom: "16px" }}>
      <Typography
        variant={"h4"}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img src={companyLogo} width={50} style={{ marginRight: "16px" }} />
        {companyName}
      </Typography>
      <LabelValue
        label={"Role"}
        value={jobTitle}
        styleOverrides={{
          marginLeft: "32px",
        }}
      />
    </div>
  );
};
