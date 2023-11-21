import React from "react";
import { TestimonalDetails } from "../../types/testimonials";
import Card from "../Card";
import "./styles.scss";

type TestimonalsProps = {
    testimonials: TestimonalDetails[]
};

const Testimonals:React.FC<TestimonalsProps> = ({testimonials}) => {
  return (
    <div className="testimonials">
        {testimonials.map((testimonial) => (
            <Card name={testimonial.name} content={testimonial.content} role={testimonial.role} rating={testimonial.rating} />
        ))}
    </div>
  );
};

export default Testimonals;