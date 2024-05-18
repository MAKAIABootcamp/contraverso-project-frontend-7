import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import Button from '../../../../Button/Button';

const SectionStyled = styled.section`
  overflow: hidden;
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
    position: relative;
    li {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`;

const ContainerImg = styled.figure`
  width: 60%;
  height: 100%;
  padding: 1rem;
  h2 {
    font-family: 'Founders Grotesk Bold';
    text-transform: uppercase;
    font-size: 2.1rem;
    padding-bottom: 1rem;
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
    }
    figcaption {
      width: 56%;
      text-align: justify;
      font-size: 1.2rem;
      h3 {
        text-transform: uppercase;
        font-size: 1.8rem;
        font-family: 'Founders Grotesk Regular';
      }
      p {
        font-family: 'Filson Pro Book';
        font-size: 1.3rem;
      }
    }
  }
`;

const ContainerButton = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10%;
`;

const BusquedaInversa = () => {
  const data = useSelector((store) => store.filtersByButtons.data.busquedaInversa);
  const loading = useSelector((store) => store.filtersByButtons.store);
  const error = useSelector((store) => !!store.filtersByButtons.store);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const busquedaInversaData = data.filter(item => item.category === 'busquedaInversa');

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
        {busquedaInversaData.length > 0 ? (
          busquedaInversaData.map(item => (
            <div key={item.id}>
              <ul>
                <li>
                  <ContainerImg>
                    <h2>Busqueda inversa de imágenes</h2>
                    <div>
                      <img src={item.poster} alt={item.description} />
                      <figcaption>
                        <h3>{item.webName}</h3>
                        <p>{item.description}</p>
                      </figcaption>
                    </div>
                  </ContainerImg>
                  <ContainerButton>
                    <a href={item.url} target='_blank'><Button fondoColor={'#1DF4C8'}>Visitar</Button></a>
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

export default BusquedaInversa;
