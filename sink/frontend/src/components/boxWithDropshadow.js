import React from 'react'

function BoxWithDropshadow({children}) {
  return (
    <div style={styles.container}>
        {children}
    </div>
  )
}


const styles = {
    container:{
        backgroundColor: 'white',
        boxShadow: '4px 4px 5px lightgrey',
        border: '2px solid black',
        padding: '5%',
    }
}
export default BoxWithDropshadow