import {React, useState, useRef, useEffect} from 'react'
import './sliderToggle.css'

/*
How it works: usestate to toggle on and off
useState changes styling on checkbox
*/


function SliderToggle({value, name, id, children}) {

    const [isToggled, setToggle] = useState(false)
    const elementRef = useRef(null)
    
    /*Calcs the width of Off/On when toggled, this keeps our element responsive */
    useEffect(() => {
        const elementWidth = elementRef.current.offsetWidth;
        document.documentElement.style.setProperty('--element-width', `${elementWidth}px`);
    }, [isToggled]);


    
    /*Sets class and content of On/Off label */
    const onOff = isToggled ? 'on' : 'off'

    
  return (
        <label className='container'>
            <input type='checkbox' name='toggle' id='this-toggle' value={value} onClick={() => setToggle(!isToggled)} />
            <label className='switchLabel' for='this-toggle'>{children}</label>
            <label className={onOff} for='this-toggle' ref={elementRef}>{onOff}</label>
        </label>

  )
}

export default SliderToggle