import React, { useEffect, useRef } from 'react'
import "./intro.scss";
import { init } from "ityped";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Icon } from '@iconify/react';

export default function Intro() {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current,
      {
        showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Full Stack", "Front End", "Back End"]
      });
  }, [])

  return (
    <div className='home' id="home">
      <div className='contenidoHome' >
        <h3>Hola, me llamo</h3>
        <h1>Adrián Pérez Gómez</h1>
        <h2>Desarrollador <span ref={textRef}></span></h2>

        <div className='hablemos'>
          <a className="button b-green" href="#portfolio">Mis Proyectos <span className='contenedorarrow'><HiArrowNarrowRight className='arrow'/></span></a>
        </div>


        <div className='logos'>
        <a href='https://github.com/adrianpg10'><Icon icon="akar-icons:github-fill" className='iconredes'/></a>
          <a href='https://www.linkedin.com/in/adri%C3%A1n-p%C3%A9rez-a3b255230/'><Icon icon="entypo-social:linkedin-with-circle" className='iconredes'/></a>
        </div>
      </div>
    </div>
  )
}
