import "./App.css";
import Routing from "./routing/Routing";
import PortfolioHeader from "./routing/PortfolioHeader";
import Circles from "./themes/Circles";
import ContactMenu from "./Pages/Contact/ContactMenu";
import DiagonalBackgrounds from "./themes/DiagonalBackgrounds";

function App() {
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      <PortfolioHeader />
      <div
        style={{
          display: "flex",
          flex: 1,
          overflowY: "scroll",
          marginLeft: "64px",
          zIndex: 5,
        }}
      >
        <div style={{ overflowX: "hidden" }}>
          <Routing />
        </div>
      </div>
      <DiagonalBackgrounds />
      {/* <Circles /> */}
      <ContactMenu />
    </div>
  );
}

export default App;
