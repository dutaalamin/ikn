import React from 'react';
import './App.css';
import HeroSlider from './components/HeroSlider';
import SocialMediaLinks from './components/SocialMediaLinks';
import logo from './assets/logo.png';
import Navbar from './components/Navbar';

const App = () => {
  // Navbar mengelola state-nya sendiri

  return (
    <div className="app">
      <Navbar />

      <section id="home">
        <HeroSlider />
      </section>

      <section id="about" className="about-section">
        <div className="container">
          <h2>About Us</h2>
          <p>INSAN KONSTRUKSI NUSANTARA is a leading general contractor company committed to delivering excellence in construction services. With years of experience in the industry, we specialize in bringing architectural visions to life through precise execution and quality workmanship.</p>
          <div className="company-values">
            <div className="value-card">
              <h3>Vision</h3>
              <p>To become the most trusted and innovative construction company in Indonesia.</p>
            </div>
            <div className="value-card">
              <h3>Mission</h3>
              <p>Delivering high-quality construction projects through professional expertise, innovation, and commitment to excellence.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Building Construction</h3>
              <p>Commercial and residential building construction with modern techniques and quality materials.</p>
            </div>
            <div className="service-card">
              <h3>Infrastructure Development</h3>
              <p>Roads, bridges, and infrastructure projects with focus on durability and efficiency.</p>
            </div>
            <div className="service-card">
              <h3>Project Management</h3>
              <p>Comprehensive project management services from planning to execution.</p>
            </div>
            <div className="service-card">
              <h3>Renovation</h3>
              <p>Building renovation and restoration services with attention to detail.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="project-grid">
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                   alt="Commercial Building Project" />
              <div className="project-info">
                <h3>Commercial Building</h3>
                <p>Modern office complex with sustainable features</p>
              </div>
            </div>
            <div className="project-card">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                   alt="Residential Complex Project" />
              <div className="project-info">
                <h3>Residential Complex</h3>
                <p>High-end residential development project</p>
              </div>
            </div>
            <div className="project-card">
              <img src="https://singhania.in/admin/blogimages/694876.jpeg" 
                   alt="Infrastructure Project" />
              <div className="project-info">
                <h3>Infrastructure Project</h3>
                <p>Major road and bridge construction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Contact Us</h2>
          <div className="contact-info">
            <div className="contact-form">
              <form>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-left">
              <div className="contact-details">
                <h3>Contact Us</h3>
                <p>📍 Jakarta, Indonesia</p>
                <p>📞 +62 21 1234 5678</p>
                <p>📧 info@insankonstruksinusantara.com</p>
              </div>
              <div className="footer-services">
                <h3>Our Services</h3>
                <ul>
                  <li>Building Construction</li>
                  <li>Infrastructure Development</li>
                  <li>Project Management</li>
                  <li>Renovation</li>
                </ul>
              </div>
            </div>
            <div className="footer-right">
              <div className="footer-brand">
                <a href="#home" className="footer-logo">
                  <img src={logo} alt="INSAN KONSTRUKSI NUSANTARA" className="footer-logo-image" />
                </a>
                <SocialMediaLinks />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
