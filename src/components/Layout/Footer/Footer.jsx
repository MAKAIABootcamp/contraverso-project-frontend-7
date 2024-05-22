import { Link, NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { FaDiscord, FaArrowTurnUp  } from "react-icons/fa6";
import styled from "styled-components";

const StyledFoo = styled.footer`
  display: flex;
  background-color: #161616;
  width: 100%;
  height: 100vh;
  scroll-snap-align: center;

  .containerFoo {
    ul {
      li {
        padding: 10px;
        list-style-type: none;
      }
      .aside {
        display: flex;
        margin-top: 45px;
        margin-left: 45px;
        margin-bottom: 30px;
        justify-content: space-between;

        .secContra {
          img {
            width: 107px;
            height: 35px;
          }
          p {
            margin-top: 22px;
            color: #f1f1d8;
            font-family: "Filson Pro Book";
            font-size: 12px;
            width: 54%;
          }
        }
        .secUnirme {
          display: flex;
          flex-direction: column;
          margin-right: 14px;

          .descriptiones {
            h1 {
              font-family: "Founders Grotesk Bold";
              color: #f1f1d8;
            }
            p {
              margin-top: 12px;
              color: #f1f1d8;
              font-family: "Filson Pro Book";
              font-size: 12px;
            }
          }
          button {
            background-color: #1df4c8;
            color: #000000;
            padding: 1rem;
            font-family: "MADE Soulmaze";
            font-size: 12px;
            border: none;
            border-radius: 8px;
            margin-top: 20px;
          }
        }
      }
      hr {
        border: none;
        border-top: 1px solid #4100d0;
        width: 89%;
        margin-left: 45px;
      }
      .redes {
        display: flex;
        justify-content: flex-end;
        margin-right: 90px;
        margin-top: 30px;
        li {
          .Redes {
            span {
              color: #1df4c8;
            }
          }
        }
      }

      .Derechos {
        margin-left: 45px;
        width: auto;
        p {
          margin-top: 12px;
          margin-bottom: 12px;
          color: #f1f1d8;
          font-family: "Filson Pro Book";
          font-size: 12px;
        }
      }
    }
    .scrollToTopButton {
      display: flex;
      justify-content: flex-end;
      background-color: transparent;
      padding: 1rem;
      color: #ffffff;
      font-family: "Filson Pro Book";
      font-size: 12px;
      border: 1px solid white;
      border-radius: 20px;
      margin-left: 50px;
      margin-top: 5%;
    }
  }

  @media (min-width: 1720px) {
    .containerFoo {
      width: 96vw;
    }
    
  }

  @media (max-width: 419px) {
    .containerFoo {
      ul{
        hr {
        border: none;
        border-top: 1px solid #4100d0;
        width: 70%;
        margin-left: 45px;
      }
      }
    }
  }
  @media (max-width: 366px) {
    height: 100%;
    .containerFoo {
      ul{
       .aside {
        display:flex;
        flex-direction: column;
       }
      }
    }
  }
`;

const links = [
  {
    label: "Inicio",
    iconLogo:
      "https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/INICIO/1-7-2_lbpqjx.png",
    link: "/",
    description:
      "Plataforma web creada como parte de la estrategia transmedia interdisciplinaria: Contraverso. ¡Confronta las ideas, confronta tu mundo!",
  },
  {
    label: "Unirme",
    link: "https://discord.gg/tCqfzHWGCV",
  },
];

const redes = [
  {
    label: "Discord",
    iconDiscord: FaDiscord,
    link: "https://discord.gg/tCqfzHWGCV",
  },
  {
    label: "Insta",
    iconInsta: AiFillInstagram,
    link: "https://www.instagram.com/_contraverso/",
  },
  {
    label: "X",
    iconX: FaXTwitter,
    link: "https://twitter.com/_contraverso",
  },
  {
    label: "Tiktok",
    iconTiktok: SiTiktok,
    link: "https://tiktok.com/@_contraverso",
  },
];

const Footer = ({ footerRef }) => {
  return (
    <>
      <StyledFoo>
        <footer className="containerFoo" ref={footerRef}>
          <ul>
            <div className="aside">
              {links.map((item, index) => (
                <li key={index} className="secContra">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "linkActive" : "link"
                    }
                    to={item.link}
                  >
                    <div className="Logo">
                      {item.label === "Inicio" && (
                        <img
                          className="logoContraverso"
                          src={item.iconLogo}
                          alt="Logo"
                        />
                      )}
                    </div>
                  </NavLink>
                  <div className="Descrip">
                    {item.label === "Inicio" && <p>{item.description}</p>}
                  </div>
                </li>
              ))}
              {links.map((item, index) => (
                <li key={index} className="secUnirme">
                  <div className="descriptiones">
                    {item.label === "Unirme" && <h1>Sé parte</h1>}
                    {item.label === "Unirme" && (
                      <p>
                        Únete a nuestra comunidad para contrarrestar a la
                        desinformación.
                      </p>
                    )}
                  </div>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "linkActive" : "link"
                    }
                    to={item.link}
                  >
                    <div className="buttonU">
                      {item.label === "Unirme" && <button>UNIRME</button>}
                    </div>
                  </NavLink>
                </li>
              ))}
            </div>
            <hr />
            <div className="redes">
              {redes.map((item, index) => (
                <li key={index}>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "linkActive" : "link"
                    }
                    to={item.link}
                  >
                    <div className="Redes">
                      <span>{item.label === "Discord" && <FaDiscord />}</span>
                      <span>
                        {item.label === "Insta" && <AiFillInstagram />}
                      </span>
                      <span> {item.label === "X" && <FaXTwitter />}</span>
                      <span>{item.label === "Tiktok" && <SiTiktok />}</span>
                    </div>
                  </NavLink>
                </li>
              ))}
            </div>
            <li className="Derechos">
              <p>© 2024 Contraverso. Todos los derechos reservados.</p>
            </li>
          </ul>

          <button className="scrollToTopButton">Ir arriba <FaArrowTurnUp /></button>
        </footer>
      </StyledFoo>
    </>
  );
};

export default Footer;
