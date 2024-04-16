import {React, useState, useRef, useEffect} from 'react'
import './sliderToggle.css'

/*
How it works: usestate to toggle on and off
useState changes styling on checkbox
*/


function SliderToggle({defaultChecked, toggleName, toggleId, children}) {

    const [isToggled, setToggle] = useState(false)
    const elementRef = useRef(null)
    const labelRef = useRef(null)
    const togRef = useRef(null)
    
    /*Calcs the width of Off/On when toggled, this keeps our element responsive */
    useEffect(() => {
        const elementWidth = elementRef.current.offsetWidth;
        const labelWidth = labelRef.current.offsetWidth;

        document.documentElement.style.setProperty('--element-width', `${elementWidth}px`);
        document.documentElement.style.setProperty('--label-width', `${labelWidth}px`);
    }, [isToggled]);


    
    /*Sets class and content of On/Off label */
    const onOff = isToggled ? 'on' : 'off'

    const leftRight = isToggled ? 'yes' : 'no'

    
  return (
        <label className='sliderContainer'>
            <input type='checkbox' name={toggleName} id={toggleId} defaultChecked={defaultChecked} onClick={() => setToggle(!isToggled)} />
            <label className={['switchLabel' + " " + leftRight]} ref={labelRef} htmlFor={toggleId}>{children}</label>
            <label className={onOff} htmlFor={toggleId} ref={elementRef}>{onOff}</label>
        </label>

  )
}

export default SliderToggle