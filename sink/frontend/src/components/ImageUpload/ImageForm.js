import React, { useState } from 'react'
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
  
  const [errorMessage, setErrorMessage] = useState("")

  
  //Checks if valid url is given
  function isValidURL(urlString){
    let thisUrl = urlString;
    try{
      thisUrl = new URL(urlString)
    } catch (err){
      //If the url is not valid
      console.log("Error:", err)
      return false
    }
    return true
  }
  
  //Checks if there is am empty string
  function isString(string){
    
    try{
      if(string === "") throw "String is Empty"
      return true
    }
    catch(err){
      console.log("Error: ", err)
      return false
    }
  }


  //Handle form submission by passing new form to onSave function
  function handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());

    const isUrlValid = isValidURL(formJson.url)
    const isAltEmpty = isString(formJson.alt)
    const isNameEmpty = isString(formJson.name)

    //Test fields to ensure they are not empty 
    try{
      if(isUrlValid === false) throw "URL Provided is Invalid"
      if(isAltEmpty === false) throw "Alt text needs to be provided"
      if(isNameEmpty === false) throw "Image name needs to be provided"

      //If no error thrown then save the form 
      onSave(formJson)
    }
    catch(err){
      //Should then show user an error message 
      setErrorMessage("Error: " + err)
      console.log("Error: ", err)
    }
    
  }


    
  return (
    <div style={styles.container}>
      <BoxWithDropShadow>
        <h2>add image by url:</h2>
        <form id="form" onSubmit={handleSubmit}>
          <TextBox id={'imageName'} name={'name'} defaultValue={activeImg.name}></TextBox>
          <TextBox id={'imageAlt'} name={'alt'} defaultValue={activeImg.alt}></TextBox>
          <TextBox id={'imageUrl'} name={'url'} defaultValue={activeImg.url}></TextBox>
          {/* <SliderToggle toggleName={'isMain'} toggleId={'imageOrder'} defaultChecked={activeImg.main}>Main Image</SliderToggle> */}
          <br/>
          <p style={styles.errorMessage}>{errorMessage}</p>
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
    zIndex: 10,
    left: '50vw',
    top: '50vh',
    transform: 'translate(-50%, -50%)',
  },
  buttonContainer: {
    display: 'flex',
    flex: 'row nowrap',
    justifyContent: 'space-between',
  },
  errorMessage: {
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    fontStyle: 'italic',
    fontSize: '0.9rem',
    margin: 0,
    padding: 0,
  }
}

export default ImageForm
