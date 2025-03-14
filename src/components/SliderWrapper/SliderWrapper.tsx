import { useRef } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ISliderProp } from '../../types/ISliderProp';

const SliderWrapper: React.FC<ISliderProp> = ({ children }) => {
  const sliderRef = useRef<InstanceType<typeof Slider> | null>(null);

  const goToNextSlide = () => {
    sliderRef.current?.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current?.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
    lazyLoad: 'progressive',
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider ref={sliderRef} {...settings}>
        {children}
      </Slider>

      <SlideControlButtons
        goToNextSlide={goToNextSlide}
        goToPrevSlide={goToPrevSlide}
      />
    </>
  );
};

export default SliderWrapper;