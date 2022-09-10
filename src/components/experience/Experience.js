import React from 'react'
import "./experience.scss";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
export default function Experience() {
  return (
    <div className='experience' id="experience">
      <div className='seccion' >
        <h1 className='apertura'>formación</h1>

        <div className='seccionformacion' data-aos="fade-up" data-aos-delay="200">
          <div className='formacion'>
            <div className='tipo'>
              <div className='titulo'>
              <h3>Desarrollo de aplicaciones web</h3>
              <FiChevronDown className='arrow'/>
              <FiChevronUp className='arrowup'/>
              </div>
              <div className='detalleformacion'>
                <p>Septiembre 2018 - Abril 2022</p>
                <div className='tecnologias'>
                  <span className='tecnologia'>HTML</span>
                  <span className='tecnologia'>CSS</span>
                  <span className='tecnologia'>PHP</span>
                  <span className='tecnologia'>Sass</span>
                  <span className='tecnologia'>React</span>
                  <span className='tecnologia'>Jquery</span>
                  <span className='tecnologia'>Ajax</span>
                  <span className='tecnologia'>Javascript</span>
                  <span className='tecnologia'>Java</span>
                  <span className='tecnologia'>Mysql</span>
                  <span className='tecnologia'>Figma</span>
                  <span className='tecnologia'>Git</span>
                  <span className='tecnologia'>Bootstrap</span>
                  <span className='tecnologia'>Aws</span>
                  <span className='tecnologia'>Wordpress</span>
                </div>
              </div>
              <div className='descripcion'>
            <ul>
              <li>
                <p>Implementación de cruds en sitios webs.</p>
              </li>
              <li>
              <p>Realización de pruedas unitarias en sitios webs.</p>
              </li>
              <li>
              <p>Creación y mantenimiento de eventos en sql.</p>
              </li>

              <li>
              <p>Diseño y arquitectura de sitios webs.</p>
              </li>
            </ul>

          </div>
            </div>
          

          </div>




          <div className='formacion'>
            <div className='tipo'>
              <div className='titulo'>
              <h3>Sistemas microinformáticos y redes</h3>
              <FiChevronDown className='arrow'/>
              <FiChevronUp className='arrowup'/>
              </div>
              <div className='detalleformacion'>
                <p>Septiembre 2015 - Marzo 2017</p>
                <div className='tecnologias'>
                  <span className='tecnologia'>HTML</span>
                  <span className='tecnologia'>CSS</span>
                  <span className='tecnologia'>Ubuntu Server</span>
                  <span className='tecnologia'>Windows Server</span>
                  <span className='tecnologia'>Jquery</span>
                  <span className='tecnologia'>DNS</span>
                  <span className='tecnologia'>Wordpress</span>
                  <span className='tecnologia'>Montaje y repación</span>
                </div>
              </div>
              <div className='descripcion'>
            <ul>
              <li>
                <p>Montaje y reparación de equipos informáticos.</p>
              </li>
              <li>
              <p>Administración de sistemas operativos.</p>
              </li>
              <li>
              <p>Administración de servidores (Ubuntu Server/Windows Server).</p>
              </li>

              <li>
              <p>Gestión y Administración de redes.</p>
              </li>
            </ul>

          </div>
            </div>
          

          </div>



        </div>


        <div className='cierre' data-text="formación">
        </div>
      </div>
    </div>
  )
}
