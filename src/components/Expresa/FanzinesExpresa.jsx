import React, { useState } from "react";
import styled from "styled-components";
import "../../../fonts/fonts.css";
import CarouselFanzines from "./CarruselFanzines/CarouselFanzines";
import Modal from "./ModalFanzines";
import { useSelector } from "react-redux";

const StyledFanzine = styled.div`
  background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336876/MONTAJE/EXPRESA/17_iteslr.png");
  background-size: 100% 100%;
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  scroll-snap-align: start;
`;

const StyledTitle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4%;
  position: relative;

  @media (max-width: 800px) {
    align-self: center;
    width: 100%;
  }

  @media (min-width: 801px) and (max-width: 1111px) {
    width: 70%;
  }
`;
const StyledBackgroundImg = styled.img`
  width: 100%;
  z-index: 1;
`;

const StyledTextoImg = styled.img`
  width: 70%;
  z-index: 2;
  position: absolute;
`;

const StyledImgCat = styled.img`
  width: 25%;
  margin-top: auto;
  z-index: 3;
  @media (max-width: 950px) {
    width: 35%;
  }
`;

const StyledComponent = styled.div`
  text-align: center;
  margin-top: 2rem;

  .boton-añadir {
    background-color: #fff35f;
    border: none;
    height: 2rem;
    width: 9rem;
    font-size: 100%;
    font-family: "MADE Soulmaze";
  }
  .container {
    gap: 0.5rem;
    display: grid;
    justify-content: space-around;
    margin-right: 112px;
    padding: 6%;
  }
  .container-title {
    font-family: "Founders Grotesk";
    color: #514d5b;
    text-align: justify;
  }
  .container-text {
    border-radius: 1rem;
    font-size: 128%;
    width: 90%;
  }
  .image-link {
    /* previsializacion cuando se cargue la imagen */
  }
`;

const FanzinesExpresa = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const isAuthenticated = useSelector(
    (store) => store.userAuth.isAuthenticated
  );

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTitle("");
    setImageLink("");
  };

  const handleSubmit = () => {
    // Lógica para cargar la ilustración
    handleCloseModal();
  };

  return (
    <StyledFanzine>
      <StyledComponent>
        {isAuthenticated && (
          <>
            <button className="boton-añadir" onClick={handleOpenModal}>
              Añadir
            </button>
            <Modal
              isOpen={isModalOpen}
              title="FANZINES:"
              subtitle="¡LISTA PARA PUBLICAR!"
              onClose={handleCloseModal}
              onSubmit={handleSubmit}
            >
              <img className="image-link" src={imageLink} alt="Fanzines" />
              <div className="container">
                <h4 className="container-title">Titulo:</h4>
                <input
                  type="text"
                  className="container-text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <h4 className="container-title">Link de fanzines:</h4>
                <input
                  type="text"
                  className="container-text"
                  value={imageLink}
                  onChange={(e) => setImageLink(e.target.value)}
                />
              </div>
            </Modal>
          </>
        )}
      </StyledComponent>
      <StyledTitle>
        <StyledBackgroundImg
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336877/MONTAJE/EXPRESA/4-3_SUBR_m8fbpa.png"
          alt="Fondo del texto"
        />
        <StyledTextoImg
          src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336879/MONTAJE/EXPRESA/4-fanzines_gfpoqo.png"
          alt="Texto en imagen"
        />
      </StyledTitle>

      <div className="Carrusel">
        <CarouselFanzines />
      </div>

      <StyledImgCat
        src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336881/MONTAJE/EXPRESA/4-3_jnxqiq.png"
        alt="Imagen Gato"
      ></StyledImgCat>
    </StyledFanzine>
  );
};

export default FanzinesExpresa;
