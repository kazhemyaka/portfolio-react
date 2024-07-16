import styles from "./Info.module.scss";
import { IconContext } from "react-icons";

const Info = ({ icon, children }) => {
  return (
    <li className={styles.info}>
      <IconContext.Provider value={{ size: "2rem" }}>
        {icon}
      </IconContext.Provider>
      {children}
    </li>
  );
};

export default Info;
