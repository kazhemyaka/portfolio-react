import { useTranslation } from "react-i18next";
import styles from "./TextSection.module.scss";

const TextSection = () => {
  const { i18n, t } = useTranslation();

  return (
    <section className={styles.textsection}>
      <div className={`container ${styles.textsection__container}`}>
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
      </div>
    </section>
  );
};

export default TextSection;
