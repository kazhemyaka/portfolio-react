import Social from "../Social/Social";
import styles from "./Socials.module.scss";

import {
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaGithub,
  FaTelegram,
} from "react-icons/fa6";

const socials = [
  {
    icon: <FaInstagram />,
    link: "https://www.instagram.com/mykyta.opanasiuk/",
  },
  {
    icon: <FaXTwitter />,
    link: "https://twitter.com/mykytaopanasiuk",
  },
  {
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/in/mykyta-opanasiuk-30b975248/",
  },
  {
    icon: <FaGithub />,
    link: "https://github.com/kazhemyaka",
  },
  {
    icon: <FaTelegram />,
    link: "https://t.me/mykytaopanasiuk",
  },
];

const Socials = () => {
  return (
    <div className={styles.socials}>
      {socials.map((social, index) => (
        <Social icon={social.icon} link={social.link} key={index} />
      ))}
    </div>
  );
};

export default Socials;
