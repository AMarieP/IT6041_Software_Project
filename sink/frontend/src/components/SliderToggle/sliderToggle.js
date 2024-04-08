import {React, useState, useRef, useEffect} from 'react'
import './sliderToggle.css'

/*
How it works: usestate to toggle on and off
useState changes styling on checkbox
*/


function SliderToggle({value, toggleName, toggleId, children}) {

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
        <label className='sliderContainer'>
            <input type='checkbox' name={toggleName} id={toggleId} value={value} onClick={() => setToggle(!isToggled)} />
            <label className='switchLabel' htmlFor={toggleId}>{children}</label>
            <label className={onOff} htmlFor={toggleId} ref={elementRef}>{onOff}</label>
        </label>

  )
}

export default SliderToggle