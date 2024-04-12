import React from 'react'
import TextBox from '../textBox'
import ButtonBlack from '../buttons/buttonBlack'
import ButtonWhite from '../buttons/buttonWhite'
import BoxWithDropShadow from '../boxWithDropshadow'
import SliderToggle from '../SliderToggle/sliderToggle'


/* IMAGE FORM: 
This is a modal which pops up when an image is selected for editing, 
or create new image is selected.

User can input alt text, name, and URL for an image.

Has buttons to allow for save, delete and close.

Functionality is passed down from parent component.

Todo: Add Main Image selection & data validation

*/

function ImageForm({onClose, onSave, onDelete, activeImg}) {
  
  //Handle form submission by passing new form to onSave function
  function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    
    onSave(formJson)
  }



    
  return (
    <div style={styles.container}>
      <BoxWithDropShadow>
        <h2>add image by url:</h2>
        <form id="form" onSubmit={handleSubmit}>
          <TextBox id={'imageName'} name={'name'} defaultValue={activeImg.name}></TextBox>
          <TextBox id={'imageAlt'} name={'alt'} defaultValue={activeImg.alt}></TextBox>
          <TextBox id={'imageUrl'} name={'url'} defaultValue={activeImg.url}></TextBox>
          {/* <SliderToggle toggleName={'order'} toggleId={'imageOrder'} defaultChecked={true}>Main Image</SliderToggle> */}
          <br/>
          <div style={styles.buttonContainer}>
            <ButtonBlack type="submit">save</ButtonBlack>
            <ButtonWhite type="button" onClick={onDelete}>delete</ButtonWhite>
            <ButtonWhite type="button" onClick={onClose}>close</ButtonWhite>
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
