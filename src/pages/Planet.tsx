type Planet = {
  name: string;
  overview: {
    content: string;
    source: string;
  };
  structure: {
    content: string;
    source: string;
  };
  geology: {
    content: string;
    source: string;
  };
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: {
    planet: string;
    internal: string;
    geology: string;
  };
  color: string;
};
type PlanetProps = {
  planetData: Planet;
  windowWidth: number;
};

import styles from "./Planet.module.css";
import { useState } from "react";
import PlanetInfoMenu from "../components/PlanetInfoMenu/PlanetInfoMenu";

export default function Planet({ planetData, windowWidth }: PlanetProps) {
  const [currentSection, setCurrentSection] = useState("overview");
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <div>
      {windowWidth < 600 && (
        <PlanetInfoMenu
          planetData={planetData}
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
          hoveredItem={hoveredItem}
          setHoveredItem={setHoveredItem}
          windowWidth={windowWidth}
        />
      )}

      <div className={styles["main-section"]}>
        {currentSection === "overview" && (
          <img
            src={planetData.images.planet}
            alt="planet-image"
            className={styles["planet-image"]}
          />
        )}
        {currentSection === "structure" && (
          <img
            src={planetData.images.internal}
            alt="internal-image"
            className={styles["planet-image"]}
          />
        )}
        {currentSection === "surface" && (
          <div
            style={{ width: "150px", height: "250px", position: "relative" }}
          >
            <img
              src={planetData.images.planet}
              alt="planet-image"
              className={styles["planet-image"]}
            />
            <img
              src={planetData.images.geology}
              alt="geology-image"
              className={styles["geology-image"]}
            />
          </div>
        )}

        <div className={styles["planet-text-div"]}>
          <p className={styles["planet-text-name"]}>{planetData.name}</p>
          <p className={styles["planet-main-text"]}>
            {currentSection === "overview" && planetData.overview.content}
            {currentSection === "structure" && planetData.structure.content}
            {currentSection === "surface" && planetData.geology.content}
          </p>

          <p style={{ marginTop: "30px", marginBottom: "25px" }}>
            <span
              style={{
                color: "#FFFFFF",
                fontSize: "13px",
                fontFamily: "sans-serif",
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "18px",
                textAlign: "center",
                opacity: "50%",
              }}
            >
              Source :{" "}
            </span>
            {currentSection === "overview" && (
              <a
                href={planetData.overview.source}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  opacity: "100%",
                }}
              >
                Wikipedia
                <img
                  style={{ marginLeft: "3px" }}
                  src="../../../assets/link-icon.png"
                  alt="link-icon"
                />
              </a>
            )}
            {currentSection === "structure" && (
              <a
                href={planetData.structure.source}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  opacity: "100%",
                }}
              >
                Wikipedia
                <img
                  style={{ marginLeft: "3px" }}
                  src="../../../assets/link-icon.png"
                  alt="link-icon"
                />
              </a>
            )}
            {currentSection === "surface" && (
              <a
                href={planetData.geology.source}
                target="_blank"
                style={{
                  textDecoration: "none",
                  color: "#FFFFFF",
                  opacity: "100%",
                }}
              >
                Wikipedia
                <img
                  style={{ marginLeft: "3px" }}
                  src="../../../assets/link-icon.png"
                  alt="link-icon"
                />
              </a>
            )}
          </p>

          {windowWidth >= 600 && (
            <PlanetInfoMenu
              planetData={planetData}
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
              hoveredItem={hoveredItem}
              setHoveredItem={setHoveredItem}
              windowWidth={windowWidth}
            />
          )}
        </div>
      </div>

      <div className={styles["planet-details-container"]}>
        <div className={styles["planet-details"]}>
          <h3>ROTATION TIME</h3>
          <p>{planetData.rotation}</p>
        </div>
        <div className={styles["planet-details"]}>
          <h3>REVOLUTION TIME</h3>
          <p>{planetData.revolution}</p>
        </div>
        <div className={styles["planet-details"]}>
          <h3>RADIUS</h3>
          <p>{planetData.radius}</p>
        </div>
        <div className={styles["planet-details"]}>
          <h3>AVERAGE TEMP.</h3>
          <p>{planetData.temperature}</p>
        </div>
      </div>
    </div>
  );
}
