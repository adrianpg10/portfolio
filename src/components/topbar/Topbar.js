import React from 'react'
import "./topbar.scss";

export default function Topbar({ setMenuOpen, menuOpen }) {


  return (
    <div id="barra" className={'topbar ' + (menuOpen && "active")}>
      <div className='left'>
        <div className='logo'>
          <picture>
            <img src="../assets/codigocian.png" alt="codigo" id="codigo" />
          </picture>
          <a href='#home' className='intro' onClick={() => setMenuOpen(false)}>APG</a>
        </div>
      </div>

      <div className='right'>

        <ul className='menu-opciones' data-aos="fade-left" data-aos-delay="200">
          <li >
            <a href='#aboutme' className='selected'>Sobre mí</a>
          </li>

          <li >
            <a href='#portfolio'>Proyectos</a>
          </li>
          <li>
            <a href='#experience'>Formación</a>
          </li>

          <li >
            <a href='#works'>Experiencia</a>
          </li>
          <li >
            <a href='#contact'>Contacto</a>
          </li>

          <a className='cv'href="/assets/curriculumAdrianPerez.pdf">Currículum</a>

        </ul>
        <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
          <span className='line1'></span>
          <span className='line2'></span>
          <span className='line3'></span>
        </div>
      </div>


    </div>
  )
}
