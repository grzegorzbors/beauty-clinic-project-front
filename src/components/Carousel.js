import carousel from "../styles/carousel";
import carouselItems from "../assets/carousel-slides/carouselItemsData";
import { useState } from "react";

import ForwardIcon from "@material-ui/icons/Forward";

const carouselItemsCount = carouselItems.length - 1;

const Carousel = () => {
  const carouselStyles = carousel();
  const [currentSlide, setCurrentSlide] = useState(0);

  const showNextSlide = () => {
    if (currentSlide < 2) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  const showPreviousSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(carouselItemsCount);
    }
  };

  return (
    <div className={carouselStyles.carousel}>
      <div
        className={carouselStyles.carouselInner}
        style={{ backgroundImage: `url(${carouselItems[currentSlide].img})` }}
      >
        <div className={carouselStyles.arrowContainer}>
          <ForwardIcon
            className={`${carouselStyles.arrowIcon} ${carouselStyles.backArrow}`}
            style={{ fontSize: "5rem" }}
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
            style={{ fontSize: "5rem" }}
            onClick={showNextSlide}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
