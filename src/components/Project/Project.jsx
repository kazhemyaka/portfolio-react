import styles from "./Project.module.scss";

const Project = ({ title, description, img, link }) => {
  return (
    <a className={styles.project} href={link} target="_blank">
      <img src={img} alt={title} className={styles.project__img} />
      <div className={styles.project__text}>
        <h3 className={styles.project__title}>{title}</h3>
        <p className={styles.project__desc}>{description}</p>
      </div>
    </a>
  );
};

export default Project;
