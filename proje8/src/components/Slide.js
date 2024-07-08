import { useState } from "react";

const Slide = ({ logement }) => {
  const pictures = logement.pictures;
  
  
  const [currentIndex, setCurrentIndex] = useState(0);
  // j'utilise userState pour manipiler les elements dans mon tableau//
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? pictures.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === pictures.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <div className="loge-img">
        <div className="logement-arrow">
          <button onClick={prevSlide}>
            <i className="fa-solid fa-chevron-up"></i>
          </button>

          <button onClick={nextSlide}>
            <i className="fa-solid fa-chevron-right chevron-droite"></i>
          </button>
        </div>
        {pictures && pictures.length > 0 && (
          <img
            src={pictures[currentIndex]}
            alt={`Slide ${currentIndex}`}
            key={currentIndex}
          />
        )}
      </div>
    </div>
  );
};

export default Slide;
