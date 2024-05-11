import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useFactChecking, mediosCO, mediosND } from './linksData';
import styled from 'styled-components';

const StyledReco = styled.div`
background-image: url("https://res.cloudinary.com/dvafjaqbd/image/upload/v1714336854/MONTAJE/CHEQUEA/12_x1mjvc.png");
`

const Recomienda = () => {
  const renderStars = (stars) => {
    const fullStars = Math.floor(stars);
    const halfStar = stars >= 4.5;
    return Array.from({ length: fullStars + (halfStar ? 1 : 0) }, (_, i) => i < fullStars ? <FaStar key={i} /> : <FaRegStar key={i} />);
  };

  const factCheckingData = useFactChecking();
  const mediosCOData = mediosCO();
  const mediosNDData = mediosND();

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
    <div>
      {Object.entries(groupedDataByCategoryAndCountry).map(([category, countries], index) => (
        <div key={index}>
          <h1>{category}</h1>
          <ul>
            {Object.entries(countries).map(([country, items], index) => (
              <div key={index}>
                <h2>{country}</h2>
                <ul>
                  {items.map((item, i) => (
                    <li key={i}>
                      <Link to={item.url} target="_blank" rel="noopener noreferrer">
                        {item.name}
                      </Link>
                      {item.stars && renderStars(Number(item.stars.slice(1, -1)))}
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
          <h1>{category}</h1>
          <ul>
            {items.map((item, i) => (
              <li key={i}>
                <Link to={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </Link>
                {item.stars && renderStars(Number(item.stars.slice(1, -1)))}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {Object.entries(groupedMediosNDData).map(([category, items], index) => (
        <div key={index}>
          <h1>{category}</h1>
          <ul>
            {items.map((item, i) => (
              <li key={i}>
                <Link to={item.url} target="_blank" rel="noopener noreferrer">
                  {item.name}
                </Link>
                {item.stars && renderStars(Number(item.stars.slice(1, -1)))}
                <strong>{item.description}</strong>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
    </StyledReco>
  );
};

export default Recomienda;
