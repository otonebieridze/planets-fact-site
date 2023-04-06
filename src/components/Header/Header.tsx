import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
type HeaderProps = {
  data: Planet[];
  isNavMenuVisible: boolean;
  setIsNavMenuVisible: React.Dispatch<React.SetStateAction<boolean>>;
  windowWidth: number;
};

export default function Header({
  data,
  isNavMenuVisible,
  setIsNavMenuVisible,
  windowWidth,
}: HeaderProps) {
  const [hoveredPlanet, setHoveredPlanet] = useState("");

  return (
    <div className={styles.header}>
      <div className={styles["header-box"]}>
        <p className={styles.title}>the planets</p>
        <FontAwesomeIcon
          icon={isNavMenuVisible ? faClose : faBars}
          className={styles["menu-icon"]}
          onClick={() => setIsNavMenuVisible((prev) => !prev)}
        />
      </div>

      <div
        className={styles["nav-menu"]}
        style={{ visibility: isNavMenuVisible ? "visible" : "hidden" }}
      >
        {data.map((planet, index) => {
          return (
            <div key={index} className={styles["nav-element"]}>
              <div
                style={{ backgroundColor: planet.color }}
                className={styles.cicle}
              ></div>
              <Link
                onMouseOver={() =>
                  windowWidth >= 600 && setHoveredPlanet(planet.name)
                }
                onMouseOut={() => setHoveredPlanet("")}
                onClick={() => windowWidth < 600 && setIsNavMenuVisible(false)}
                to={
                  planet.name.toLowerCase() === "mercury"
                    ? "/"
                    : `/${planet.name.toLowerCase()}`
                }
                className={styles["planet-name"]}
                style={{
                  color:
                    hoveredPlanet === planet.name ? planet.color : "#FFFFFF",
                }}
              >
                {planet.name}
              </Link>
              <Link
                onClick={() => setIsNavMenuVisible(false)}
                to={
                  planet.name.toLowerCase() === "mercury"
                    ? "/"
                    : `/${planet.name.toLowerCase()}`
                }
              >
                <img
                  className={styles["arrow-img"]}
                  src="../../../assets/arrow.png"
                  alt="arrow"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
