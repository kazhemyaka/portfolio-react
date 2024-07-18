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
        "contacts-title": "Thank you for visiting my website!",
        "contacts-p":
          "I'll be happy if you follow me on social media or check out my Github repositories!",
        myprojects: "My projects",
        project1: "It was made using pure HTML, CSS, and Gulp.",
        project2:
          "It was made using HTML, SCSS, JS, and Swiper for sliders. A map with a custom marker, a form, a gallery were added. Also involved in this project were @Esutarosa and @j-sheva.",
        project3:
          "I am currently developing this site, using React, and will also use the OpenWeather API.",
        project4:
          "My completed homework from the Front-End course at Beetroot Academy.",
        "projects-desc":
          "This portfolio is also my project created with React)",
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
        "contacts-title": "Дякую, що відвідали мій сайт!",
        "contacts-p":
          "Мені буде приємно, якщо ви зайдете на мої соцмережі або поцікавитеся моїми репозиторіями на Github!",
        myprojects: "Мої проєкти",
        project1: "Зроблено через чистий HTML, CSS, а також використано Gulp.",
        project2:
          "Зроблено через HTML, SCSS, JS, використано Swiper для слайдерів. Додано карту з кастомним маркером, форму, галерею. У цьому проєкті брали участь @Esutarosa та @j-sheva.",
        project3:
          "Зараз я розробляю цей сайт, використовуючи React, також у ньому буду використовувати OpenWeather API.",
        project4:
          "Мої виконані домашні завдання з курсу Front-End розробки від Beetroot Academy.",
        "projects-desc":
          "Це портфоліо також є моїм проєктом, створеним завдяки React)",
      },
    },
  },
});

export default i18n;
