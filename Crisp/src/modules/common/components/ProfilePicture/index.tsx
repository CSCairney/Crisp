import React from "react";
import "./styles.scss";

type ProfilePictureProps = {
    image: string;
    alt: string;
    size: "small" | "medium" | "large" | "full";
}

const ProfilePicture:React.FC<ProfilePictureProps> = ({ image, alt, size }) => {
    return (
            <img src={image} alt={alt} className={`profile-picture--${size} box-shadow`} />
    )
}

export default ProfilePicture;