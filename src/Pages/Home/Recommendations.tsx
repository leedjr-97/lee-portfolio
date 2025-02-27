import { useMemo } from "react";
import {
  getBrandonRecommendation,
  getMadiRecommendation,
  getMoRecommendation,
  getPaulRecommendation,
  Rec,
} from "./GetRecs";
import { Theme, Typography, useTheme } from "@mui/material";
import { LeftMargin } from "../../types/PortfolioTypes";

export default function Recommendations({ isMobile }: { isMobile: boolean }) {
  const theme = useTheme();
  const row1 = useMemo(() => {
    return [getMadiRecommendation(), getMoRecommendation()];
  }, []);

  const row2 = useMemo(() => {
    return [getBrandonRecommendation(), getPaulRecommendation()];
  }, []);

  return (
    <div
      style={{
        margin: isMobile ? "64px 0px 32px 0px" : "16px",
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
        {"What Others Are Saying:"}
      </Typography>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: isMobile ? "center" : "space-between",
          alignItems: "flex-start",
          marginBottom: "32px",
        }}
      >
        {row1?.map((rec, index) => (
          <Recommendation
            key={index}
            recommendation={rec}
            index={index}
            isMobile={isMobile}
            theme={theme}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "32px",
          marginTop: isMobile ? undefined : "-32px",
        }}
      >
        {row2?.map((rec, index) => (
          <Recommendation
            key={index}
            recommendation={rec}
            index={index}
            isMobile={isMobile}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

function Recommendation({
  recommendation,
  index,
  isMobile,
  theme,
}: {
  recommendation: Rec;
  index: number;
  isMobile: boolean;
  theme: Theme;
}) {
  return (
    <div
      style={{
        backgroundColor: theme.palette.grey[400],
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "5px",
        border: "solid 1px white",
        minHeight: "225px",
        width: isMobile ? "100%" : "45%",
        padding: "16px",
        marginTop: index === 1 ? (isMobile ? "32px" : "75px") : "0%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant={"h5"} style={{ marginTop: "8px" }}>
          {recommendation.title}
        </Typography>
        <Typography variant={"overline"}>
          {recommendation.relationship}
        </Typography>
        <img
          src={recommendation.profileImage}
          style={{ borderRadius: "100px", cursor: "pointer" }}
          onClick={() => {
            window.open(recommendation.profileLink, "_blank");
          }}
          width={200}
        />
      </div>

      <Typography
        variant={"h6"}
        fontSize={"14px"}
        style={{
          marginLeft: "16px",
          fontStyle: "italic",
          marginBottom: "8px",
        }}
      >
        "{recommendation.rec}"
      </Typography>
    </div>
  );
}
