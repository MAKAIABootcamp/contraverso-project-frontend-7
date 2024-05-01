import React from 'react';
import { Link } from 'react-router-dom';
import { factChecking, linksData } from './linksData';
import { FaStar, FaRegStar } from 'react-icons/fa'; // Importa el icono de estrellas

const Recomienda = () => {
    const renderStars = (stars) => {
        const fullStars = Math.floor(stars);
        const halfStar = stars >= 4.5;
        return Array.from({ length: fullStars + (halfStar? 1 : 0) }, (_, i) => i < fullStars? <FaStar key={i} /> : <FaRegStar key={i} />);
      };

  return (
    <div>
       {factChecking.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, i) => (
              <li key={i}>
                {item.name && <strong>{item.name}:</strong>}
                {item.items && item.items.map((subItem, subIndex) => (
                  <div key={subIndex}>
                    <Link to={subItem.url} target="_blank" rel="noopener noreferrer">
                      {subItem.name}
                    </Link>
                    {subItem.stars && renderStars(Number(subItem.stars.slice(1, -1)))}
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      ))}
      
      {linksData.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.items.map((item, i) => (
              <li key={i}>
                {item.description? (
                  <div>
                    <Link to={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </Link>
                    <p>{item.description}</p>
                    {item.stars && renderStars(Number(item.stars.slice(1, -1)))}
                  </div>
                ) : (
                    <div>
                  <Link to={item.url} target="_blank" rel="noopener noreferrer">
                    {item.name}
                  </Link>
                  {item.stars && renderStars(Number(item.stars.slice(1, -1)))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Recomienda;
