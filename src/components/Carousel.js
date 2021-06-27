import carousel from "../styles/carousel";
import carouselItems from "../assets/carousel-slides/carouselItemsData";
import { useState } from "react";

import ForwardIcon from "@material-ui/icons/Forward";

const Carousel = () => {
  const carouselStyles = carousel();
  const [currentImage, setCurrentImage] = useState(0);

  return (
    <div className={carouselStyles.carousel}>
      <div
        className={carouselStyles.carouselInner}
        style={{ backgroundImage: `url(${carouselItems[currentImage].img})` }}
      >
        <div className={carouselStyles.arrowContainer}>
          <ForwardIcon
            className={`${carouselStyles.arrowIcon} ${carouselStyles.backArrow}`}
            style={{ fontSize: "5rem" }}
          />
        </div>
        <div className={carouselStyles.centerContainer}>TEST TEXT</div>
        <div className={carouselStyles.arrowContainer}>
          <ForwardIcon
            className={carouselStyles.arrowIcon}
            style={{ fontSize: "5rem" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
