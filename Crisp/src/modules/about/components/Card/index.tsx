import React from "react";
import "./styles.scss";
import Ratings from "../Ratings";

type CardProps = {
    name: string,
    content: string,
    role: string,
    rating: number


}

const Card:React.FC<CardProps> = ({ name, content, role, rating }) => {
  return (
    <div className="card">
        <h1 className="card__name">{name}</h1>
        <h2 className="card__role">{role}</h2>
        <p className="card__content">{content}</p>
        <Ratings rating={rating} />
    </div>
  );
};

export default Card;