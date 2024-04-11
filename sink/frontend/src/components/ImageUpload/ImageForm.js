import React from 'react'
import TextBox from '../textBox'
import ButtonBlack from '../buttons/buttonBlack'
import ButtonWhite from '../buttons/buttonWhite'
import BoxWithDropShadow from '../boxWithDropshadow'


/* IMGAE FORM: 
This is a modal which pops up when an image is selected (or create new image is selected).
This allows users to upload , edit or delete an image. */

function ImageForm({ onClose, activeImg}) {

  //Preview Functionality: 
  //Update src of the image when URL changes
  


    
  return (
    <div style={styles.container}>
      <BoxWithDropShadow>
        <h2>add image by url:</h2>
        <form>
          <TextBox id={'imageName'} name={'img name'} defaultValue={activeImg.name}></TextBox>
          <TextBox id={'imageAlt'} name={'alt text'} defaultValue={activeImg.alt}>{activeImg.alt}</TextBox>
          <TextBox id={'imageUrl'} name={'url'} defaultValue={activeImg.url}>{activeImg.url}</TextBox>
          <br/>
          <div style={styles.buttonContainer}>
            <ButtonBlack onClick={onClose}>save</ButtonBlack>
            <ButtonWhite onClick={onClose}>delete</ButtonWhite>
            <ButtonWhite onClick={onClose}>close</ButtonWhite>
          </div>

        </form>
      </BoxWithDropShadow>
    </div>
  )
}


const styles = {
  container: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
  buttonContainer: {
    display: 'flex',
    flex: 'row nowrap',
    justifyContent: 'space-between',
  }
}

export default ImageForm
