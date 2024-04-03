import React from 'react'
 /*
Button Black Background
Label/ Words on button are children prop
Action is fed through OnClick prop
 */

function ButtonBlack({children, onClick}) {
  return (
    <button style={styles.button} onClick={() => onClick}>
        <p>{children}</p>
    </button>
  )
}

const styles = {
    button:{
        backgroundColor: 'black',
        color: 'white',
        padding: '0.4rem 2rem',
        border: '2px solid black', //Keep boarder so both styles of button remain same size
        borderRadius: '4px',
        boxShadow: '0px 2px 3px lightgrey',
    },
}



export default ButtonBlack