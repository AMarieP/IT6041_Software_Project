import React from "react";
import "./fauxRadioButton.css";

function FauxRadioButton({ radName, radValue, children, isChecked, onChange }) {
  return (
    <label className="fauxRadioContainer">
      <input
        type="checkbox"
        name={radName}
        value={radValue}
        checked={isChecked}
        onChange={onChange}
      />
      <div className="checkmark"></div>
      <span className="labelText"></span>
      
    </label>
  );
}


export default FauxRadioButton;