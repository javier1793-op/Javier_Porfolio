import "../Scss/about.scss";
import DataPersonal from "./DataPersonal";

const About = () => {
 
  return (
    <>
      <div className="contentAbout">
        <div className="titleAbout">
          <h1>Acerca de mi</h1>
        </div>
        <div className="descriptionAbout">
          <p>
          👋 ¡Hola! Soy Javier Alejandro Ruiz Díaz, estudiante de Ingeniería en Sistemas de Información en la Universidad Tecnológica Nacional (UTN), actualmente cursando el tercer año de la carrera. Mi formación académica se complementa con experiencia práctica en desarrollo web.</p>
<p>
💻 Tengo sólidos conocimientos en frontend utilizando tecnologías como JavaScript, React, HTML y CSS. También he trabajado en proyectos de backend con Node.js, bases de datos MySQL y MongoDB (Mongoose).
</p><p>
🚀 A lo largo de mi carrera, he participado en varias simulaciones laborales, desarrollando proyectos reales en equipo, lo que me ha permitido afianzar tanto mis habilidades técnicas como mi capacidad de trabajo colaborativo.
</p><p>
🌍 Además, trabajo como freelancer para clientes en España en sectores como agricultura, energía, diseño, y eCommerce, desarrollando soluciones con WordPress.
</p><p>
📈 Actualmente, estoy buscando nuevas oportunidades para seguir creciendo como desarrollador web, aplicando mis conocimientos tanto en proyectos frontend como backend, y expandiendo mi experiencia en el ámbito de la programación y la tecnología.
          </p>
        </div>
        <div className="infoAbout">
          <DataPersonal />
        </div>
      </div>
    </>
  );
};

export default About;
