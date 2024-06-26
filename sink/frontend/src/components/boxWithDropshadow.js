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
        boxShadow: '4px 4px 1px lightgrey',
        border: '1px solid black',
        padding: '5%',
    }
}
export default BoxWithDropshadow