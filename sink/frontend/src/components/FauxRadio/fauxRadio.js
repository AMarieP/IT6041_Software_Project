import { React } from "react"
import './fauxRadio.css'

/*This is a checkmark made to look like a radio button - hence the name :) */

function FauxRadio({name, value, children, id,onChange}) {


  return (
    <label className="fauxRadioContainer">
        {children}
        <input 
          type="checkbox" 
          id={id} 
          value={value} 
          name={name} 
          onChange={onChange}
        />
        <div className="checkmark"></div>
    </label>
  )
}

export default FauxRadio

