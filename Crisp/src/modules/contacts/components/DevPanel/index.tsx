import React from "react";
import "./styles.scss";
import ProfilePicture from "../../../common/components/ProfilePicture";
import FallBackDevImage from "../../../../assets/contact/fallback-dev-circular.jpg";
import ExternalLinkButton from "../../../common/components/ExternalLinkButton";


const DevPanel: React.FC = () => {
    return (
        <div className="dev-panel">
            <div className="dev-panel__image">
                <ProfilePicture size="medium" alt="developer picture" image={FallBackDevImage} />
            </div>
            <div className="dev-panel__content">
                <h2>Charles Cairney</h2>
                <p>
                With two years in React and TypeScript, I excel in dynamic UIs and seamless full-stack integration.
                Proficient in Node.js and Java for robust backends, I leverage AWS for scalable infrastructure, handling deployment, hosting, and databases adeptly.
                My commitment to staying current ensures cutting-edge solutions for modern web development.
                </p>
            </div>
            <div className="dev-panel__link">
                <ExternalLinkButton label="Linkedin" alt="Link to linkedin" link="https://www.linkedin.com/in/charlescairney/" size="medium" />
            </div>
        </div>
    )
}

export default DevPanel;