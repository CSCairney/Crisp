import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";
import { MainRoutes, SubRoutes } from "../../../../routes";

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                <h1 className="navigation__title">CRISP</h1>
            </div>
            <div className="navigation__links">
                <ul>
                    <li className="navigation__link"><Link to={MainRoutes.HOME}>Home</Link></li>
                    <li className="navigation__link"><Link to={SubRoutes.CONTACT}>{SubRoutes.CONTACT}</Link></li>
                    <li className="navigation__link"><Link to={SubRoutes.ABOUT}>{SubRoutes.ABOUT}</Link></li>
                    <li className="navigation__link"><Link to={SubRoutes.BLOG}>{SubRoutes.BLOG}</Link></li>
                </ul>
            </div>
            <div className="navigation__login">
                <Link to={MainRoutes.LOGIN} className="navigation__login">Login</Link>
            </div>
        </nav>
    )
}

export default Navigation;