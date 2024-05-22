import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../../fonts/fonts.css";
import { useExpImg } from "./Data";
import styled from "styled-components";
import { ImgForm } from "./ImgForm";
import { EditForm } from "./EditForm";
import { MdAddToPhotos } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { actionDeleteImgs } from "../../../app/CarruselIMG/carruselActions";
import { useDispatch, useSelector } from "react-redux";

const CarouselContainer = styled.div`
  max-width: 55%;
  margin-bottom: 5%;
  position: relative;
  z-index: 3;
  padding-top: 5%;
  @media (max-width: 975px) {
    padding-top: 10%;
  }
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px;
    @media (max-width: 800px) {
      padding: 0;
    }
  }

  .slick-slide img {
    height: 5rem;
    border-radius: 5%;
    width: 5rem;
  }

  .slick-slide-content {
    position: relative;
    overflow: hidden;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .slick-slide-content img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
    margin-bottom: 5%;
  }

  .slick-prev {
    left: -45px;
  }

  .slick-prev:before,
  .slick-next:before {
    display: inline-block;
    font-size: 40px;
    border-radius: 55%;
    transition: transform 0.3s ease;
    color: #d977c8;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: #d977c8;
    transform: rotate(-180deg);
    font-size: 45px;
    @media (max-width: 800px) {
      font-size: 25px;
    }
  }

  .actionButtons {
    display: flex;
    justify-content:center;
    margin-top: 20px;
    color: #d977c8;
    font-size: 25px;
    gap: 10px;
    z-index: 5;
    cursor: pointer;
  }
`;

const StyledButtonAdd = styled.button`
  cursor: pointer;
  background-color: #fff35f;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: 0;
  position: absolute;
  right: 0;
  z-index: 3;
  width: 30%;
  @media (max-width: 600px) {
    width: 100%;
    font-size: 3vw;
    align-self: center;
  }
  @media (min-width: 601px) and (max-width: 800px) {
    width: 60%;
  }
  @media (min-width: 801px) and (max-width: 900px) {
    width: 40%;
  }
`;

const StyledText = styled.p`
  text-align: center;
`;



const CarruselIMG = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [autoplayActive, setAutoplayActive] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [isActionButtonClicked, setIsActionButtonClicked] = useState(false);
  const { isAuthenticated } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  const images = useExpImg();

  const settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    focusOnSelect: false,
    beforeChange: (current, next) => {
      if (!autoplayActive) {
        setSelectedImage(images[next]);
      }
    },
    afterChange: (current) => {
      if (!autoplayActive) {
        setSelectedImage(images[current]);
      }
    },
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false
        },
      },
    ],
  };

  const handleImageClick = (image) => {
    if (!isActionButtonClicked) {
      setSelectedImage(image);
    }
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsActionButtonClicked(false); // Restablece el estado después de cerrar el modal
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalEdit = (image) => {
    setShowModalEdit(true);
    setSelectedImage({ ...image, id: image.id });
  };

  const closeModalEdit = () => {
    setShowModalEdit(false);
    setSelectedImage(null); // Limpia la imagen seleccionada al cerrar el modal
  };

  function handleDeleteClick(id) {
    dispatch(actionDeleteImgs(id));
  }

  return (
    <>
      <CarouselContainer>
        {isAuthenticated ? (
          <>
            <div className="modalImgs">
              <StyledButtonAdd onClick={openModal}>
                <MdAddToPhotos className="iconAdd" />
                AÑADIR IMAGEN
              </StyledButtonAdd>
              <div className="modalImg">
                {showModal && <ImgForm onClose={closeModal} />}
              </div>
              <div className="modalImg">
                {showModalEdit && (
                  <EditForm
                    onClose={closeModalEdit}
                    initialData={selectedImage}
                  />
                )}
              </div>
            </div>
          </>
        ) : null}
        <CustomSlider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <div className="slick-slide-content">
                <img
                  src={image.poster}
                  alt={`${image.name}`}
                  onClick={() => handleImageClick(image)}
                />
              </div>
              <StyledText>{image.name}</StyledText>
              <StyledText>{image.author}</StyledText>
              {isAuthenticated ? (
                <>
                  <div className="actionButtons">
                    <AiFillDelete
                      alt="eliminar"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDeleteClick(image.id);
                        setIsActionButtonClicked(true);
                      }}
                    />
                    <FaEdit
                      onClick={(e) => {
                        e.stopPropagation();
                        openModalEdit(image);
                        setIsActionButtonClicked(true);
                      }}
                      alt="editar"
                    />
                  </div>
                </>
              ) : null}
            </div>
          ))}
        </CustomSlider>
      </CarouselContainer>
      {/* Modal de Previsualización */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            zIndex:3,
          }}
          onClick={handleCloseModal}
        >
          <img
            src={selectedImage.poster}
            alt={selectedImage.name}
            style={{ maxWidth: "90%", maxHeight: "90%" }}
          />
        </div>
      )}
    </>
  );
};

export default CarruselIMG;
