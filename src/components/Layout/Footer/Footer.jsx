import "./Footer.scss"
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { FaDiscord } from "react-icons/fa6";
import styled from 'styled-components';


const links = [
  {
    label: "Inicio",
    iconLogo: "https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/INICIO/1-7-2_lbpqjx.png",
    link: "/",
    description: "Plataforma web creada como parte de la estrategia transmedia interdisciplinaria: Contraverso. ¡Confronta las ideas, confronta tu mundo!"
  },
  {
    label: "Unirme",
    link: "https://discord.gg/tCqfzHWGCV"
  }
];

const redes = [
  {
    label: "Discord",
    iconDiscord: FaDiscord,
    link: "https://discord.gg/tCqfzHWGCV"
  },
  {
    label: "Insta",
    iconInsta: AiFillInstagram,
    link: "https://www.instagram.com/_contraverso/"
  },
  {
    label: "X",
    iconX: FaXTwitter,
    link: "https://twitter.com/_contraverso"
  },
  {
    label: "Tiktok",
    iconTiktok: SiTiktok,
    link: "https://tiktok.com/@_contraverso"
  }
];

const Footer = () => {
  return (
    <>
      <footer className='containerNav'>
        <ul>
          {
            links.map((item, index) => (
              <li key={index} className={item.label === "label" ? "highlighted-labelPages" : ""}>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to={item.link}>
                  <div className="Sections">
                    {item.label === "Inicio" && <img className="logoContraverso" src={item.iconLogo} alt="Logo" />}
                  </div>
                  <div className="buttonUnirme">
                    {item.label === "Unirme" && <button>{item.label}</button>}
                  </div>
                </NavLink>
                {item.label === "Inicio" && <p>{item.description}</p>}
                {item.label === "Unirme" && <h1>Sé parte</h1>}
                {item.label === "Unirme" && <p>Únete a nuestra comunidad para contrarrestar a la desinformación</p>}
              </li>
            ))
          }
          <hr/>
          {
            redes.map((item, index) => (
              <li key={index} className={item.label === "iconRedes" ? "highlighted-iconRedes" : ""}>
                <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to={item.link}>
                  <div className="Redes">
                    <span>{item.label === "Discord" && <FaDiscord />}</span>
                    <span>{item.label === "Insta" && <AiFillInstagram />}</span>
                    <span> {item.label === "X" && <FaXTwitter />}</span>
                    <span>{item.label === "Tiktok" && <SiTiktok />}</span>
                  </div>
                </NavLink>
              </li>
            ))
          }
          <li>
            <p>© 2024 Contraverso. Todos los derechos reservados.</p>
          </li>
        </ul>
      </footer>
    </>
  )
}

export default Footer