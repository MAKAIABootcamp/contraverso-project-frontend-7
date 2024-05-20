import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { db } from "../../../Firebase/firebaseConfig";

const CarouselContainer = styled.div`
  max-width: 60%;
  margin-bottom: 5%;
  position: relative;
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px;
  }

  .slick-slide img {
    height: auto;
    border-radius: 5%;
    max-width: 100%;
  }

  .slick-current img {
    transform: scale(1.1);
    padding: 1%;
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

  .slick-prev:before,
  .slick-next:before {
    display: inline-block;
    font-size: 40px;
    border-radius: 55%;
    transition: transform 0.3s ease;
    color: #E94430;
    
  }
  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: #E94430;
    transform: rotate(360deg);
    font-size: 45px;
  }
`;

const StyledDescription = styled.p`
font-family: "Filson Pro Book";
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    background-color: #1df0c22f;
    margin-top: 5%;
    margin-bottom: 5%;
    border-radius: 5%;
    padding: 3%;
`


const CarruselArticulos=() =>{
    const [articulos, setArticulos] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const fetchArticulos = async () => {
          const articulosCollection = collection(db, "confrontaArticulos");
          const articulosSnapshot = await getDocs(articulosCollection);
          const articulosList = articulosSnapshot.docs.map((doc) => doc.data());
          setArticulos(articulosList);
        };
    
        fetchArticulos();
      }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    focusOnSelect: true,
    initialSlide: 0,
    beforeChange: (next) => setCurrentIndex(next),

    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow:3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
  };
  const handleImageClick = (url) => {
    window.open(url, "_blank");
  };
  return (
    <CarouselContainer>
     <CustomSlider {...settings}>
        {articulos.map((articulo, index) => (
          <div key={index}>
            <div className="slick-slide-content">
              <img src={articulo.poster} alt={`Poster ${index + 1}`} />
              <StyledDescription>{articulo.description}</StyledDescription>
              <button  onClick={() => handleImageClick(articulo.url)}>SEGUIR LEYENDO</button>
            </div>
          </div>
        ))}
      </CustomSlider>
    </CarouselContainer>
  );
}

export default CarruselArticulos;
