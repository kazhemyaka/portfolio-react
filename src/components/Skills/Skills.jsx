import styles from "./Skills.module.scss";
import Skill from "../Skill/Skill";
import { useTranslation } from "react-i18next";

const skills = [
  "Git",
  "Linux",
  "HTTP",
  "HTML",
  "CSS",
  "Bootstrap",
  "Tailwind CSS",
  "JavaScript",
  "UI/UX",
  "Figma",
  "React",
];

const Skills = () => {
  const { i18n, t } = useTranslation();

  return (
    <section className={styles.skills}>
      <div className={`container ${styles.skills__container}`}>
        <h2 className={styles.skills__title}>{t("skills")}</h2>
        <ul className={styles.skills__list}>
          {skills.map((skill, index) => (
            <Skill key={index}>{skill}</Skill>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
