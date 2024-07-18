import styles from "./Projects.module.scss";
import { Navigation, A11y, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import Project from "../Project/Project";
import datawarehousePhoto from "../../assets/datawarehouse.avif";
import monticelloPhoto from "../../assets/monticello.avif";
import beetroothwPhoto from "../../assets/beetroothw.avif";
import "./Swiper.scss";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/scrollbar";

const Projects = () => {
  const { i18n, t } = useTranslation();

  const projects = [
    {
      title: "Datawarehouse",
      description: t("project1"),
      img: datawarehousePhoto,
      link: "https://kazhemyaka.github.io/beetroot_firstproject/",
    },
    {
      title: "Monticello",
      description: t("project2"),
      img: monticelloPhoto,
      link: "https://kazhemyaka.github.io/monticello/app/",
    },
    {
      title: "Atmosphere",
      description: t("project3"),
      img: "https://via.placeholder.com/300?text=In+progress",
      link: "https://github.com/kazhemyaka/atmosphere",
    },
    {
      title: "Beetroot Homeworks",
      description: t("project4"),
      img: beetroothwPhoto,
      link: "https://kazhemyaka.github.io/beetroot_hw/",
    },
  ];

  return (
    <section className={styles.projects}>
      <div className={`container ${styles.projects__container}`}>
        <h2 className={styles.projects__title}>{t("myprojects")}</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            650: {
              slidesPerView: 2,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          autoHeight={true}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Project
                title={project.title}
                img={project.img}
                description={project.description}
                link={project.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <IconContext.Provider value={{ size: "1.8rem", color: "#750d37" }}>
          <FaArrowLeft className="swiper-prev" />
          <FaArrowRight className="swiper-next" />
        </IconContext.Provider>
        <p className={styles.projects__desc}>{t("projects-desc")}</p>
      </div>
    </section>
  );
};

export default Projects;
