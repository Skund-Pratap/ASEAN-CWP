import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight, faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './carousel.css';
import carouselData from './carouseldata';

const jsonData = carouselData;

export default function CarouselComponent(props) {
  const carousel = jsonData[":items"]["carousel"];
  const items = jsonData[":items"]["carousel"][":items"];

  const renderCarouselItems = () => {
    const handleImageLoad = (event) => {
      event.target.classList.add('loaded');
    };

    return Object.values(items).map((item, index) => (
      <div key={item.id} className="carousel-item">
        <div className="carousel-content">
          <div className="carousel-title">{item.title}</div>
          <div
            className="carousel-description"
            dangerouslySetInnerHTML={{ __html: item.description }}
          ></div>
          {item.actionsEnabled &&
            item.actions &&
            item.actions.map((action) => (
              <div className="button-container">
                <button
                  key={action.id}
                  onClick={() => (window.location.href = action.url)}
                  className={`carousel-button ${action.className}`}
                >
                  {action.title}
                </button>
              </div>
            ))}
          <div className="dot-container">
            {[...Array(4)].map((_, dotIndex) => (
              <div
                key={dotIndex}
                className={`dot ${dotIndex === 0 ? 'active' : 'circle'}`}
              ></div>
            ))}
          </div>
        </div>
        <div className="carousel-image-container">
          <img
            src={`http://localhost:4502/${item.imagePath}`}
            alt={item.title}
            onLoad={handleImageLoad}
            className="carousel-image"
          />
          <div className="carousel-navigation">
            <button className="carousel-navigation-button" onClick={goToPrevSlide}>
              <FontAwesomeIcon
                icon={faCircleArrowLeft}
                className="carousel-navigation-icon"
              />
            </button>
            <button className="carousel-navigation-button" onClick={goToNextSlide}>
              <FontAwesomeIcon
                icon={faCircleArrowRight}
                className="carousel-navigation-icon"
                style={{color:"grey"}}
              />
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: carousel.autoplay,
    autoplaySpeed: carousel.delay,
  };

  const sliderRef = React.useRef(null);

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  return (
    <div className="carousel">
      <Slider {...carouselSettings} ref={sliderRef}>
        {renderCarouselItems()}
      </Slider>
    </div>
  );
}