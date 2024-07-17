import styles from "./Social.module.scss";
import { IconContext } from "react-icons";

const Social = ({ icon, link }) => {
  return (
    <a href={link} target="_blank" className={styles.social}>
      <IconContext.Provider value={{ size: "2rem" }}>
        {icon}
      </IconContext.Provider>
    </a>
  );
};

export default Social;
