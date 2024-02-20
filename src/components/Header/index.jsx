import React, { useState, useEffect } from 'react';
import images1 from '../../assets/img/Banner.png';
import images2 from '../../assets/img/enlaces.png';
import right from '../../assets/img/right.png'
import left from '../../assets/img/left.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    images1,
    images2,
    images1,
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="flex items-center justify-center h-screen ">
      <button className='relative left-10 transform -translate-y-1/2 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 active:bg-gray-500' onClick={prevSlide}><img className='size-8 ' src={left} alt="" /></button>
      <div className="slide w-3/4 h-[500px] bg-center bg-cover overflow-hidden shadow-2xl" style={{ backgroundImage: `url(${images[currentIndex]})` }}>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>
      <button className='relative right-10 transform -translate-y-1/2 rounded-full transition duration-300 ease-in-out hover:bg-gray-300 active:bg-gray-500' onClick={nextSlide}><img className='size-8' src={right} alt="" /></button>
    </div>
  );
};

export default Carousel;
