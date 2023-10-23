import React from "react";
import "./styles.scss";
import ContentPages from "./ContentPages";
import UserArea from "./UserArea";
import Logo from "./Logo";

const Navbar: React.FC = () => {

  return (
    <nav className='navigation'>
      <div className='navigation__container'>
        <Logo />
        <ContentPages />
        <UserArea />
      </div>
    </nav>
  );
};

export default Navbar;
