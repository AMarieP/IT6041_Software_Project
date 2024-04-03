import {React, useState} from 'react'
import './sliderToggle.css'

/*
How it works: usestate to toggle on and off
useState changes styling on checkbox

using CSS tutorials incl this on
https://www.w3schools.com/howto/howto_css_switch.asp
https://alvarotrigo.com/blog/toggle-switch-css/
TODO: pretty much all of it hahahah
-reduce if/else to the shorthand for easier reading
-do all of the styling thus far
-probably sort the animation as well 
-finsih the todo

 */


function SliderToggle({value, name, id}) {

    const [isToggled, setToggle] = useState(false)
    const [classname, setClassname] = useState('')

    
    /*Sets class and content of On/Off label */
    const onOff = isToggled ? 'on' : 'off'

    
  return (
    <div>

        <label className='container'>
            <input type='checkbox' name='toggle' id='this-toggle' className={classname} value={value} onClick={() => setToggle(!isToggled)} />
            <label class='label' for='this-toggle'>ThisSwitchName</label>
            <label className={onOff} for='this-toggle'>{onOff}</label>
        </label>
    </div>
  )
}

export default SliderToggle