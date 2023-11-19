import React from "react";
import "./styles.scss";
import { OurValuesContent } from "../../../../assets/about/values";
import Value from "../Value";
import CompanyValues from "../../../../assets/about/CompanyValues.png";

const OurValues:React.FC = () => {
    return (
        <div className="our-values">
            <div className="our-values__header">
                <div className="our-values__header--image-container">
                    <img 
                        className="our-values__header--image"
                        src={CompanyValues}
                        alt="about us header image"
                    />
                </div>
                <div className="our-values__header--content">
                    <h2>Our Values</h2>
                    <h4>At the core of Crisp are values that guide our work:</h4>
                </div>
            </div>
            <div className="our-values__content">
                {OurValuesContent.map((type) => {
                    return (<Value value={type.value} statement={type.statement} />)
                })}
            </div>
        </div>
    )
}

export default OurValues;