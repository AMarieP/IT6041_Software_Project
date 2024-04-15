import { React } from "react"
import './fauxRadio.css'

/*This is a checkmark made to look like a radio button - hence the name :) */

function FauxRadio({radName, radValue, children, radId,onChange}) {


  return (
    <label className="fauxRadioContainer">
        {children}
        <input 
          type="checkbox" 
          id={radId} 
          value={radValue} 
          name={radName} 
          onChange={onChange}
        />
        <div className="checkmark"></div>
    </label>
  )
}

export default FauxRadio

