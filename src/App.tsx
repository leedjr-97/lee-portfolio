import "./App.css";
import Routing from "./routing/Routing";
import PortfolioHeader from "./routing/PortfolioHeader";
// import Circles from "./themes/Circles";
import ContactMenu from "./Pages/Contact/ContactMenu";
import DiagonalBackgrounds from "./themes/DiagonalBackgrounds";
import { useEffect } from "react";
import MobilePortfolioHeader from "./routing/MobilePortfolioHeader";
import MobileFooter from "./routing/MobileFooter";
import { useAppDispatch, useAppSelector } from "./redux/store";
import { appActions } from "./redux/AppSlice";
import { retrieveIsMobile } from "./redux/reduxSelectors";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

function App() {
  const dispatch = useAppDispatch();
  const isMobile = useAppSelector(retrieveIsMobile);

  useEffect(() => {
    const dimensions = getWindowDimensions();
    if (isMobile !== dimensions.width < 800) {
      dispatch(appActions.toggleMobileView(dimensions.width < 800));
    }
    function handleResize() {
      const dimensions = getWindowDimensions();

      dispatch(appActions.toggleMobileView(dimensions.width < 800));
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  if (isMobile) {
    return (
      <div
        className="Mobile-App"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          color: "white",
        }}
      >
        <MobilePortfolioHeader />

        <div
          style={{
            flex: 1,
            display: "flex",
            overflowY: "scroll",
            zIndex: 5,
          }}
        >
          <div style={{ overflowX: "hidden" }}>
            <Routing />
          </div>
        </div>
        <MobileFooter />

        <DiagonalBackgrounds />
      </div>
    );
  }

  return (
    <div
      className="App"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        color: "white",
      }}
    >
      <PortfolioHeader />
      <div
        style={{
          display: "flex",
          flex: 1,
          overflowY: "scroll",
          zIndex: 5,
        }}
      >
        <Routing />
      </div>
      <DiagonalBackgrounds />
      <ContactMenu />
    </div>
  );
}

export default App;
