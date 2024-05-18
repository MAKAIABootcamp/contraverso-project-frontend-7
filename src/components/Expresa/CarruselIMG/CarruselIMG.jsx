import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../../fonts/fonts.css";
import { useExpImg } from './Data';
import styled from 'styled-components';

const CustomSlider = styled.div`

.containerCarrusel{
  height: auto;
  width: 90%;
  margin-left: 60px;
  margin-top: 230px;
  position: relative;
  @media(max-width: 900px) {
    width: 80%;
  }

  p{
    margin: 1vh;
    color: #161616;
    font-family: "Filson Pro Book";
    font-size: 12px;
  }
} 

.slick-slide-content { //container slice
    position: relative;
    object-fit: cover;
    padding: 10px;
    border-radius: 10px;
    overflow: hidden;
    height: 35vh;
  }
 
  .slick-slide { // slide individual
    padding: 0 4vw;
  }
  .slick-slide img {
    height: auto;
    border-radius: 10px;
    max-width: 100%;
  }

  .slick-current img { //img center
    transform: scale(1.1);
    border-radius: 5%;
  }

  .slick-slide-content img { //img dentro de container
    width: auto;
    height: 100%;
    object-fit: cover;
  }

  .slick-dots li button:before {
    color: #9500ff;
  }

  .slick-dots li.slick-active button:before {
    color:  #1df4c8;
  }

  .slick-next:before, .slick-prev:before {
    font-family: 'slick';
    font-size: 20px;
    line-height: 1;
    opacity: .75;
    color: #1df4c8;
}

`;

const CarruselIMG = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [autoplayActive, setAutoplayActive] = useState(true);
  const images = useExpImg(); 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
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
              dots: true
          }
      },
      {
          breakpoint: 600,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 0,
              infinite: true,
              dots: true
          }
      },
      {
          breakpoint: 480,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1
          }
      }
  ]
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <CustomSlider>
        <Slider {...settings} className="containerCarrusel">
          {images.map((image, index) => (
            <div key={index} onClick={() => handleImageClick(image)}>
              <div className="slick-slide-content">
                <img src={image.poster} alt={`${image.name}`} />
              </div>
              <p>{image.name}</p>
              <p>{image.author}</p>
            </div>
          ))}
        </Slider>
      </CustomSlider>

      {/* Modal de Previsualización */}
      {selectedImage && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.7)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={handleCloseModal}
        >
          <img src={selectedImage.poster} alt={selectedImage.name} style={{ maxWidth: '90%', maxHeight: '90%' }} />
        </div>
      )}
    </>
  );
};

export default CarruselIMG;


