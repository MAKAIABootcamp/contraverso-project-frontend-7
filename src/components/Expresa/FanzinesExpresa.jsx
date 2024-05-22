import React, { useState } from "react";
import styled from "styled-components";
import "../../../fonts/fonts.css";
import CarouselFanzines from "./CarruselFanzines/CarouselFanzines";
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
  position: relative;
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
  width: 29%;
  bottom: 0;
  z-index: 3;
  position: absolute;


  @media (max-width: 736px) {
    width: 67%;
  }
  @media (min-width: 375px) and (min-height: 812px) {
    width: 100%;
  }
  @media (min-width: 600px) and (min-height: 800px) {
    width: 67%;
  }
  @media (min-width: 812px) and (min-height: 1025px) {
    width: 60%;
  }
  @media (min-width: 1164px) and (max-height: 2133px) {
    width: 25%;
  }
`;



const FanzinesExpresa = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const isAuthenticated = useSelector(
    (store) => store.userAuth.isAuthenticated
  );

  const handleOpenModal = (isEdit = false) => {
    setIsEditing(isEdit);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTitle("");
    setImageLink("");
  };

  const handleSubmit = () => {
    if (isEditing) {
      // Lógica para editar
    } else {
      // Lógica para crear
    }
    handleCloseModal();
  };

  return (
    <StyledFanzine>
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
