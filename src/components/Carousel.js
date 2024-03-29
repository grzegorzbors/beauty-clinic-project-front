import carousel from "../styles/carousel";
import carouselItems from "../assets/carousel-slides/carouselItemsData";
import { useCallback, useEffect, useState } from "react";

import ForwardIcon from "@material-ui/icons/Forward";

const carouselItemsCount = carouselItems.length - 1;

const Carousel = () => {
  const carouselStyles = carousel();
  const [currentSlide, setCurrentSlide] = useState(0);

  const showNextSlide = useCallback(() => {
    if (currentSlide < carouselItemsCount) {
      setCurrentSlide((currSlide) => currSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  }, [currentSlide]);

  const showPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(carouselItemsCount);
    }
  };

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      showNextSlide();
    }, 4000);

    return () => clearInterval(carouselInterval);
  }, [showNextSlide]);

  return (
    <div className={carouselStyles.carousel}>
      <div
        className={carouselStyles.carouselInner}
        style={{ backgroundImage: `url(${carouselItems[currentSlide].img})` }}
      >
        <div className={carouselStyles.arrowContainer}>
          <ForwardIcon
            className={`${carouselStyles.arrowIcon} ${carouselStyles.backArrow}`}
            onClick={showPreviousSlide}
          />
        </div>
        <div className={carouselStyles.centerContainer}>
          <h1 className={carouselStyles.carouselTitle}>
            {carouselItems[currentSlide].title}
          </h1>
        </div>
        <div className={carouselStyles.arrowContainer}>
          <ForwardIcon
            className={carouselStyles.arrowIcon}
            onClick={showNextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
