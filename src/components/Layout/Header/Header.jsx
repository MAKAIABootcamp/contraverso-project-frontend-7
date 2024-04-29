// import "./Header.scss"
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { FaDiscord } from "react-icons/fa6";
import styled from 'styled-components';

const StyledNav = styled.nav`
    display: flex;
    background-color: #161616;
    width: 100%;
    height: 107px;

    .containerNav{
       margin: 10px;
       box-shadow: 0 4px 8px rgba(0,0,0,0.1); 

        ul{
            display: flex;
            align-items: center;
            justify-content: space-around;                 

            li{
                display: flex; 
                list-style-type: none;   
                padding: 5px;                                     

                .Sections{ 
                  margin-left: 20px;
                  margin-right: 40px;

                    p{
                        color: #F1F1D8; 
                        margin-left: 10%;
                        
                                                                                         
                    }
                    img{
                        width: 177px;
                        height: 60px;;
                        margin: 15px;
                    }                
                }

                .link {
                  text-decoration: none;
                }

                .linkActive{
                  text-decoration: none;
                  p{
                    color: #FFF35F; 
                  }                  
                }

                .Redes{
                  margin-left: 35px;
                  gap: 5%;
                  span {
                    color:#1DF4C8;
                  }
                }
            }
        }
    }
   
`

const links = [
  {
    label: "Inicio",
    iconLogo: "https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/INICIO/1-7-2_lbpqjx.png",
    link: "/"
  },
  {
    label: "Chequea",
    link: "chequea"
  },
  {
    label: "Confronta",
    link: "confronta"
  },
  {
    label: "Expresa",
    link: "expresa"
  },
  {
    label: "Aprende",
    link: "aprende"
  },
  {
    label: "Contacto",
    link: "contacto"
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
    link: "tiktok.com/@_contraverso"
  }
];

const Header = () => {
  return (
    <>
      <StyledNav >
        <nav className='containerNav'>
          <ul>
            {
              links.map((item, index) => (
                <li key={index} className={item.label === "label" ? "highlighted-labelPages" : ""}>
                  <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to={item.link}>
                    <div className="Sections">
                    {item.label === "Inicio" && <img className="logoContraverso" src={item.iconLogo} alt="Logo" />}
                      {item.label !== "Inicio" && <p>{item.label}</p>}
                    </div>
                  </NavLink>
                </li>
              ))
            }
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
          </ul>
        </nav>
      </StyledNav >
    </>
  )
}

export default Header