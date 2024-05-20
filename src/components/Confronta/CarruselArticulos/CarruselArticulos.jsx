import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { db } from "../../../Firebase/firebaseConfig";

const CarouselContainer = styled.div`
  max-width: 60%;
  margin-bottom: 5%;
  position: relative;
  z-index: 3;
`;

const CustomSlider = styled(Slider)`
  .slick-slide {
    padding: 0 10px;
    @media (max-width: 800px) {
      padding: 0;
    }
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .slick-slide-content img {
    width: 100%;
    height: 100%;
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
    color: #e94430;
    @media (max-width: 800px) {
      font-size: 20px;
    }
  }

  .slick-prev:hover:before,
  .slick-next:hover:before {
    color: #e94430;
    transform: rotate(-180deg);
    font-size: 45px;
    @media (max-width: 800px) {
      font-size: 25px;
    }
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
  width: 100%;
  font-size: 15px;
  line-height: 1.5;
`;

const StyledButton = styled.button`
  cursor: pointer;
  background-color: #fff35f;
  color: #000000;
  padding: 0.5rem;
  font-family: "MADE Soulmaze";
  border: none;
  border-radius: 8px;
  text-decoration: none;
  text-align: center;
  width: 80%;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const CarruselArticulos = () => {
  const [articulos, setArticulos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchArticulos = async () => {
      try {
        const articulosCollection = collection(db, "confrontaArticulos");
        const articulosSnapshot = await getDocs(articulosCollection);
        const articulosList = articulosSnapshot.docs.map((doc) => doc.data());
        console.log("Articulos fetched: ", articulosList);
        setArticulos(articulosList);
      } catch (error) {
        console.error("Error fetching articulos: ", error);
      }
    };

    fetchArticulos();
  }, []);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    focusCenter: true,
    focusOnSelect: false,
    autoplaySpeed: 2000,
    initialSlide: 0,
    beforeChange: (next) => setCurrentIndex(next),
    responsive: [
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 400,
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
        {articulos.map((articulo, index) => (
          <div key={index}>
            <div className="slick-slide-content">
              <img src={articulo.poster} alt={`Poster ${index + 1}`} />
              <StyledDescription>{articulo.description}</StyledDescription>
              <StyledButton onClick={() => handleImageClick(articulo.url)}>
                SEGUIR LEYENDO
              </StyledButton>
            </div>
          </div>
        ))}
      </CustomSlider>
    </CarouselContainer>
  );
};

export default CarruselArticulos;
