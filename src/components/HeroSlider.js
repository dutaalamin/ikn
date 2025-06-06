import React, { useRef, useEffect, useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    arrows: true,
    prevArrow: <button className="nav-button prev-button"><span className="arrow-icon">&lt;</span></button>,
    nextArrow: <button className="nav-button next-button"><span className="arrow-icon">&gt;</span></button>,
  };

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1920',
      title: 'Unlocking the full potential',
      subtitle: 'A diversified and integrated energy company leading long-term value creation'
    },
    {
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1920',
      title: 'Sustainability at Our Core',
      subtitle: 'ESG is in our DNA, embedding sustainability into our business and culture'
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1920',
      title: 'Innovation & Excellence',
      subtitle: 'Operating at a higher standard to inspire Impact Beyond Returns'
    }
  ];

  return (
    <div className="hero-slider">
      <Slider ref={sliderRef} {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide-item">
            <div className="slide-content" style={{ 
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              height: isMobile ? '80vh' : '100vh'
            }}>
              <div className="slide-overlay">
                <div className="slide-text">
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <button className="nav-button prev-button" onClick={() => sliderRef?.current?.slickPrev()}>
        <span className="arrow-icon">&lt;</span>
      </button>
      <button className="nav-button next-button" onClick={() => sliderRef?.current?.slickNext()}>
        <span className="arrow-icon">&gt;</span>
      </button>
    </div>
  );
};

export default HeroSlider;