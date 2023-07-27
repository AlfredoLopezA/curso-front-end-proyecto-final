/* 
╔══════════════════════════════════════════════════╗
║                Curso Front-End                   ║
║                Proyecto  Final                   ║
╠══════════════════════════════════════════════════╣
║ Alumno: Alfredo López Allende                    ║
║ RUT   : XX.XXX.XXX-3                             ║
║ Fecha Entrega: 26 de julio de 2023               ║
╚══════════════════════════════════════════════════╝
*/

import React, { useState, useEffect } from 'react';
import '../css/styles.css';

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = ['planta1.png', 'planta2.png', 'planta3.png', 'planta4.png', 'planta5.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider">
      <img src={`./src/image/${images[currentIndex]}`} alt={`Slide ${currentIndex + 1}`} />
      <div className="slider-buttons">
        <button onClick={prevSlide}>&lt;</button>
        <button onClick={nextSlide}>&gt;</button>
      </div>
    </div>
  );
};

export default Slider;
