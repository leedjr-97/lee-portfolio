import { Theme, Typography } from "@mui/material";
import {
  generateMobileWorkExperience,
  generateWorkExperience,
} from "./AboutUtils";
import ModiiLogo from "../../assets/mstile-310x310.png";
import NutrienLogo from "../../assets/Nutrien/Corporate logos/Nutrien N only RGB_0.png";
import ParsonsLogo from "../../assets/parsons-logo.svg";
import CompassionLogo from "../../assets/Compassion-logo.jpg";

export default function PreviousEmployment({
  isMobile,
  theme,
}: {
  isMobile: boolean;
  theme: Theme;
}) {
  return (
    <div style={{ marginTop: "32px" }}>
      <Typography
        variant={"h3"}
        style={{ textDecoration: "underline", marginBottom: "16px" }}
      >
        {"Previous Employment:"}
      </Typography>

      {isMobile
        ? generateMobileWorkExperience(
            "Modii",
            ModiiLogo,
            "Lead Front End Software Engineer"
          )
        : generateWorkExperience(
            "Modii",
            ModiiLogo,
            "Lead Front End Software Engineer"
          )}

      {isMobile
        ? generateMobileWorkExperience(
            "Nutrien Ag Solutions",
            NutrienLogo,
            "Software Engineer"
          )
        : generateWorkExperience(
            "Nutrien Ag Solutions",
            NutrienLogo,
            "Software Engineer"
          )}

      {isMobile
        ? generateMobileWorkExperience(
            "Parsons Corporation",
            ParsonsLogo,
            "Software Engineer"
          )
        : generateWorkExperience(
            "Parsons Corporation",
            ParsonsLogo,
            "Software Engineer"
          )}

      {isMobile
        ? generateMobileWorkExperience(
            "Compassion International",
            CompassionLogo,
            "Software Developer Intern"
          )
        : generateWorkExperience(
            "Compassion International",
            CompassionLogo,
            "Software Developer Intern"
          )}
    </div>
  );
}
