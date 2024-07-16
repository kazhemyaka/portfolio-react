import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        aboutme: "About Me",
        home: "Home",
        contacts: "Contacts",
        title: "Hi, I am Mykyta, Junior Front-End Developer",
        location: "Zviahel, Ukraine",
        desc: "I am a student who wants to connect his life with Front-End or Full-Stack development. Currently, I have no practical experience, but I want to gain it!",
        downloadcv: "Download CV",
      },
    },
    ua: {
      translation: {
        aboutme: "Про мене",
        home: "Головна",
        contacts: "Контакти",
        title: "Привіт, мене звати Микита, я Junior Front-End розробник",
        location: "Звягель, Україна",
        desc: "Я студент, який хоче пов'язати своє життя з Front-End або Full-Stack розробкою. Наразі я не маю практичного досвіду, але хочу його отримати!",
        downloadcv: "Завантажити CV",
      },
    },
  },
});

export default i18n;
