import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { MainRoutes, SubRoutes } from "../../../../routes";
import logo from "../../../../assets/logo-transparent-color.webp";

const Navigation: React.FC = () => {
  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        <Link to={MainRoutes.HOME}>
          <img className='navigation__logo' src={logo} alt="Crisp Logo"/>
        </Link>
        <div className='navigation__links-container'>
              <Link to={MainRoutes.HOME} className='navigation__link' >Home</Link>
              <Link to={SubRoutes.CONTACT} className='navigation__link' >{SubRoutes.CONTACT}</Link>
              <Link to={SubRoutes.ABOUT} className='navigation__link' >{SubRoutes.ABOUT}</Link>
              <Link to={SubRoutes.BLOG} className='navigation__link' >{SubRoutes.BLOG}</Link>
        </div>
        <div className='navigation__login'>
          <Link to={MainRoutes.LOGIN} className='navigation__login--link'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
