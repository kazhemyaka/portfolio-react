import styles from "./Skill.module.scss";

const Skill = ({ children }) => {
  return <li className={styles.skill}>{children}</li>;
};

export default Skill;
