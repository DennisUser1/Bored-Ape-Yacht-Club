export interface ISlideControlProps {
    goToNextSlide: () => void;
    goToPrevSlide: () => void;
    currentSlide: number;
    totalSlides: number;
    slidesToShow: number;
}