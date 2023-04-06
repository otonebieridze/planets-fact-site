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

type PlanetInfoMenuProps = {
  planetData: Planet;
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
  hoveredItem: string;
  setHoveredItem: React.Dispatch<React.SetStateAction<string>>;
  windowWidth: number;
};

import styles from "./PlanetInfoMenu.module.css";

export default function PlanetInfoMenu({
  planetData,
  currentSection,
  setCurrentSection,
  hoveredItem,
  setHoveredItem,
  windowWidth,
}: PlanetInfoMenuProps) {
  return (
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
        style={
          windowWidth < 600
            ? {
                borderBottom:
                  hoveredItem === "overview" || currentSection === "overview"
                    ? `4px solid ${planetData.color}`
                    : "",
              }
            : {
                backgroundColor:
                  hoveredItem === "overview" || currentSection === "overview"
                    ? planetData.color
                    : "",
              }
        }
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
        style={
          windowWidth < 600
            ? {
                borderBottom:
                  hoveredItem === "structure" || currentSection === "structure"
                    ? `4px solid ${planetData.color}`
                    : "",
              }
            : {
                backgroundColor:
                  hoveredItem === "structure" || currentSection === "structure"
                    ? planetData.color
                    : "",
              }
        }
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
        style={
          windowWidth < 600
            ? {
                borderBottom:
                  hoveredItem === "surface" || currentSection === "surface"
                    ? `4px solid ${planetData.color}`
                    : "",
              }
            : {
                backgroundColor:
                  hoveredItem === "surface" || currentSection === "surface"
                    ? planetData.color
                    : "",
              }
        }
      >
        surface
      </div>
    </div>
  );
}
