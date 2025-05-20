import { useState } from "react";
import { plans } from "../../constants/plans-info";
import OptionCard from "../OptionCard/OptionCard";
import "./OptionList.scss";

function OptionList() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  return (
    <div className="mainContainer">
      {plans.map((plan, index) => (
        <OptionCard
          key={index}
          props={plan}
          selected={index === selectedCardIndex}
          onSelect={() => setSelectedCardIndex(index)}
        />
      ))}
    </div>
  );
}

export default OptionList;
