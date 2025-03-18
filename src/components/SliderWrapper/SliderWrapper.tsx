import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ISliderProp } from "../../types/ISliderProp";
import SlideControlButtons from "../SlideControlButtons";
import React from "react";
import styles from './SliderWrapper.module.scss';

const SliderWrapper: React.FC<ISliderProp> = ({ children }) => {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const totalSlides = React.Children.count(children);

  const goToNextSlide = () => sliderRef.current?.slickNext();
  const goToPrevSlide = () => sliderRef.current?.slickPrev();

  const updateSlidesToShow = () => {
    const width = window.innerWidth;
    setSlidesToShow(
      width < 767 ? 1 : width < 1280 ? 2 : 4
    );
  };

  useEffect(() => {
    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    lazyLoad: "progressive",
    draggable: true,
    speed: 500,
    cssEase: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    adaptiveHeight: true,
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider ref={sliderRef} {...settings}>
        {React.Children.map(children, (child) => (
          <div className={styles.slideWrapper}>{child}</div>
        ))}
      </Slider>
      
      <SlideControlButtons
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        slidesToShow={slidesToShow}
      />
    </div>
  );
};

export default SliderWrapper;