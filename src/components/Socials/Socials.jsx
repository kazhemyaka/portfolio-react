import Social from "../Social/Social";
import styles from "./Socials.module.scss";
import styled from "styled-components";

const StyledSocials = styled.div`
  justify-content: ${(props) => props.$justify};

  @media screen and (max-width: 954px) {
    justify-content: center;
  }
`;

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

const Socials = ({ justify }) => {
  return (
    <StyledSocials className={styles.socials} $justify={justify}>
      {socials.map((social, index) => (
        <Social icon={social.icon} link={social.link} key={index} />
      ))}
    </StyledSocials>
  );
};

export default Socials;
