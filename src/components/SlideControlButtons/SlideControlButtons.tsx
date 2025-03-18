import { ISlideControlProps } from "../../types/ISlideControlProps";
import styles from "./SlideControlButtons.module.scss";

const SlideControlButtons: React.FC<ISlideControlProps> = ({
  goToPrevSlide,
  goToNextSlide,
  currentSlide,
  totalSlides,
  slidesToShow,
}) => {
  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide + slidesToShow >= totalSlides;

  return (
    <div className={styles.btn__container}>
      <button
        type="button"
        aria-label="Click to prev slide"
        className={`${styles.btn} ${isFirstSlide ? styles.disabled : ''}`}
        onClick={!isFirstSlide ? goToPrevSlide : undefined}
        disabled={isFirstSlide}
      >
        Prev
      </button>
      <button
        type="button"
        aria-label="Click to next slide"
        className={`${styles.btn} ${isLastSlide ? styles.disabled : ''}`}
        onClick={!isLastSlide ? goToNextSlide : undefined}
        disabled={isLastSlide}
      >
        Next
      </button>
    </div>
  );
};

export default SlideControlButtons;