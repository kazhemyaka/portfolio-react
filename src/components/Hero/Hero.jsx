import styles from "./Hero.module.scss";
import { useTranslation } from "react-i18next";
import photo from "../../assets/photo.webp";
import Infos from "../Infos/Infos";
import ButtonLink from "../ButtonLink/ButtonLink";

const Hero = () => {
  const { i18n, t } = useTranslation();

  return (
    <section className={styles.hero} id="about-me">
      <div className={`container ${styles.hero__container}`}>
        <div className={styles.hero__text}>
          <h1 className={styles.hero__title}>{t("title")}</h1>
          <Infos />
          <p className={styles.hero__desc}>{t("desc")}</p>
          <ButtonLink
            link="../../../public/CV_OpanasiukMykyta.pdf"
            target="_self"
            download={true}
          >
            {t("downloadcv")}
          </ButtonLink>
        </div>
        <img src={photo} alt="Mykyta" className={styles.hero__img} />
      </div>
    </section>
  );
};

export default Hero;
