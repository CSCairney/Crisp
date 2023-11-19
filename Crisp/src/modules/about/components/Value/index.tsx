import React from "react";
import { LuAccessibility } from "react-icons/lu";
import { SiCreatereactapp } from "react-icons/si";
import { TbBuildingCommunity } from "react-icons/tb";
import { GiStrongMan } from "react-icons/gi";
import { Values } from "../../constants/values";
import "./styles.scss";


type ValueProps = {
    value: string;
    statement: string;
}

const Value:React.FC<ValueProps> = ({value, statement}) => {

    const valueHelper = (valueType: string = value) => {
        switch (valueType) {
            case Values.Accessibility:
                return <LuAccessibility className="value__icon" />;
            case Values.Community:
                return <TbBuildingCommunity className="value__icon" />;
            case Values.Innovation:
                return <SiCreatereactapp className="value__icon" />;
            case Values.Integrity:
                return <GiStrongMan className="value__icon" />;
            default:
                return <p>Error Loading Value</p>;
        }
    }

    return (
        <div className="value">
            <div className="value__icon-container">{valueHelper(value)}</div>
            <div className="value__content">
                <h3 className="value__title"><strong>{value}</strong></h3>
                <p className="value__statement">{statement}</p>
            </div>
        </div>
    )
}

export default Value;