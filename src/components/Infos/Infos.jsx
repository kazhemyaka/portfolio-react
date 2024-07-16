import styles from "./Infos.module.scss";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";
import Info from "../Info/Info";
import { useTranslation } from "react-i18next";

const Infos = () => {
  const { i18n, t } = useTranslation();

  const infos = [
    { icon: <MdLocationOn />, text: t("location") },
    {
      icon: <MdPhone />,
      text: <a href="tel:+380501953170">+380 50 195 3170</a>,
    },
    {
      icon: <MdEmail />,
      text: (
        <a href="mailto:nikitaopanassiuk@outlook.com">
          nikitaopanassiuk@outlook.com
        </a>
      ),
    },
  ];

  return (
    <ul className={styles.infos}>
      {infos.map((info, index) => (
        <Info key={index} icon={info.icon}>
          {info.text}
        </Info>
      ))}
    </ul>
  );
};

export default Infos;
