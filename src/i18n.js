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
        skills: "Skills",
        contacts: "Contacts",
      },
    },
    ua: {
      translation: {
        aboutme: "Про мене",
        skills: "Скіли",
        contacts: "Контакти",
      },
    },
  },
});

export default i18n;
