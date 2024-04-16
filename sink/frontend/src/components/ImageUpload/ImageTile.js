import React, { useState, useEffect } from 'react'
import ButtonBlack from '../buttons/buttonBlack'
import ImageForm from './ImageForm'

/*
IMAGE INPUT: 
Component to allow users to input, edit and delete images held 
in their listing. 

Function:
Add new image with button
Update an existing image by clicking on it
Delete an image in the pop-up modal
Main image is the first image in the array

To Add:
Handling for 'main' image
Handle image submit current will only allow one of each URL. 
This is somewhat confusing behavior and should be fixed for user

To Use: 
State is managed in parent component passed through onImageListChange

*/

function ImagesBackendComponent({imageList, onImageListChange}) {
  
  const emptyImage = {
    "name": "",
    "alt": "",
    "url": "",
    // "main": Boolean,
  }

  
  //Sets images to the image list associated with this listing
  // const [thisImageList, setMyImages] = useState(imageList)

  const thisImageList = imageList
  
  //Sets modal state
  const [isModal, setModal] = useState(false)

  //Sets the active image displayed in the modal
  const [activeImage, setActiveImage] = useState(emptyImage)

  //Modal Handling

  //Open and close
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setActiveImage(emptyImage)
    setModal(false)
  }


  //Handle the 'main' image setting still not finished
  const handleMainImageSelection = (image, list) => {
    
    //If there are no images yet, automatically set image to main
    if(list.length === 1){
      list[0].main = true
      return list
    }

    //If you are wanting to set this image as main, set the rest as false
    if(image.main === true){
      //Find the index of our target image
      const currentIndex = list.findIndex(img => img.url === image.url)

      //Create a new list setting all but our current index to false
      const updatedList = list.map((img, index) => {
        if (index === currentIndex) {
          return { ...img, main: false };
        } 
        else {
          return { ...img, main: false };
        }
      });

      console.log(updatedList)
    }
  }

  //New image or Updated
  const handleImageSubmit = (image) => {

    //Looks for matching URL
    const imageIndex = thisImageList.findIndex(img => img.url === image.url)
    const updatedImageList = [...thisImageList];
    
    //If the URL already exists then update the image 
    if (thisImageList[imageIndex]) {
      updatedImageList[imageIndex] = image; 
      console.log('Updating Existing Image')
    } else {
      updatedImageList.push(image); 
    }

    onImageListChange(updatedImageList)
    closeModal();
}
  
//Delete an image from the list
  const handleImageDelete = () => {

    const imageIndex = thisImageList.indexOf(activeImage);
    console.log(activeImage)

    //If the image can be found in the array
    if (thisImageList[imageIndex]) {
      const deleteImageList = [...thisImageList];
      deleteImageList.splice(imageIndex, 1)
      onImageListChange(deleteImageList)
    } else{
      //If the image does not already exist do nothing. 
      console.log('Image was not found!')
    }
    
    
    closeModal();
  }

    //Gets the image list and maps
    const images = thisImageList.map((img) => {
      
        return(
          <div key={img.id} style={thisImageList[0] === img ? styles.mainImg : styles.imgContainer} onClick={() => {openModal(); setActiveImage(img); console.log(thisImageList)}} >
            <img src={img.url} alt={img.alt} style={styles.image} />
          </div>
            
        )
        
    })

    return (
      <div style={styles.container}>
        <div style={styles.imagesContainer}>
            {images}
        </div>
        <br/>
        <ButtonBlack type='button' onClick={openModal} >add new</ButtonBlack>
        {isModal && (
          <ImageForm onClose={closeModal} onSave={handleImageSubmit} onDelete={handleImageDelete} activeImg={activeImage} />
        )}
      </div>
    )
  }

  const styles = {
    container: {
        width: '100%',
        minHeight: '50vh',
        display: 'flex',
        flexFlow: 'column nowrap',
        justifyContent: 'space-around'
    },


    imagesContainer:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        width: '100%',
        placeItems: 'center',
        gap: '10px',

        },
    
    mainImg: {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 3,
        border: '1px solid black',
        height: 'calc(50vh / 3 * 2)',
        width: 'calc(50vh / 3 * 2)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',

    },

    imgContainer: {
        border: '1px solid black',
          height: 'calc(50vh / 3)',
        width: 'calc(50vh / 3)',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',
    },

    image: {
        height: '100%',
    },

    button: {
        width: '100%'

    }

}

export default ImagesBackendComponent
