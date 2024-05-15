import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import { useFactChecking, mediosCO, mediosND } from './linksData';
import styled from 'styled-components';
import '../../../../fonts/fonts.css';
import { motion } from 'framer-motion';

const StyledReco = styled.div`
background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1715721646/MONTAJE/CHEQUEA/12_x1mjvc_6cbb27.png");
height: 95vh;
scroll-snap-align:start;
overflow-y: scroll;


&::-webkit-scrollbar {
    width: 20px; /* Ancho de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFF35F; /* Color del botón de la barra de desplazamiento */
    border-radius: 50px; /* Radio de borde del botón de la barra de desplazamiento */
  }

  &::-webkit-scrollbar-track {
    background-color: #161616; /* Color de fondo de la barra de desplazamiento */
    border-radius: 50px; /* Radio de borde de la barra de desplazamiento */
    
}
`
const StyledTitle = styled.h1`
  margin: 3vw;
  padding-left: 2vw;
  margin-top: 5vh;

  .titleReco {
    font-size: 8vw;
    font-family: "MADE Soulmaze Brush";
    color: #fff35f;
  }
  .category {
    font-family: "MADE Soulmaze Outline";
    font-size: 3.5vw;
    font-style: italic;
    color: #f1f1d8;
    margin: 2vw;
  }
  .country {
    font-family: "Founders Grotesk Bold";
    font-size: 3.5vw;
    color: #f1f1d8;
    margin: 3vw;
  }
  ul {
    li {
      margin: 3vw;
      list-style-type: none;

      .aside {
        display: flex;
        justify-content: space-between;
      }

      hr {
        background-color: #000; /* Color del borde */
        height: 0.1px; /* Altura muy baja para simular un grosor fino */
        width: 80vw;
      }

      .no-link-decoration {
        text-decoration: none;
      }
      h4:hover {
        color: #fff35f;
      }

      h4 {
        font-family: "Filson Pro Book";
        color: #f1f1d8;
        font-size: 2vw;
      }

      p {
        margin-right: 2vw;
        margin-bottom: 2vw;
        width: 40vw;
        justify-content: flex-end;
        font-family: "Filson Pro Light";
        font-style: light;
        color: #f1f1d8;
        font-size: 1.5vw;
      }

      .stars {
        display:flex;
        margin-right: 3vw;
        margin-bottom: 2vw;
        gap: 1vw;
      }

      .starsNA {
        margin-top: 1vh;
        display:flex;
        gap: 1vw;
      }

      .styleStar{
        color: #1df4c8;
        width: 3vw;
      }
      .styleStar:hover{
        color: #fff35f;
      }
    
    }
  }
`;

const Recomienda = () => {
  const renderStars = (stars) => {
    // Calculamos cuántas estrellas completas y medias se deben mostrar
    let fullStarsCount = Math.floor(stars);
    let halfStarCount = stars >= 4.5? 1 : 0;
  
    // Creamos un array para almacenar los elementos JSX de las estrellas
    const starElements = [];
  
    // Agregamos las estrellas completas al array
    for (let i = 0; i < fullStarsCount; i++) {
      starElements.push(
        <motion.div
          key={i}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
        >
          <FaStar className="styleStar" />
        </motion.div>
      );
    }
  
    if (halfStarCount > 0) {
      starElements.push(
        <motion.div
          key={`half-${fullStarsCount}`}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
        >
          <FaStarHalfAlt className="styleStar" />
        </motion.div>
      );
    }
    if (stars === 4) {
      starElements.push(
        <motion.div
          key={`empty-${fullStarsCount}`}
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{ scale: 0.8, rotate: -90, borderRadius: "100%" }}
        >
          <FaRegStar className="styleStar" />
        </motion.div>
      );
    }
  
    // Devolvemos el array de elementos JSX de las estrellas
    return starElements;
  };
  

  const factCheckingData = useFactChecking();
  const mediosCOData = mediosCO();
  const mediosNDData = mediosND();

  // Función para convertir el primer carácter de cada palabra a mayúscula y el resto a minúscula
function capitalizeFirstLetterOfEachWord(text) {
  let modifiedText = text.replace(/\((.*?)\)/g, '( $1 )');
  return modifiedText.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

  
  // Agrupar los datos por category
  const groupedDataByCategory = factCheckingData.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  // Agrupar los datos por country dentro de cada category
  const groupedDataByCategoryAndCountry = Object.entries(groupedDataByCategory).reduce((acc, [category, items]) => {
    items.forEach(item => {
      const key = item.country;
      if (!acc[category]) {
        acc[category] = {};
      }
      if (!acc[category][key]) {
        acc[category][key] = [];
      }
      acc[category][key].push(item);
    });
    return acc;
  }, {});

  const groupedMediosCOData = mediosCOData.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  const groupedMediosNDData = mediosNDData.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(item);
    return acc;
  }, {});

  return (
    <StyledReco >
      <StyledTitle>
      <h1 className='titleReco'>Recomienda</h1>
    <div>
      {Object.entries(groupedDataByCategoryAndCountry).map(([category, countries], index) => (
        <div key={index}>
          <h1 className='category'>{category}</h1>
          <ul>
            {Object.entries(countries).map(([country, items], index) => (
              <div key={index}>
                <h2 className='country'>{capitalizeFirstLetterOfEachWord(country)}</h2>
                <ul>
                  {items.map((item, i) => (
                    <li key={i}>
                      <div className='aside'>
                      <Link to={item.url} target="_blank" rel="noopener noreferrer" className="no-link-decoration">
                        <h4>{capitalizeFirstLetterOfEachWord(item.name)} </h4>
                      </Link>
                      <div className='stars'>{item.stars && renderStars(Number(item.stars.slice(1, -1)))}</div>
                      </div>
                      <hr />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ul>
        </div>
      ))}

      {Object.entries(groupedMediosCOData).map(([category, items], index) => (
        <div key={index}>
          <h1 className='category'>{category}</h1>
          <ul>
            {items.map((item, i) => (
              <li key={i}>
                <div className='aside'>
                <Link to={item.url} target="_blank" rel="noopener noreferrer" className="no-link-decoration">
                <h4>{capitalizeFirstLetterOfEachWord(item.name)} </h4>
                </Link>
                <div className='stars'>{item.stars && renderStars(Number(item.stars.slice(1, -1)))}</div>
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      ))}

      {Object.entries(groupedMediosNDData).map(([category, items], index) => (
        <div key={index}>
          <h1 className='category'>{category}</h1>
          <ul>
            {items.map((item, i) => (
              <li key={i}>
                <div className='aside'>
                  <div>
                <Link to={item.url} target="_blank" rel="noopener noreferrer" className="no-link-decoration">
                <h4>{capitalizeFirstLetterOfEachWord(item.name)} </h4>
                </Link>
                <div className='starsNA'>{item.stars && renderStars(Number(item.stars.slice(1, -1)))}</div>
                </div>
                <p>{item.description}</p>                
                </div>
                <hr />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </StyledTitle>
    </StyledReco>
  );
};

export default Recomienda;
