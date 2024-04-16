import React from 'react'
 /*
Button White Background w Black Outline
Label/ Words on button are children prop
Action is fed through OnClick prop
 */

function ButtonWhite({children, onClick, type}) {
  return (
    <button style={styles.button} onClick={onClick} type={type}>
        <p style={styles.text}>{children}</p>
    </button>
  )
}

const styles = {
    button:{
        backgroundColor: 'white',
        color: 'black',
        padding: '0.5rem 2rem',
        border: '1px solid black',
        borderRadius: '4px',
        boxShadow: '0px 2px 3px lightgrey',

    },
    text: {
      padding: 0,
      margin: 0,
      fontSize: '1rem'
    }
}



export default ButtonWhite