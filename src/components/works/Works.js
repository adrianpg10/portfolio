import React from 'react'
import "./works.scss";
import { FiChevronDown } from "react-icons/fi";
import { FiChevronUp } from "react-icons/fi";
export default function Works() {
  return (
    <div className='works' id="works">
    <div className='seccion'>
        <h1 className='apertura'>experiencia</h1>

        <div className='seccionformacion' data-aos="fade-up" data-aos-delay="200">

        <div className='formacion'>
            <div className='tipo'>
              <div className='titulo'>
              <h3>Piscinas y productos Decoytec</h3>
              <FiChevronDown className='arrow'/>
              <FiChevronUp className='arrowup'/>
              </div>
              <div className='detalleformacion'>
                <p>Septiembre 2022 - Actualmente</p>
                <div className='tecnologias'>
                  <span className='tecnologia'>HTML</span>
                  <span className='tecnologia'>CSS</span>
                  <span className='tecnologia'>PHP</span>
                  <span className='tecnologia'>Smarty</span>
                  <span className='tecnologia'>Prestashop</span>
                  <span className='tecnologia'>Filezilla</span>
                  <span className='tecnologia'>Mysql</span>
                  <span className='tecnologia'>Adobe Dreamweaver</span>
                  <span className='tecnologia'>Dinahosting</span>
                </div>
              </div>
              <div className='descripcion'>
            <ul>
              <li>
                <p>Administración web en Prestashop.</p>
              </li>
              <li>
                <p>Gestión y creación multitienda.</p>
              </li>
              <li>
                <p>Modificación archivos .tpl.</p>
              </li>
              <li>
                <p>Inserción y administración de módulos.</p>
              </li>
              <li>
              <p>Administración hosting y dominio en Dinahosting.</p>
              </li>
              <li>
              <p> Gestión archivos en Filezilla.</p>
              </li>
              <li>
              <p>Edición de código en Adobe Dreamweaver.</p>
              </li>
              <li>
              <p> Comunicación en slack.</p>
              </li>
              <li>
              <p>Administración base de datos.</p>
              </li>
            </ul>

          </div>
            </div>
          

          </div>


          <div className='formacion'>
            <div className='tipo'>
              <div className='titulo'>
              <h3>Golf People</h3>
              <FiChevronDown className='arrow'/>
              <FiChevronUp className='arrowup'/>
              </div>
              <div className='detalleformacion'>
                <p>Enero 2022 - Abril 2022</p>
                <div className='tecnologias'>
                  <span className='tecnologia'>HTML</span>
                  <span className='tecnologia'>CSS</span>
                  <span className='tecnologia'>React</span>
                  <span className='tecnologia'>Sass</span>
                  <span className='tecnologia'>PHP</span>
                  <span className='tecnologia'>Ionic</span>
                  <span className='tecnologia'>Laravel</span>
                  <span className='tecnologia'>Figma</span>
                  <span className='tecnologia'>Git</span>
                  <span className='tecnologia'>Wordpress</span>
                </div>
              </div>
              <div className='descripcion'>
            <ul>
              <li>
                <p>Desarrollo de aplicaciones en Ionic</p>
              </li>
              <li>
              <p>Administración de sitios web en Wordpress</p>
              </li>
              <li>
              <p>Creación de servicios en Laravel</p>
              </li>

              <li>
              <p>Gestión de arquitectura y diseño en sitios webs.</p>
              </li>
            </ul>

          </div>
            </div>
          

          </div>




          <div className='formacion'>
            <div className='tipo'>
              <div className='titulo'>
              <h3>Ayuntamiento de Estepona</h3>
              <FiChevronDown className='arrow'/>
              <FiChevronUp className='arrowup'/>
              </div>
              <div className='detalleformacion'>
                <p>Septiembre 2017 - Diciembre 2017</p>
                <div className='tecnologias'>
                  <span className='tecnologia'>Microsoft Windows</span>
                  <span className='tecnologia'>Ubuntu Server</span>
                  <span className='tecnologia'>Windows Server</span>
                  <span className='tecnologia'>Montaje y repación</span>
                  <span className='tecnologia'>Administración redes</span>
                </div>
              </div>
              <div className='descripcion'>
            <ul>
              <li>
                <p>Montaje y reparación de equipos informáticos.</p>
              </li>
              <li>
              <p>Instalación y mantenimiento de sistemas operativos, Microsoft Windows y sistemas Linux</p>
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


        <div className='cierre' data-text="experiencia">
        </div>
      </div>
  </div>
  )
}
