import React from "react";
import "./styles.scss";
import ProfilePicture from "../../../common/components/ProfilePicture";
import FallBackDevImage from "../../../../assets/contact/fallback-dev-circular.jpg";


const DevPanel:React.FC = () => {
    return (
        <div className="dev-panel">
                <div className="dev-panel__image">
                    <ProfilePicture size="small" alt="developer picture" image={FallBackDevImage} />
                </div>
                <div className="dev-panel__content">content</div>
                <div className="dev-panel__link">link</div>
        </div>
    )
}

export default DevPanel;