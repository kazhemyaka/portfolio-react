import styles from "./Contacts.module.scss";
import Socials from "../Socials/Socials";
import Infos from "../Infos/Infos";
import { useTranslation } from "react-i18next";

const Contacts = () => {
  const { i18n, t } = useTranslation();

  return (
    <section className={styles.contacts}>
      <div className={`container ${styles.contacts__container}`}>
        <h1 className={styles.contacts__title}>{t("contacts-title")}</h1>
        <p className={styles.contacts__desc}>{t("contacts-p")}</p>
        <Socials />
        <Infos />
      </div>
    </section>
  );
};

export default Contacts;
