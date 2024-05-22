import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  actionDeleteFanzi,
  actionGetFanzines,
} from "../../../app/CarruselFanzines/fanzinesActions";
import { AiFillDelete } from "react-icons/ai";
import { AddFanzines } from "./AddFanzines";
import { EditFanzines } from "./EditFanzines";
import { MdAddToPhotos } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

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
    cursor: pointer;
  }

  .slick-current img {
    transform: scale(1.1);
    padding: 10%;
    height: 5rem;
    border-radius: 5%;
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

const StyledComponent = styled.div`
  text-align: center;

  .boton-añadir {
    background-color: #fff35f;
    border: none;
    border-radius: 2rem;
    height: 3rem;
    width: 10rem;
    font-size: 1em;
    font-family: "MADE Soulmaze";
    cursor: pointer;
    position: absolute;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 736px) {
      width: 42%;
      height: 2rem;
      margin-top: -13%;
      margin-left: 6rem;
    }

    @media (max-height: 1024px) and (min-width: 600px) {
      margin-top: -13%;
      margin-left: 7rem;
      width: 10rem;
    }

    @media (min-width: 111px) and (min-height: 1111px) {
      margin-top: -13%;
      margin-left: 14rem;
      width: 10rem;
    }

    @media (min-width: 1164px) and (max-height: 2133px) {
      margin-top: -7rem;
      margin-left: 35rem;
    }

    .MdAddToPhotos {
      font-size: 1.875rem;
      color: #dd77cc;
    }

    p {
      color: #161616;
      font-family: "MADE Soulmaze";
      font-size: 0.75rem;
    }
  }
`;

const EditButtons = styled.div`
display: flex;
    justify-content: space-between;
    width: 100%;
    position: absolute;
    top: -1px;
    left: 3px;
    padding: 0 10px;
    color: #fff35f;
    cursor: pointer;
    font-size: 2rem;
  

`;

const CarouselFanzines = () => {
  const dispatch = useDispatch();
  const fanzines = useSelector((state) => state.fanzines.fanzines);
  const [showModal, setShowModal] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const { isAuthenticated } = useSelector((store) => store.userAuth);
  const [selectedFanzine, setSelectedFanzine] = useState(null);

  useEffect(() => {
    dispatch(actionGetFanzines());
  }, [dispatch]);

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

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalEdit = (fanzine) => {
    setShowModalEdit(true);
    setSelectedFanzine({ ...fanzine, id: fanzine.id });
  };

  const closeModalEdit = () => {
    setShowModalEdit(false);
    setSelectedFanzine(null);
  };

  const handleDeleteClick = (id) => {
    dispatch(actionDeleteFanzi(id));
  };

  return (
    <CarouselContainer>
      <StyledComponent>
        {isAuthenticated ? (
          <>
            <div className="modalImgs">
              <button className="boton-añadir" onClick={openModal}>
                <MdAddToPhotos className="MdAddToPhotos" /> <p>AÑADIR IMAGEN</p>
              </button>
              <div className="modalImg">
                {showModal && <AddFanzines onClose={closeModal} />}
              </div>
              <div className="modalImg">
                {showModalEdit && (
                  <EditFanzines
                    onClose={closeModalEdit}
                    initialData={selectedFanzine}
                  />
                )}
              </div>
            </div>
          </>
        ) : null}
      </StyledComponent>

      <CustomSlider {...settings}>
        {fanzines.map((fanzine, index) => (
          <div key={index}>
            <div className="slick-slide-content">
              <a
                href={fanzine.urlDocument}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={fanzine.poster} alt={`Poster ${index + 1}`} />
              </a>
              {isAuthenticated ? (
                <EditButtons>
                  <FaEdit
                    className="boton-editar"
                    onClick={() => openModalEdit(fanzine)}
                  />

                  <AiFillDelete
                    className="boton-eliminar"
                    onClick={() => handleDeleteClick(fanzine.id)}
                  />
                </EditButtons>
              ) : null}
            </div>
          </div>
        ))}
      </CustomSlider>
    </CarouselContainer>
  );
};

export default CarouselFanzines;
