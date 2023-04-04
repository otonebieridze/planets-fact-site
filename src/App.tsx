import "./App.css";
import data from "./data.json";
import { Routes, Route } from "react-router-dom";

import Planet from "./pages/Planet";
import Header from "./components/Header/Header";

function App() {
  let str = "earth";

  return (
    <>
      <Header data={data} />
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
              element={<Planet planetData={planetData} />}
            />
          );
        })}
      </Routes>
    </>
  );
}

export default App;
