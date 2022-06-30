import React from 'react';
import "./contact.scss";
import { Icon } from '@iconify/react';

export default function Contact() {
  return (
    <div className='contact' id="contact">
      <div className='seccion' >
        <h1 className='apertura'>contacto</h1>
        <div className='infocontacto' data-aos="fade-up" data-aos-delay="200">

          <h3>Ponte en contacto</h3>
          <p>Si estás interesado en mí, puedes contactarme a través de mis redes o enviarme un e-mail.</p>

          <a className="email" href="mailto:infoadrianperezgomez@gmail.com" rel="noopener noreferrer" target="_blank">
            Envíame un mensaje
          </a>

          <div className="redes">
          <a href='https://github.com/adrianpg10'><Icon icon="akar-icons:github-fill" className='iconredes'/></a>
          <a href='https://www.linkedin.com/in/adri%C3%A1n-p%C3%A9rez-a3b255230/'><Icon icon="entypo-social:linkedin-with-circle" className='iconredes'/></a>
          
          </div>

        </div>
        <div className='cierre' data-text="contacto">
        
        </div>
        
      </div>
     

    </div>
    
  )
}
