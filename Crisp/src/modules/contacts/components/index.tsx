import React from "react";
import ContactBackground from "../../../assets/contact/background.jpeg";
import "./styles.scss";

type ContactProps = {
    contactId?: string
}

const Contacts: React.FC<ContactProps> = () => {
    return (
    <div className="contact">
        <div className="contact__overlay-wrapper">
            <div className="contact__sidebar-container"></div>
            <img className="contact__background" src={ContactBackground} alt="contact us background"/>
        </div>
    </div>
    )
}

export default Contacts;