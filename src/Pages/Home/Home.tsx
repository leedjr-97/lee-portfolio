import { Typography } from "@mui/material";
import ProfilePicture from "../../assets/ProfilePicture.jpg";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        paddingRight: "48px",
        paddingLeft: "48px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          paddingTop: "48px",
          justifyContent: "space-between",
        }}
      >
        <div style={{ textAlign: "center", width: "65%" }}>
          <Typography variant={"h1"} style={{ zIndex: 1 }}>
            {"Edward Lee"}
          </Typography>
          <Typography variant={"h3"} style={{ marginTop: "4px", zIndex: 1 }}>
            {"<Tech Lead />"}
          </Typography>
          <Typography variant={"h3"} style={{ marginTop: "4px", zIndex: 1 }}>
            {"<Software Engineer />"}
          </Typography>
          <Typography variant={"h3"} style={{ marginTop: "4px", zIndex: 1 }}>
            {"<Designer />"}
          </Typography>
          <Typography variant={"h5"} style={{ marginTop: "16px", zIndex: 1 }}>
            {
              '"And whatever you do, in word or deed, do everything in the name of the Lord Jesus, giving thanks to God the Father through him." - Colossians 3:17'
            }
          </Typography>
        </div>
        <div style={{ width: "30%" }}>
          <img
            src={ProfilePicture}
            width={400}
            style={{ borderRadius: "25px" }}
          />
        </div>
      </div>
    </div>
  );
}
