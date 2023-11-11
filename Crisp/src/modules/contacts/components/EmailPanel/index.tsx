import React from "react";
import "./styles.scss";
import ProfilePicture from "../../../common/components/ProfilePicture";
import FallBackDevImage from "../../../../assets/contact/fallback-dev-circular.jpg";
import ContactForm from "../ContactForm";


const EmailPanel: React.FC = () => {
    return (
        <div className="email-panel">
            <div className="email-panel__image">
                <ProfilePicture size="medium" alt="developer picture" image={FallBackDevImage} />
            </div>
            <div className="email-panel__content">
                <h2>Give Feedback</h2>
                <ContactForm />
            </div>
        </div>
    )
}

export default EmailPanel;