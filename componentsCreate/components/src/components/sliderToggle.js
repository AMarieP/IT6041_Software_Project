import {React, useState} from 'react'

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


function sliderToggle({name, leftToggle, rightToggle}) {

    const [isToggled, setToggled] = useState(false)
  return (
    <label >
        <input type='checkbox' name={name} value={isToggled} style={() => {
            if(isToggled){
                return styles.on
            }else{
                return styles.off
            }
        }}/>
    </label>
  )
}

const styles = {
    container:{

    },
    on:{

    },
    off:{

    }

}
export default sliderToggle