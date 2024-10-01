import "../Scss/dataPersonal.scss";
import { FiDownload } from "react-icons/fi";
import Skill from "./Skill";
import CV from '../file/CV.pdf'

const DataPersonal = () => {

  const Data = [
    {
      id: 1,
      label: "Nombre:",
      data: "Ruíz Díaz Javier A.",
    },
    {
      id: 2,
      label: "Email:",
      data: "javier17utn@gmail.com",
    },
    {
      id: 3,
      label: "Pais:",
      data: "Argentina.",
    },
    {
      id: 4,
      label: "Teléfono:",
      data: "+54 3704264610",
    },
    {
      id: 5,
      label: "Titulo:",
      data: "Analista en Sistemas",
    },
    {
      id: 6,
      label: "Estudiando:",
      data: "Ingenieria en Sistema - UTN",
    },
   
  ];

  return (
    <>
      {Data?.map((item) => (
        <div className="dataPersonal" key={item.id}>
          <span>{item.label}</span>
          <span>{item.data}</span>
        </div>
      ))}
      <div className="dataPersonal" >
          <span>Skill:</span>
          <span><Skill/></span>
        </div>
      <a href={CV} alt="fileCV" className="btn-cv" download >
        descargar CV <FiDownload className="iconDownload" />
      </a>
    </>
  );
};

export default DataPersonal;
