import React from "react";
import "./Footer.css";
import Logo from "./images/Robot.svg";

import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__section footer__logo-section">
          <img src={Logo} alt="Logo" className="footer__logo" />
          <p className="footer__logo-text">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <p className="footer__info-email">Company@gmail.com</p>
          <p className="footer__info-phone">Phone: (064) 332-1233</p>
          <p className="footer__info-address">450 Wall Street, USA, New York</p>
        </div>
        <div className="footer__section footer__info-section">
          <h4 className="footer__title">INFORMATION</h4>
          <ul className="footer__list">
            <li className="footer__list-item">New Collection</li>
            <li className="footer__list-item">About Store</li>
            <li className="footer__list-item">Contact Us</li>
            <li className="footer__list-item">Latest News</li>
            <li className="footer__list-item">Our Sitemap</li>
            <li className="footer__list-item">Orders History</li>
          </ul>
        </div>
        <div className="footer__section footer__menu-section">
          <h4 className="footer__title">FOOTER MENU</h4>
          <ul className="footer__list">
            <li className="footer__list-item">Instagram profile</li>
            <li className="footer__list-item">New Collection</li>
            <li className="footer__list-item">Contact Us</li>
            <li className="footer__list-item">Latest News</li>
            <li className="footer__list-item">Terms & Conditions</li>
            <li className="footer__list-item">Purchase Theme</li>
          </ul>
        </div>
        <div className="footer__section footer__links-section">
          <h4 className="footer__title">USEFUL LINKS</h4>
          <ul className="footer__list">
            <li className="footer__list-item">Instagram profile</li>
            <li className="footer__list-item">New Collection</li>
            <li className="footer__list-item">Contact Us</li>
            <li className="footer__list-item">Latest News</li>
            <li className="footer__list-item">Terms & Conditions</li>
            <li className="footer__list-item">Purchase Theme</li>
          </ul>
        </div>
        <div className="footer__section footer__about-section">
          <h4 className="footer__title">ABOUT THE STORE</h4>
          <p className="footer__about-text">
            Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.
          </p>
          <p className="footer__website">www.company.com</p>
          <div className="footer__socials">
            <a href="#" className="footer__social-icon"><FaFacebookF /></a>
            <a href="#" className="footer__social-icon"><FaInstagram /></a>
            <a href="#" className="footer__social-icon"><FaTwitter /></a>
            <a href="#" className="footer__social-icon"><FaLinkedinIn /></a>
            <a href="#" className="footer__social-icon"><FaYoutube /></a>
          </div>
          <p className="footer__language">English ▼</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
