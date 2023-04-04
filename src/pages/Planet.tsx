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
};

import styles from "./Planet.module.css";
import { useState } from "react";

export default function Mercury({ planetData }: PlanetProps) {
  const [currentSection, setCurrentSection] = useState("overview");
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <div>
      <div className={styles["planet-info-menu"]}>
        <div
          onMouseOver={() => setHoveredItem("overview")}
          onMouseOut={() => setHoveredItem("")}
          onClick={() => setCurrentSection("overview")}
          className={`${
            currentSection === "overview"
              ? styles["planet-section-title-active"]
              : styles["planet-section-title"]
          }`}
          style={{
            borderBottom:
              hoveredItem === "overview" || currentSection === "overview"
                ? `4px solid ${planetData.color}`
                : "",
          }}
        >
          overview
        </div>
        <div
          onMouseOver={() => setHoveredItem("structure")}
          onMouseOut={() => setHoveredItem("")}
          onClick={() => setCurrentSection("structure")}
          className={`${
            currentSection === "structure"
              ? styles["planet-section-title-active"]
              : styles["planet-section-title"]
          }`}
          style={{
            borderBottom:
              hoveredItem === "structure" || currentSection === "structure"
                ? `4px solid ${planetData.color}`
                : "",
          }}
        >
          structure
        </div>
        <div
          onMouseOver={() => setHoveredItem("surface")}
          onMouseOut={() => setHoveredItem("")}
          onClick={() => setCurrentSection("surface")}
          className={`${
            currentSection === "surface"
              ? styles["planet-section-title-active"]
              : styles["planet-section-title"]
          }`}
          style={{
            borderBottom:
              hoveredItem === "surface" || currentSection === "surface"
                ? `4px solid ${planetData.color}`
                : "",
          }}
        >
          surface
        </div>
      </div>

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
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "25px",
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          {planetData.name}
        </p>
        <p
          style={{
            color: "#FFFFFF",
            fontSize: "12px",
            fontFamily: "sans-serif",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "18px",
            textAlign: "center",
            marginTop: "10px",
            opacity: "50%",
          }}
        >
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

        <div className={styles["planet-details"]}>
          <p style={{ fontSize: "10px", opacity: "50%" }}>ROTATION TIME</p>
          <p style={{ fontSize: "18px" }}>{planetData.rotation}</p>
        </div>
        <div className={styles["planet-details"]}>
          <p style={{ fontSize: "10px", opacity: "50%" }}>REVOLUTION TIME</p>
          <p style={{ fontSize: "18px" }}>{planetData.revolution}</p>
        </div>
        <div className={styles["planet-details"]}>
          <p style={{ fontSize: "10px", opacity: "50%" }}>RADIUS</p>
          <p style={{ fontSize: "18px" }}>{planetData.radius}</p>
        </div>
        <div className={styles["planet-details"]}>
          <p style={{ fontSize: "10px", opacity: "50%" }}>AVERAGE TEMP.</p>
          <p style={{ fontSize: "18px" }}>{planetData.temperature}</p>
        </div>
      </div>
    </div>
  );
}
