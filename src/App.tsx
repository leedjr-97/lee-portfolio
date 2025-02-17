import "./App.css";
import Routing from "./routing/Routing";
import PortfolioHeader from "./routing/PortfolioHeader";
import Circles from "./themes/Circles";
import ContactMenu from "./Pages/Contact/ContactMenu";

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
        }}
      >
        <div style={{ overflowX: "hidden" }}>
          <Routing />
        </div>
      </div>
      <Circles />
      <ContactMenu />
    </div>
  );
}
// info icon about rebecca purple
export default App;
