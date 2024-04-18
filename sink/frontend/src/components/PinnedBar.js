import React from 'react'
import ButtonBlack from './buttons/buttonBlack'
import ButtonWhite from './buttons/buttonWhite'


function PinnedBar({save, preview}) {
  return (
    <div style={styles.container}>
        <div style={styles.buttonContainer}>
            <div style={styles.button}>
                <ButtonBlack onClick={save}>save</ButtonBlack>
            </div>
            <div style={styles.button}>
                <ButtonWhite onClick={preview}>preview</ButtonWhite>
            </div>
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
        borderTop: '1px solid black',
    },
    buttonContainer: {
        display: 'flex',
        flex: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginLeft: '60%',
        marginRight: '10%',
        height: '15vh',
    },
    button: {
        width: '10vw',
        // paddingLeft: '60px'
    }
}

export default PinnedBar