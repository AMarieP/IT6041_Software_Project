import React from 'react'

/*Input Text Box
How it works: 
Styles input box for forms where text can be entered. 
Will always be 100% width of the parent container (this may change later depending on how we style things)
and height can be altered using 'thisHeight' props

*/


function TextBox({id, name, thisHeight, defaultValue, onChange}) {


  const styles = {
    container: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'flex-start',
      fontFamily: 'Roboto',
      fontSize: '0.9rem',
      textTransform: 'lowercase',
      color: 'black',
      width: '100%' //Width should always be 100% parent

    },
    inputBox: {
        border: '1px solid black',
        boxShadow: 'inset 0px 2px 3px lightgrey',
        borderRadius: '4px',
        width: '100%', //Width should always be 100% parent
        height: thisHeight //Height input by user
    }
}
  return (
    <div style={styles.container}>
    <label htmlFor={id}>{name}</label>

    <input 
      style={styles.inputBox} 
      type="text" 
      id={id} 
      name={name}
      defaultValue={defaultValue}
      onChange={onChange}
    />

    </div>

  )
}



export default TextBox