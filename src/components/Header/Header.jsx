import styles from "./Header.module.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";

const headerLanguages = ["en", "ua"];

const Header = () => {
  const { i18n, t } = useTranslation();

  const headerElements = [
    { link: "/", title: t("home") },
    { link: "/contacts", title: t("contacts") },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <div>
          {headerElements.map((element, index) => (
            <NavLink
              key={index}
              to={element.link}
              className={styles.header__link}
            >
              {element.title}
            </NavLink>
          ))}
        </div>
        <div>
          {headerLanguages.map((lng, index) => (
            <button
              key={index}
              onClick={() => changeLanguage(lng)}
              className={classNames(styles.header__language, {
                [styles["header__language--active"]]: i18n.language === lng,
              })}
            >
              {lng}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
