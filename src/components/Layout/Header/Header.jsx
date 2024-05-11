// import "./Header.scss"
import '../../../../fonts/fonts.css';
import { NavLink } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { SiTiktok } from "react-icons/si";
import { FaDiscord } from "react-icons/fa6";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import { MdFilterList } from "react-icons/md";
import { IoCloseCircleSharp } from "react-icons/io5";

const StyledNav = styled.nav`
  display: flex;
  background-color: #161616;
  width: 100%;
  height: 15vh;
  scroll-snap-align:start;
  .containerNav {
    margin: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

    ul {
      display: flex;
      align-items: center;
      justify-content: space-around;

      li {
        display: flex;
        list-style-type: none;
        padding: 5px;

        .Sections {
          margin-left: 20px;
          margin-right: 40px;

          p {
            color: #f1f1d8;
            margin-left: 10%;
          }
          img {
            width: 177px;
            height: 60px;
            margin: 15px;
          }
        }

        .link {
          text-decoration: none;
        }

        .linkActive {
          text-decoration: none;
          p {
            color: #fff35f;
          }
        }

        .Redes {
          margin-left: 35px;
          gap: 5%;
          span {
            color: #1df4c8;
          }
        }
      }
    }
  }
  @media (max-width: 1120px) {
    .containerNav ul li {
      display: none;
    }

    .isMobile {
      align-items: center;
      width: 100%;

      ul {
        display: flex;
        justify-content: space-between;

        .liVisibles {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          list-style-type: none;
          padding: 5px;

          img {
            width: 177px;
            height: 60px;
            margin: 15px;
          }

          .openModal {
            margin-right: 30px;
            width: 40px;
            height: 40px;
            color: #1df4c8;
          }
        }
      }

      .modal {
        display: flex;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #161616;
  padding: 20px;
  border-radius: 14px;
  width: 90%;
  max-width: 500px;
  height: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;

  .contentWrapper {
    display: flex;
    justify-content: flex-end;
    align-content: flex-end;
    .closeModal {
      width: 20px;
      height: 20px;
      color: #1df4c8;
    }
  }

  .Sections {
    p {
      color: #f1f1d8;
      margin-top: 10px;
    }
  }

  .link {
    display: flex;
    text-decoration: none;
    justify-content: center;
  }

  .linkActive {
    display: flex;
    text-decoration: none;
    justify-content: center;
    p {
      color: #fff35f;
    }
  }

  .Redes {
    display: flex;
    flex-direction: row;
    justify-content: center;
    justify-content: space-around;
    margin-top: 80px;
    span{
      color: #4100D0;
    }
  }
`;


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
    link: "https://tiktok.com/@_contraverso"
  }
];

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 1120); // Ajusta el valor según tus necesidades
    };

    window.addEventListener('resize', checkScreenSize);
    checkScreenSize(); // Llamada inicial para establecer el estado inicial

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

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

        {isMobile && (
          <>
            <div className="isMobile">
              <ul>
                {
                  links.map((item, index) => (

                    <li key={index} className='liVisibles'>
                      <NavLink className={({ isActive }) => isActive ? "linkActive" : "link"} to={item.link}>
                        <div className="Sections">
                          {item.label === "Inicio" && <img className="logoContraverso" src={item.iconLogo} alt="Logo" />}
                        </div>
                      </NavLink>
                    </li>
                  ))
                }
                <li className='liVisibles'>
                  <MdFilterList className='openModal' onClick={toggleModal} />
                </li>
              </ul>
              <div className="modal">
                {isModalOpen && (
                  <ModalBackground>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                      <div className="contentWrapper">
                        <IoCloseCircleSharp className='closeModal' onClick={toggleModal} />
                      </div>
                      {links.map((item, index) => (
                        item.label !== "Inicio" && (
                          <NavLink key={index} className={({ isActive }) => isActive ? "linkActive" : "link"} to={item.link} onClick={toggleModal}>
                            <div className="Sections">
                              <p>{item.label}</p>
                            </div>
                          </NavLink>
                        )
                      ))}
                      <div className="Redes">
                      {redes.map((item, index) => (
                        <NavLink key={index} className={({ isActive }) => isActive ? "linkActive" : "link"} to={item.link} onClick={toggleModal}>
                          <div>
                            <span>{item.label === "Discord" && <FaDiscord />}</span>
                            <span>{item.label === "Insta" && <AiFillInstagram />}</span>
                            <span> {item.label === "X" && <FaXTwitter />}</span>
                            <span>{item.label === "Tiktok" && <SiTiktok />}</span>
                          </div>
                        </NavLink>
                      ))}
                      </div>

                    </ModalContent>
                  </ModalBackground>
                )}
              </div>
            </div>
          </>
        )}
      </StyledNav >
    </>
  )
}

export default Header