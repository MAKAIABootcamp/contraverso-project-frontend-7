import React from 'react';
import Glider from 'glider-js'; 
const CarouselExpresa = () => {
  const initializeGlider = () => {
    new Glider(document.querySelector('.glider-container'), {
      draggable: true,
      hasDots: true,
      slidesToShow: 1,
      scrollLock: true,
    });
  };

  React.useEffect(() => {
    initializeGlider();
  }, []);

  return (
    <div className="glider-container">
      <div>
        <span>1</span>
      </div>
    </div>
  );
};

export default CarouselExpresa;
