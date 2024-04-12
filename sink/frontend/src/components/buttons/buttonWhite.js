import React from 'react'
 /*
Button White Background w Black Outline
Label/ Words on button are children prop
Action is fed through OnClick prop
 */

function ButtonWhite({children, onClick, type}) {
  return (
    <button style={styles.button} onClick={onClick} type={type}>
        <p>{children}</p>
    </button>
  )
}

const styles = {
    button:{
        backgroundColor: 'white',
        color: 'black',
        padding: '0.4rem 2rem',
        border: '2px solid black',
        borderRadius: '4px',
        boxShadow: '0px 2px 3px lightgrey',

    }
}



export default ButtonWhite