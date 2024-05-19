import { useSelector } from 'react-redux';
import Button from '../../../../Button/Button';
import Slider from 'react-slick';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

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

const BuscarIP = () => {
  const data = useSelector((store) => store.filtersByButtons.data.buscarIP);
  const loading = useSelector((store) => store.filtersByButtons.loading);
  const error = useSelector((store) => store.filtersByButtons.error);

  console.log('Data from Redux store:', data);
  console.log('Loading state:', loading);
  console.log('Error state:', error);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  const buscarIPData = data.filter(item => item.category === 'buscarIP');

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
        {buscarIPData.length > 0 ? (
          buscarIPData.map(item => (
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

export default BuscarIP;
