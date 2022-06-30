import React from 'react';
import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu ' + (menuOpen && "active")}>

            <ul className='hover'>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#home'>Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#aboutme'>Sobre mí</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#portfolio'>Proyectos</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#experience'>Formación</a>
                </li>

                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#works'>Experiencia</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href='#contact'>Contacto</a>
                </li>
            </ul>
                <a className='cv' href="/assets/curriculum.pdf">Currículum</a>
            
        </div>
    )
}
