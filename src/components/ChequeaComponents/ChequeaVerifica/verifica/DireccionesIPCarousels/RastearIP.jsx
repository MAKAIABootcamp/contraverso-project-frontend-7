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

const RastearIP = () => {
  // Asegúrate de que los datos existan antes de intentar filtrarlos
  const data = useSelector((store) => store.filtersByButtons.data.rastrearIP);
  const loading = useSelector((store) => store.filtersByButtons.loading);
  const error = useSelector((store) => !!store.filtersByButtons.error);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const filteredData = data.length > 0? data : [];

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
            <ul>
              <li>
                <ContainerImg>
                  <div>
                    <img src="https://res.cloudinary.com/dvafjaqbd/image/upload/v1714584442/MONTAJE/BASE%20DE%20DATOS/CHEQUEA/VERIFICA/DIRECCIONES%20IP/3IpLogger_wrsok6.png" alt="IPplogger" />
                    <figcaption>
                      <h3>IPplogger</h3>
                      <p>Con IPLogger usted puede encontrar la dirección IP y la ubicación exacta de cualquier dispositivo móvil o PC, así como comprobar URL para redirecciones ocultas por razones de seguridad. Hay varias maneras de hacerlo: enlaces cortos, un píxel invisible, una herramienta única de geo-logger y el URL tracker.</p>
                    </figcaption>
                  </div>
                </ContainerImg>
                <ContainerButton>
                  <a href="https://iplogger.org/es/" target='_blank'><Button fondoColor={'#1DF4C8'}>Visitar</Button></a>
                </ContainerButton>
              </li>
            </ul>
    </SectionStyled>
  );
}

export default RastearIP;
