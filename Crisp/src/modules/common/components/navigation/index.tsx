import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Navigation: React.FC = () => {
    return (
        <nav className="navigation">
            <div className="navigation__logo">
                <h1 className="navigation__title">CRISP</h1>
            </div>
            <div className="navigation__links">
                <ul>
                    <li className="navigation__link"><Link to="/">Home</Link></li>
                    <li className="navigation__link"><Link to="/contacts">Contact</Link></li>
                    <li className="navigation__link"><Link to="/dashboard">Dashboard</Link></li>
                    <li className="navigation__link"><Link to="/help">help</Link></li>
                </ul>
            </div>
            <div className="navigation__login">
                <Link to="/help" className="navigation__login">help</Link>
            </div>
        </nav>
    )
}

export default Navigation;