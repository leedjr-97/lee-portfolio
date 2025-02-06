import "./App.css";
import Routing from "./routing/Routing";
import PortfolioHeader from "./routing/PortfolioHeader";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <PortfolioHeader />
      <Routing />
    </div>
  );
}

export default App;
