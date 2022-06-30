import React, { useEffect, useState } from 'react'
import "./portfolio.scss";
import { Icon } from '@iconify/react';
import PortfolioList from '../portfolioList/PortfolioList';
import { todos, javascript, php } from "../../data";
export default function Portfolio() {



  const [selected, setSelected] = useState("todos");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "todos",
      title: "Todos"
    },

    {
      id: "javascript",
      title: "Javascript"
    },

    {
      id: "php",
      title: "PHP"
    },

  ];

  useEffect(() => {

    switch (selected) {

      case "todos":
        setData(todos);
        break;
      case "javascript":
        setData(javascript);
        break;
      case "php":
        setData(php);
        break;

      default:
        setData(todos);

    }

  }, [selected]);

  return (
    <div className='portfolio' id="portfolio">
      <div className='seccion' data-aos="fade-up" data-aos-delay="200">
        <h1 className='apertura'>proyectos</h1>

        <ul>
          {
            list.map(item =>
              <PortfolioList title={item.title} active={selected === item.id} setSelected={setSelected} id={item.id} />)
          }
        </ul>
        <div className='itemsproyectos'>

          {

            data.map(d => (


              <div className="proyecto">
                <img src={d.img} alt="pr-sample13" />
                <div className="hover">
                  <h3>{d.title}</h3>
                  <p>{d.descripcion}</p>
                  <div className='logos'>

                    <a href={`https://github.com/adrianpg10/${d.logogit}`}><Icon icon="eva:github-outline" className='iconredes' /></a>
                    <a href={`https://${d.logolaunch}`}><Icon icon={d.enlacelaunch} className='iconredes' /></a>

                  </div>
                </div>
              </div>
            ))}
        </div>


        <div className='cierre' data-text="proyectos">
        </div>
      </div>
    </div>
  )
}
