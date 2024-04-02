import React from 'react'

/*Input Text Box
How it works: 
Styles input box for forms where text can be entered. 
Will always be 100% width of the parent container (this may change later depending on how we style things)
and height can be altered using 'thisHeight' props

*/

function TextBox({id, name, thisHeight}) {

  const styles = {
    container: {
      display: 'flex',
      flexFlow: 'column nowrap',
      alignItems: 'flex-start',
      fontFamily: 'Roboto',
      color: 'black',
      width: '100%' //Width should always be 100% parent

    },
    inputBox: {
        border: '2px solid black',
        padding: '0.4rem 2rem',
        boxShadow: 'inset 0px 2px 3px lightgrey',
        borderRadius: '4px',
        width: '100%', //Width should always be 100% parent
        height: thisHeight
    }
}
  return (
    <div style={styles.container}>
    <label for={name}>{name}</label>
    <input style={styles.inputBox} type="text" id={id} name={name}/>
    </div>

  )
}



export default TextBox