import { ISlideControlProps } from "../../types/ISlideControlProps";
import styles from "./SlideControlButtons.module.scss";

const SlideControlButtons: React.FC<ISlideControlProps> = ({
  goToPrevSlide,
  goToNextSlide,
}) => {
  return (
    <div className={styles.btn__container}>
      <button
        type="button"
        aria-label="Click to prev slide"
        className={styles.btn}
        onClick={goToPrevSlide}
      >
        Prev
      </button>
      <button
        type="button"
        aria-label="Click to next slide"
        className={styles.btn}
        onClick={goToNextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default SlideControlButtons;
