import "./App.css";
import data from "./data.json";
import { Routes, Route } from "react-router-dom";

import Planet from "./pages/Planet";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";

function App() {
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth < 600) {
      setIsNavMenuVisible(false);
    } else {
      setIsNavMenuVisible(true);
    }
  }, [windowWidth]);

  return (
    <>
      <Header
        data={data}
        isNavMenuVisible={isNavMenuVisible}
        setIsNavMenuVisible={setIsNavMenuVisible}
        windowWidth={windowWidth}
      />
      <Routes>
        {data.map((planetData, index) => {
          return (
            <Route
              key={index}
              path={
                planetData.name.toLowerCase() === "mercury"
                  ? "/"
                  : `/${planetData.name.toLowerCase()}`
              }
              element={<Planet planetData={planetData} windowWidth={windowWidth} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
