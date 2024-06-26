import { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Slider from "react-slick";
import styled from "styled-components";
import { actionGetValora } from "../../../app/valora/valoraActions";

const CarouselContainer = styled.div`
  max-width: 55%;
  margin-bottom: 5%;
  position: relative;
  z-index: 3;
  padding-top: 5%;
  @media (max-width: 975px) {
    width:50%;
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
    height: auto;
    border-radius: 5%;
    max-width: 100%;
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

  .actionButtons {
    display: flex;
    margin-top: 20px;
    color: #e94430;
    font-size: 25px;
    gap: 10px;
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


const CarruselValora = () => {
  const dispatch = useDispatch();
  const valora = useSelector((store) => store.valora.valora);

  useEffect(() => {
    dispatch(actionGetValora());
  }, [dispatch]);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: false,
    autoplaySpeed: 2000,
    initialSlide: 0,
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
        {valora.map((valora, index) => (
          <div key={index}>
            <div className="slick-slide-content">
              <img src={valora.poster} alt={`Poster ${index + 1}`} />
              <StyledDescription>{valora.description}</StyledDescription>
              <StyledButton onClick={() => handleImageClick(valora.url)}>
                SEGUIR LEYENDO
              </StyledButton>
            </div>
          </div>
        ))}
      </CustomSlider>
    </CarouselContainer>
  );
};

export default CarruselValora;
