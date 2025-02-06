import "./App.css";
import Routing from "./routing/Routing";
import PortfolioHeader from "./routing/PortfolioHeader";
import Circles from "./themes/Circles";
import ContactMenu from "./Pages/Contact/ContactMenu";

function App() {
  return (
    <div
      className="App"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <PortfolioHeader />
      <div style={{ overflow: "hidden", flex: 1, marginLeft: "32px" }}>
        <Routing />
        <Circles />
        <ContactMenu />
      </div>
    </div>
  );
}

export default App;
