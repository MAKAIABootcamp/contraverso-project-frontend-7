import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../Firebase/firebaseConfig";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    margin-top: -2%;
  }
  @media (min-width: 1024px) and (min-height: 1111px) {
    width: 100%;
    padding-top: 5%;
  }

  @media (min-width: 111px) and (min-height: 1111px) {
    max-width: 100%;
    padding-top: 10%;
  }
  @media (min-width: 1111px) and (min-height: 1080px) {
    max-width: 60%;
  }
  @media (min-width: 2000px) and (max-height: 2133px) {
    max-width: 50%;
    padding-top: 0%;
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

const CarouselFanzines = () => {
  const [fanzines, setFanzines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchFanzines = async () => {
      const fanzinesCollection = collection(db, "fanzines");
      const fanzinesSnapshot = await getDocs(fanzinesCollection);
      const fanzinesList = fanzinesSnapshot.docs.map((doc) => doc.data());
      setFanzines(fanzinesList);
    };

    fetchFanzines();
  }, []);

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
          <div
            key={index}
            onClick={() => handleImageClick(fanzine.urlDocument)}
          >
            <div className="slick-slide-content">
              <img src={fanzine.poster} alt={`Poster ${index + 1}`} />
            </div>
          </div>
        ))}
      </CustomSlider>
    </CarouselContainer>
  );
};

export default CarouselFanzines;
