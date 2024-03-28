import { React, useState } from "react"

//How custom radio button should work:
//Use State changes style based on if button is checked or unchecked. 
//Draws a circle using CSS 


//TO DO: I need to figue out how to set the button as checked, I don't have much experience with radio buttons :)
function radio({name, value, children}) {

    const [isChecked, setChecked] = useState(false)

  return (
    <label>
        <input type="radio" name={name} value={value} style={() => {
            //Can we rewrite in shorthand :) I just cbf rn!
            if(isChecked){
                return styles.checked
            }else{
                return styles.unchecked
            }
        }} />
        {children}
    </label>
  )
}


const styles = {
    label: {

    },
    radioButton: {
        appearance: 'none',
    },
    checked: {

    },
    unchecked: {

    },
    
}
export default radio