import { CircularProgress } from "@mui/material";

export default function FallBack() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <CircularProgress
        size={200}
        disableShrink
        style={{ marginTop: "100px" }}
      />
    </div>
  );
}
