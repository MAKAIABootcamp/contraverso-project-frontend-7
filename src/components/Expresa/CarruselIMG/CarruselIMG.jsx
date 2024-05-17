import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "../../../../fonts/fonts.css";
import { useExpImg } from './Data';
import styled from 'styled-components';

const CustomSlider = styled.div`
  .slick-slide { // slide individual
    padding: 0 7vw;
    object-fit: cover;
    overflow: hidden; 
    height: 60vh;
  }

  .slick-slide img {
    height: auto;
    border-radius: 10px;
    max-width: 100%;
    object-fit: cover;
  }

  .slick-current img { //img center
    transform: scale(1.1);
    height: 5rem;
    border-radius: 10px;
    object-fit: contain;
  }

  .slick-slide-content { //container slice
    position: relative;
    overflow: hidden;
    object-fit: cover;
    padding: 10px;
    border-radius: 10px;
    width: 20vw;
    height: 30vw;
  }

  .slick-slide-content img { //img dentro de container
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
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

const CarruselIMG = () => {
    const images = useExpImg();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
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

    return (
        <> <CustomSlider>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <React.Fragment key={index}>
                        <div key={index} className="slick-slide-content">
                            <img src={image.poster} alt={`${image.name}`} />
                        </div>
                        <p>{image.name}</p>
                        <p>{image.author}</p>
                    </React.Fragment>
                ))}

            </Slider>
        </CustomSlider>
        </>
    );
};

export default CarruselIMG;
