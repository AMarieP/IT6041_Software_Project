import React from 'react'

function TextBox({id, name}) {
  return (
    <>
    <label for={name}>{name}</label>
    <input type="text" id={id} name={name}/>
    </>

  )
}

const styles = {
    label: {

    },
    inputBox: {
        
    }
}

export default TextBox