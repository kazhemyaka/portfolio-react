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
        skills: "Skills",
        p1: "I am currently trying to gain knowledge of React. I also have basic skills in Spring Boot web application development, as Java is the main programming language at the university. It helped me a lot to understand HTML and CSS. I also studied HTML/CSS and JavaScript in a separate course, so I have the skills to work with these technologies. I also studied these technologies at the Front-End development course from Beetroot Academy.",
        p2: "In my free time, I am engaged in self-education, taking various mini-courses, reading documentation and performing various tasks.",
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
        skills: "Скіли",
        p1: "Наразі я намагаюся отримати знання про React. Я також маю базові навички розробки веб-додатків на Spring Boot, оскільки Java є основною мовою програмування в університеті. Мені це дуже допомогло для розуміння HTML та CSS. Також я вивчав HTML/CSS та JavaScript на окремій дисципліні, тому маю навички роботи з цими технологіями. Також я вивчав ці технології на курсі Front-End розробки від Beetroot Academy.",
        p2: "У вільний час займаюся самоосвітою, проходжу різні міні-курси, читаю документацію та виконую різні завдання.",
      },
    },
  },
});

export default i18n;
