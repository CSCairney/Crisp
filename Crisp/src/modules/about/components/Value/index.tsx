import React from "react";
import { LuAccessibility } from "react-icons/lu";
import { SiCreatereactapp } from "react-icons/si";
import { TbBuildingCommunity } from "react-icons/tb";
import { GiStrongMan } from "react-icons/gi";
import { Values } from "../../constants/values";


type ValueProps = {
    value: Values;
    statement: string;
}

const Value:React.FC<ValueProps> = ({value, statement}) => {

    const valueHelper = (valueType: string = value) => {
        switch (valueType) {
            case Values.Accessibility:
                return <LuAccessibility />;
            case Values.Community:
                return <TbBuildingCommunity />;
            case Values.Innovation:
                return <SiCreatereactapp />;
            case Values.Integrity:
                return <GiStrongMan />;
            default:
                return <p>Error Loading Value</p>;
        }
    }

    return (
        <div className="value">
            <div className="value__icon">{valueHelper(value)}</div>
            <h4 className="value__title">{value}</h4>
            <p className="value__statement">{statement}</p>
        </div>
    )
}

export default Value;