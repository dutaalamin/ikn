import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const SocialMediaLinks = () => {
  return (
    <div className="social-media-links">
      <div className="social-icons-container">
        <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebook size={40} />
        </a>
        <a href="https://instagram.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram size={40} />
        </a>
        <a href="https://twitter.com" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          <FaTwitter size={40} />
        </a>
        <a href="https://wa.me/yourphonenumber" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
          <FaWhatsapp size={40} />
        </a>
      </div>
    </div>
  );
};

export default SocialMediaLinks;