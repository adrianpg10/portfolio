import React from 'react';
import "./aboutme.scss";
import { FiDownload } from "react-icons/fi";


export default function Aboutme() {
  return (
    <div className='aboutme' id="aboutme">
      <div className='contenido'  data-aos="fade-up" data-aos-delay="200">
        <h1 className='apertura'>sobre mí</h1>

        <div className='left'>

          <p className='estilop'>Hola! Mi nombre es Adrián Pérez Gómez, soy desarrollador web <span>Full Stack</span> y técnico en <span>sistemas microinformáticos y redes</span>.</p>
          <p className='estilop'>Actualmente me encuentro abierto a <span>nuevas oportunidades</span>, con ganas de experimentar <span>nuevos retos</span>, aplicar mis conocimientos y desarrollarme profesionalmente.</p>
          <p className='estilop'>Me gusta aprender nuevas tecnologías , soy <span>autodidacta</span> y me encanta el diseño.</p>

          <a className='cvdescarga' href="/assets/curriculumAdrianPerez.pdf">Curriculum Vitae (PDF) <FiDownload className='download' /></a>


        </div>

        <div className='cierre' data-text="sobre mí">
        </div>
      </div>
      
    </div>
   
  )
}

