import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentImageIndex]} alt="Carousel Image" />
      <button onClick={nextImage}>Next</button>
    </div>
  );
};

export default Carousel;
