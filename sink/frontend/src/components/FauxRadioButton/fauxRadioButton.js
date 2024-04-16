import React from "react";
import "./fauxRadioButton.css";

function FauxRadioButton({ name, value, children, isChecked, onChange }) {

  
  return (
    <label className="fauxButtonContainer">
      <input
        type="checkbox"
        name={name}
        value={value}
        checked={isChecked}
        onChange={onChange}
      ></input>
      <span className="fauxButtonContainerLabel">{children}</span>
      
    </label>
  );
}


export default FauxRadioButton;