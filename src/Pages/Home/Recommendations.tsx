import { useMemo } from "react";
import {
  getBrandonRecommendation,
  getMadiRecommendation,
  getMoRecommendation,
  getPaulRecommendation,
  Rec,
} from "./GetRecs";
import { Typography } from "@mui/material";

export default function Recommendations({ isMobile }: { isMobile: boolean }) {
  const row1 = useMemo(() => {
    return [getMadiRecommendation(), getMoRecommendation()];
  }, []);

  const row2 = useMemo(() => {
    return [getBrandonRecommendation(), getPaulRecommendation()];
  }, []);

  return (
    <div style={{ margin: isMobile ? "64px 0px 32px 0px" : "16px" }}>
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
}: {
  recommendation: Rec;
  index: number;
  isMobile: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: "gray",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "5px",
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
