import Socials from "../Socials/Socials";
import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footer__container}`}>
        <Socials />
        <p>Copyright ©2024 All rights reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
