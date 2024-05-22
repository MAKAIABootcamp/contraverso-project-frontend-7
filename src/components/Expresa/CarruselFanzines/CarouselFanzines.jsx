import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import Modal from "../ModalFanzines";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { actionGetFanzines } from "../../../app/CarruselFanzines/fanzinesActions";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";

import {
  editFanzine,
  deleteFanzine,
} from "../../../app/CarruselFanzines/fanzinesSlices";

const CarouselContainer = styled.div`
  max-width: 60%;
  margin: 0 auto;
  position: relative;

  @media (max-width: 736px) {
    max-width: 100%;
    margin-top: 14%;
  }

  @media (max-width: 600px) and (min-height: 814px) {
    width: 64%;
    padding-top: 5%;
  }

  @media (max-height: 1024px) and (min-width: 600px) {
    width: 60%;
    margin-top: 8%;
  }

  @media (min-width: 111px) and (min-height: 1111px) {
    margin-top: 10%;
  }
  @media (min-width: 1111px) and (min-height: 1080px) {
    max-width: 60%;
  }
  @media (min-width: 1164px) and (max-height: 2133px) {
    max-width: 60%;
    margin-top: auto;
  }
`;
const CustomSlider = styled(Slider)`
  .slick-slide img {
    height: auto;
    border-radius: 10px;
    max-width: 100%;
  }

  @media (max-width: 1024px) {
    .slick-slide img {
      height: 300px;
    }
  }

  @media (max-width: 768px) {
    .slick-slide img {
      height: 400px;
    }
  }

  @media (max-width: 480px) {
    .slick-slide img {
      height: 500px;
    }
  }

  .slick-slide img {
    height: auto;
    border-radius: 10px;
    max-width: 100%;
    cursor: grab;
  }

  .slick-current img {
    transform: scale(1.1);
    padding: 10%;
    height: 5rem;
    border-radius: 5%;
    cursor: grab;
  }

  .slick-slide-content {
    position: relative;
    overflow: hidden;
    padding: 10px;
    border-radius: 10px;
  }

  .slick-slide-content img {
    width: auto;
    height: 100%;
    object-fit: cover;
  }

  .slick-dots li button:before {
    color: #9500ff;
  }

  .slick-dots li.slick-active button:before {
    color: #ff0bf3;
  }

  .slick-prev:before,
  .slick-next:before {
    display: inline-block;
    font-size: 20px;
    border-radius: 55%;
    transition: transform 0.3s ease;
  }
  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: #ffff00;
    transform: rotate(-180deg);
    font-size: 25px;
  }
`;
const ImageContainer = styled.div`
  position: relative;
`;
const EditButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: absolute;
  top: 10px;
  left: 0;
  padding: 0 10px;
  font-size: 123%;
`;

const CarouselFanzines = () => {
  const dispatch = useDispatch();
  const { fanzines } = useSelector((state) => state.fanzines);
  const isAuthenticated = useSelector(
    (state) => state.userAuth.isAuthenticated
  );
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [fanzineId, setFanzineId] = useState(null);

  useEffect(() => {
    dispatch(actionGetFanzines());
  }, [dispatch]);

  console.log(fanzines);

  const handleOpenModal = (isEdit = false, fanzine) => {
    setIsEditing(isEdit);
    setTitle(fanzine.title);
    setImageLink(fanzine.poster);
    setFanzineId(fanzine.id);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setTitle("");
    setImageLink("");
    setFanzineId(null);
  };

  const handleSubmit = () => {
    if (isEditing) {
      dispatch(editFanzine({ id: fanzineId, title, poster: imageLink }));
    } else {
      //  crear fanzine
    }
    handleCloseModal();
  };

  const handleDelete = (fanzineId) => {
    dispatch(deleteFanzine(fanzineId));
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    beforeChange: (next) => setCurrentIndex(next),

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <CarouselContainer>
      <CustomSlider {...settings}>
        {fanzines.map((fanzine, index) => (
          <ImageContainer key={index}>
            <div onClick={() => handleImageClick(fanzine.urlDocument)}>
              <div className="slick-slide-content">
                <img src={fanzine.poster} alt={`Poster ${index + 1}`} />
              </div>
            </div>
            {isAuthenticated && (
              <EditButtons>
                <AiFillDelete
                  className="boton-eliminar"
                  alt="eliminar"
                  onClick={() => handleDelete(fanzine.id)}
                />
                <FaEdit
                  className="boton-editar"
                  alt="editar"
                  onClick={() => handleOpenModal(true, fanzine)}
                ></FaEdit>
              </EditButtons>
            )}
          </ImageContainer>
        ))}
      </CustomSlider>
      {isAuthenticated && (
        <Modal
          isOpen={isModalOpen}
          isEditing={isEditing}
          title="FANZINES:"
          subtitle={
            isEditing ? "¡EDITAR PUBLICACIÓN!" : "¡LISTA PARA PUBLICAR!"
          }
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
      )}
    </CarouselContainer>
  );
};

export default CarouselFanzines;
