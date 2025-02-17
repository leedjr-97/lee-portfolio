import { Typography } from "@mui/material";
import { generateWorkExperience } from "./AboutUtils";
import ModiiLogo from "../../assets/mstile-310x310.png";
import NutrienLogo from "../../assets/Nutrien/Corporate logos/Nutrien N only RGB_0.png";
import ParsonsLogo from "../../assets/parsons-logo.svg";

export default function PreviousEmployment() {
  return (
    <div style={{ marginTop: "32px" }}>
      <Typography
        variant={"h3"}
        style={{ textDecoration: "underline", marginBottom: "16px" }}
      >
        {"Previous Employment:"}
      </Typography>

      {generateWorkExperience(
        "Modii",
        ModiiLogo,
        "Lead Front End Software Engineer"
      )}

      {generateWorkExperience(
        "Nutrien Ag Solutions",
        NutrienLogo,
        "Software Engineer"
      )}

      {generateWorkExperience(
        "Parsons Corporation",
        ParsonsLogo,
        "Software Engineer"
      )}
    </div>
  );
}
