import React from 'react';
import Glider from '@glidejs/react';

const CarruselExpresa = () => {
  return (
    <Glider className="glider-container my-carrusel" draggable hasDots slidesToShow={1} scrollLock>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
        (numero) => (
          <div key={numero}>
            <span>{numero}</span>
          </div>
        )
      )}
    </Glider>
  );
};

export default CarruselExpresa;
