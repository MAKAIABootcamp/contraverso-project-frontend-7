import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';

const SectionStyled = styled.section`
  overflow: hidden;
  margin: 0 auto;
  @media (max-width: 816px) {
    width: 50vh;
  }
  @media (max-width: 512px) {
    width: 40vh;
  }
  @media (max-width: 421px) {
    width: 35vh;
  }
  .slick-prev, .slick-next {
    z-index: 1;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    &:before {
      display: none;
    }
  }
  .slick-prev {
    left: 1%;
    top: 37%;
  }
  .slick-next {
    right: 1%;
    top: 37%;
  }
  ul {
    display: flex;
    width: 90%;
    margin: 0 auto;
    @media(max-width: 1300px) {
      width: 70%;
    }
    @media(max-width: 816px) {
      width: 85%;
    }
    li {
      display: flex;
      justify-content: space-between;
      width: 100%;
      @media(max-width: 1035px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 6%;
      }
      @media(max-width: 816px) {
        padding-bottom: 8%;
      }
    }
  }
`;

const ContainerImg = styled.figure`
  width: 60%;
  height: 100%;
  padding: 1rem;
  @media(max-width: 1300px) {
    padding: .5rem;
  }
  @media(max-width: 1035px) {
    width: 100%;
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    img {
      object-fit: cover;
      width: 60vh;
      height: 30vh;
      border-radius: 29px;
      @media(max-width: 1300px) {
        width: 35vh;
        height: 20vh;
      }
      @media (max-width: 512px) {
        width: 28vh;
      }
      @media (max-width: 421px) {
        height: 25vh;
      }
    }
    figcaption {
      width: 56%;
      text-align: justify;
      font-size: 1.2rem;
      @media (max-width: 512px) {
        width: 100%;
      }
      h3 {
        text-transform: uppercase;
        font-size: 1.8rem;
        font-family: 'Founders Grotesk Regular';
        @media (max-width: 512px) {
          font-size: 1.3rem;
        }
      }
      p {
        font-family: 'Filson Pro Book';
        font-size: 1.3rem;
        @media (max-width: 512px) {
          font-size: .9rem;
        }
      }
    }
  }
`;

const ContainerButton = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3%;
  @media (max-width: 512px) {
    padding-bottom: 14%; 
  }
`;

const CarouselsCheck = ({ getData }) => {
    const loading = useSelector((store) => store.filtersByButtons.loading);
    const error = useSelector((store) => store.filtersByButtons.error);

    const [width, setWidth] = useState(14);
    useEffect(()=> {
      const handleButtonWidth = () => {
        const screenWidth = window.innerWidth;
  
        if (screenWidth < 1200) {
          setWidth(10);
        } else if (screenWidth > 1800) {
          setWidth(18);
        } else {
          setWidth(14);
        }
      };
  
      handleButtonWidth();
  
      window.addEventListener("resize", handleButtonWidth);
  
      return () => {
        window.removeEventListener("resize", handleButtonWidth);
      };
    }, []);

    if (loading) {
        return <div>Loading...</div>;
      }
      if (error) {
        return <div>Error: {error}</div>;
      }

    const NextArrow = ({ onClick }) => (
        <div className="slick-next" onClick={onClick}>
          <BiSolidRightArrow fill='#1DF4C8' size={30} />
        </div>
      );
    
      const PrevArrow = ({ onClick }) => (
        <div className="slick-prev" onClick={onClick}>
          <BiSolidLeftArrow fill='#1DF4C8' size={30} />
        </div>
      );

      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
  return (
    <SectionStyled>
    <Slider {...settings}>
      {getData.length > 0 ? (
        getData.map(item => (
          <div key={item.id}>
            <ul>
              <li>
                <ContainerImg>
                  <div>
                    <img src={item.poster} alt={item.description} />
                    <figcaption>
                      <h3>{item.webName}</h3>
                      <p>{item.description}</p>
                    </figcaption>
                  </div>
                </ContainerImg>
                <ContainerButton>
                  <a href={item.url} target='_blank'><Button fondoColor={'#1DF4C8'} width={width}>Visitar</Button></a>
                </ContainerButton>
              </li>
            </ul>
          </div>
        ))
      ) : (
        <div>No hay datos disponibles.</div>
      )}
    </Slider>
  </SectionStyled>
  );
}

export default CarouselsCheck;
