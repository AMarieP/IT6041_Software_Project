import React from 'react'
import ButtonBlack from './buttons/buttonBlack'
import ButtonWhite from './buttons/buttonWhite'


function PinnedBar() {
  return (
    <div style={styles.container}>
        <div style={styles.buttonContainer}>
            <ButtonBlack>save</ButtonBlack>
            <ButtonWhite>discard</ButtonWhite>
            <ButtonWhite>preview</ButtonWhite>
        </div>

    </div>
  )
}

const styles = {
    container: {
        backgroundColor: 'white',
        bottom: 0,
        right: 0,
        zIndex: 5,
        position: 'fixed',
        width: '80%',
        height: '15vh',
        borderTop: '1px solid black'
    },
    buttonContainer: {
        display: 'flex',
        flex: 'row nowrap',
        justifyContent: 'space-around',
        height: '100%',
        width: '50%'
    }
}

export default PinnedBar