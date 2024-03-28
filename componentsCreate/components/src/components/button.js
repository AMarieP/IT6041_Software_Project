import React from 'react'
import

function Button({blkWhite, children}) {
  return (
    <button style={style(blkWhite)} onClick={onClick}>
    <p>{children}</p>
</button>
  )
}


const style = (colour) => {
  if(colour == 'black'){
    return blk

  }
  if(colour == 'white'){
    return wht
  }
}



const wht = {
    button:{
        backgroundColor: colours.khaki,
        color: colours.lightYellow,
        padding: '0.4rem 2rem',
        border: 'none',
        boxShadow: '0px 2px 3px lightgrey',

    }
}

const blk = {
    button:{
        backgroundColor: "#00000",
        color: colours.lightYellow,
        padding: '0.4rem 2rem',
        border: 'none',
        boxShadow: '0px 2px 3px lightgrey',

    }
}

export default Button