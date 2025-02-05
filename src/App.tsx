import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Routing from "./routing/Routing";
import PortfolioHeader from "./routing/PortfolioHeader";

function App() {
  return (
    <div className="App" style={{ height: "100vh", width: "100%" }}>
      <PortfolioHeader />
      <Routing />
    </div>
  );
}

export default App;
