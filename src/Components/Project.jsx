import "../Scss/project.scss";
import Cardproject from "./Cardproject";
import { AiFillGithub, AiFillChrome } from "react-icons/ai";

import Anime from "../Img/project/Anime.png";
import Serendipia from "../Img/project/serendipia.png";
import Bios from "../Img/project/bios.png";
import Ecommerce from "../Img/project/Ecommerce.png";
import ChaEnergia from "../Img/project/chaenergia.png";
import Talego from "../Img/project/talego.png";
import Biosit from "../Img/project/biosit.png";
import Permacultura from "../Img/project/permacultura.png";
import Loly from "../Img/project/loly.png";
import Kv from "../Img/project/kvstudio.png";
import Dental from "../Img/project/dental.png";
import Reformas from "../Img/project/reformas.png";
import Edusync from "../Img/project/edusync.png";
import Modal from "./Modal";

import { useState } from "react";

const Project = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const date = new Date();

  const ListProject = [
    {
      id: 100,
      urlImg: `${ChaEnergia}`,
      title: "Cha Energia",
      description:
        "Soluciones Energéticas Integrales, Tu Consultoría Energética",
      languaje: ["Wordpress","Elementor"],
      link: "https://chaenergia.es/",
      git: "",
    },
    {
      id: 200,
      urlImg: `${Talego}`,
      title: "Talego Ink",
      description:
        "Sumérgete en el mundo del arte del tatuaje a través de la visión y habilidad de nuestro artista",
      languaje: ["Wordpress","Elementor"],
      link: "https://talegoink.com/",
      git: "",
    },
    {
      id: 201,
      urlImg: `${Permacultura}`,
      title: "Permaculturasturia",
      description:
        "Agricultura Ecológica: Un Compromiso Personal",
      languaje: ["Wordpress","Elementor"],
      link: "https://permaculturasturia.com/",
      git: "",
    },
    {
      id: 202,
      urlImg: `${Loly}`,
      title: "PSICÓLOGA",
      description:
        "Terapia online a tu alcance, descubre la comodidad y efectividad de la terapia en línea",
      languaje: ["Wordpress","Elementor"],
      link: "https://psicologalolypastor.es/",
      git: "",
    },
    {
      id: 203,
      urlImg: `${Kv}`,
      title: "Cuidado Experto",
      description:
        "servicios excepcionales que van más allá de la estética, garantizando resultados visibles y duraderos. ",
      languaje: ["Wordpress","Elementor"],
      link: "https://kvstudionails.com/",
      git: "",
    },
    {
      id: 204,
      urlImg: `${Dental}`,
      title: "Laboratorio Dental",
      description:
        "Laboratorio de confinaza para profesionales de la odontología. ",
      languaje: ["Wordpress","Elementor"],
      link: "https://lburgosdental.es/",
      git: "",
    },
    {
      id: 205,
      urlImg: `${Reformas}`,
      title: "Reformas Integrales",
      description:
        "En MG Reformas, transformamos tus espacios con un enfoque profesional en pintura, albañilería, carpintería y más. ",
      languaje: ["Wordpress","Elementor"],
      link: "https://mgreformasconstr.es/",
      git: "",
    },
    {
      id: 205,
      urlImg: `${Edusync}`,
      title: "Edusync",
      description:
        "Desarrollé la aplicación EduSync durante una simulación laboral en noCountry junto a un equipo de profesionales. A lo largo del proyecto, colaboré en la creación de una plataforma para gestionar la interacción entre estudiantes, profesores y padres, lo que me permitió adquirir y fortalecer habilidades clave en desarrollo web, trabajo en equipo y resolución de problemas. ",
      languaje: ["Reactjs","Redux","jsx","css","nodejs","postgresql","Sequelize",""],
      link: "https://edusync-ten.vercel.app/",
      git: "https://github.com/javier1793-op/edutech?tab=readme-ov-file#objetivos-de-la-aplicación",
    },
    {
      id: 100,
      urlImg: `${Anime}`,
      title: "Page Anime",
      description:
        "Explore a captivating anime platform featuring a user-friendly login system for advanced functionalities. Dive into information search for your favorite series and characters, utilize our efficient favorites system, and delve deeper with our powerful search engine powered by a specialized API.-- USER: koppo@gmail.com -- PASS: koppo",
      languaje: ["SCSS", "HTML", "REACT"],
      link: "https://javier1793-op.github.io/anime/",
      git: "https://github.com/javier1793-op/anime",
    },
    {
      id: 101,
      urlImg: `${Serendipia}`,
      title: "Page Diary Personal",
      description:
        "Immerse yourself in a personal page dedicated to journal posts, featuring a captivating video game-inspired design. Traverse a magical forest, complemented by an administrator login system. Experience seamless data management with a CRUD system, seamlessly integrated through a custom API built with Mongoose DB technology",
      languaje: ["SCSS", "HTML", "REACT", "NODEJS", "MONGOSE"],
      link: "https://javier1793-op.github.io/diaryPersonal/",
      git: "https://github.com/javier1793-op/diaryPersonal",
    },
 
 
    {
      id: 104,
      urlImg: `${Bios}`,
      title: "Page Bios Informática",
      description:
        "Pagina del ventas online y servicios tecnicosWelcome to our local tech haven! Dive into our customized online store featuring a curated selection of personalized computer products. Explore cutting-edge technology tailored just for you, all while supporting our local business. Discover the perfect tech solutions with a touch of personalization!",
      languaje: ["WORDPRESS"],
      link: "https://biosonline.com.ar/",
      git: "",
    },
    {
      id: 106,
      urlImg: `${Biosit}`,
      title: "Bios IT virtual campus",
      description:
        "private virtual classroom, for rental of space and creation of courses and content for registered students",
      languaje: ["Moodle"],
      link: "https://www.bios-it.com.ar/aulabiosit/",
      git: "",
    },
    {
      id: 107,
      urlImg: `${Ecommerce}`,
      title: "Ecommerce Frontend",
      description: "shopping cart model, with added to cart and image gallery",
      languaje: ["SCSS", "HTML",'REACT','REDUX'],
      link: "https://javier1793-op.github.io/ecommerceFrontmentor/",
      git: "https://github.com/javier1793-op/ecommerceFrontmentor",
    },
  ];
  return (
    <>
      <div className="titleAbout">
        <h1>Mis Proyectos</h1>
      </div>
      <div className="contentProject">
        {ListProject.map((item) => (
          <>
            <Cardproject
              key={item.id}
              imgUrl={item.urlImg}
              title={item.title}
              description={item.description}
              openModal={() => openModal(item)}
            />
          </>
        ))}
      </div>
      {selectedProject && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="titleModal">{selectedProject.title}</h2>
          <section className="imgContentModal">
            <img
              src={selectedProject.urlImg}
              alt="imgModal"
              className="imgModal"
            />
          </section>

          <p className="pModal">{selectedProject.description}</p>
          <h3 className="h3Modal">Tecnología</h3>

          <section className="language">
            {selectedProject.languaje.map((lang) => (
              <span className="languageModal" key={date}>
                {lang}
              </span>
            ))}
          </section>

          <section className="btnModal">
            <a
              href={selectedProject.link}
              className="btnModalLink"
              target="_bank"
            >
              Pagina <AiFillChrome className="iconLink" />
            </a>
            {selectedProject.git === "" ? (
              ""
            ) : (
              <a
                href={selectedProject.git}
                className="btnModalLink"
                target="_bank"
              >
                GitHub <AiFillGithub className="iconLink" />
              </a>
            )}
          </section>
        </Modal>
      )}
    </>
  );
};

export default Project;
