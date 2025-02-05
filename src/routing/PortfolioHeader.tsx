import { Button } from "@mui/material";

export default function PortfolioHeader() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-between",
        justifyContent: "left",
      }}
    >
      <Button>{"Home"}</Button>
      <Button>{"About"}</Button>
      <Button>{"Projects"}</Button>
      <Button>{"Contact"}</Button>
    </div>
  );
}
