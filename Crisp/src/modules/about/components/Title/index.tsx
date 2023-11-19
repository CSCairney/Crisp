import React from "react";
import "./styles.scss";

type TitleProps = {
    title: string;
    alt: string;
    content: string;
}

const Title:React.FC<TitleProps> = ({title, alt, content}) => {
    return (
        <div className="title">
            <h2 className="title__main" aria-label={alt}>{title}</h2>
            <p className="title__content">{content}</p>
        </div>
    )
}

export default Title;