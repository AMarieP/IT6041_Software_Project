import React from 'react'
 /*
Button Black Background
Label/ Words on button are children prop
Action is fed through OnClick prop
 */

function ButtonBlack({children, onClick, type}) {
  return (
    <button style={styles.button} onClick={onClick} type={type}>
        <p style={styles.text}>{children}</p>
    </button>
  )
}

const styles = {
    button:{
        backgroundColor: 'black',
        color: 'white',
        padding: '0.5rem 2rem',
        border: '1px solid black', //Keep boarder so both styles of button remain same size
        borderRadius: '4px',
        boxShadow: '0px 2px 3px lightgrey',
        textTransform: 'lowercase',
    },
    text: {
      padding: 0,
      margin: 0,
      fontSize: '1rem'

    }
}



export default ButtonBlack