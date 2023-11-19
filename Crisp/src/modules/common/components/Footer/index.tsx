import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { MainRoutes, SubRoutes } from "../../../../routes";
import logo from "../../../../assets/logo-transparent-color.webp";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer: React.FC = () => {
    const socialMediaHandler = (socialMedia: string) => {
        window.open(`${socialMedia}`, "_blank");
    }
    

  return (
    <footer className="footer">
      <section className="footer__social-media">
        <FaFacebook className="footer__social-media-icon" onClick={() => (socialMediaHandler("https://facebook.com"))} />
        <FaInstagram className="footer__social-media-icon" onClick={() => (socialMediaHandler("https://instagram.com"))} />
        <FaTwitter className="footer__social-media-icon" onClick={() => (socialMediaHandler("https://twitter.com"))} />
        <FaLinkedin className="footer__social-media-icon" onClick={() => (socialMediaHandler("https://www.linkedin.com/in/charlescairney/"))} />
        <FaGithub className="footer__social-media-icon" onClick={() => (socialMediaHandler("https://github.com/CSCairney"))} />
      </section>
      <section className="footer__interaction">
        <div className="footer__responsive-pages">
            <Link to={MainRoutes.HOME} className='footer__pages-link' >Home</Link>
            <Link to={MainRoutes.LOGIN} className='footer__pages-link' >Login</Link>
        </div>
        <div className="footer__logo-container">
            <img src={logo} alt="Crisp Logo" className="footer__logo"/>
        </div>
        <div className="footer__contact-pages">
            <Link to={SubRoutes.PRODUCTS} className='footer__pages-link' >{SubRoutes.CONTACT}</Link>
            <Link to={SubRoutes.PRODUCTS} className='footer__pages-link' >{SubRoutes.ABOUT}</Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
