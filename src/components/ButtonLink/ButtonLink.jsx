import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ link, children, target, download }) => {
  return (
    <a href={link} target={target} {...(download ? { download } : {})}>
      <button className={styles.btn}>{children}</button>
    </a>
  );
};

export default ButtonLink;
