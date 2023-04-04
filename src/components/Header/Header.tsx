import styles from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
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
};

export default function Header({ data }: HeaderProps) {
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);

  return (
    <div className={styles.header}>
      <div
        style={{
          width: "92%",
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <p className={styles.title}>the planets</p>
        <FontAwesomeIcon
          icon={isNavMenuVisible ? faClose : faBars}
          className={styles["menu-icon"]}
          onClick={() => setIsNavMenuVisible((prev) => !prev)}
        />
      </div>

      <div
        className={styles["nav-menu"]}
        style={{ display: isNavMenuVisible ? "inherit" : "none" }}
      >
        {data.map((planet, index) => {
          return (
            <div key={index} className={styles["nav-element"]}>
              <div
                style={{ backgroundColor: planet.color }}
                className={styles.cicle}
              ></div>
              <Link
                onClick={() => setIsNavMenuVisible(false)}
                to={
                  planet.name.toLowerCase() === "mercury"
                    ? "/"
                    : `/${planet.name.toLowerCase()}`
                }
                className={styles["planet-name"]}
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
                  src="../../../public/assets/arrow.png"
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
