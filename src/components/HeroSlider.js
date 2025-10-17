import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from '../assets/hero.png';

const HeroSlider = () => {
  const sliderRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    fade: false,
    arrows: false,
  };

  const slides = [
    {
      image: heroImage,
      title: 'INSAN KONSTRUKSI NUSANTARA',
      subtitle: 'Memimpin Inovasi, Membangun Masa Depan'
    }
  ];

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="hero-slider">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <div className="slide-content" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: isMobile ? '80vh' : '100vh'
            }}>
              <div className="slide-overlay">
                {/* Hero Text */}
                <div className="hero-text">
                  <h1 className="hero-title">{slide.title}</h1>
                  <p className="hero-subtitle">{slide.subtitle}</p>
                </div>
                
                {/* About Button */}
                <div className="hero-actions">
                  <button className="about-button" onClick={scrollToAbout}>
                    Tentang Kami
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
