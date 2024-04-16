import React from "react";
import "./FauxRadioButton.css";

function FauxRadioButton({ name, array, onChange }) {
  
  const radioButtons = array.map((radioOption) => (    
      <label className="fauxButtonContainer">
        <input
          type="radio"
          name={name}
          value={radioOption.value}
          onChange={onChange}
        ></input>
        <span className="fauxButtonContainerLabel">{radioOption.name}</span>
      </label>))
  

  return (
    <>
      {radioButtons}
    </>
    
  );
}


export default FauxRadioButton;