import React, { useState, useEffect } from 'react'
import ButtonBlack from '../buttons/buttonBlack'
import ImageForm from './ImageForm'

/*
IMAGE INPUT: COmponent to allow users to input, edit and delete images int heir listing.

*/

// const testList = [
//     {
//       "name": "Front Left View",
//       "alt": "Front Left Angle view of Little Dancer of Fourteen Years",
//       "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781283/main-image",
//       "order": 1
//     },
//     {
//       "name": "Straight On View",
//       "alt": "Straight On view of Little Dancer of Fourteen Years",
//       "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781282/main-image",
//       "order" : 2
//     },
//     {
//       "name": "Right Side View",
//       "alt": "Right side view of Little Dancer of Fourteen Years",
//       "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781284/main-image",
//       "order": 3
//     },
//     {
//       "name": "Back View",
//       "alt": "Back view of Little Dancer of Fourteen Years",
//       "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781285/main-image",
//       "order": 4
//     },
//     {
//       "name": "Left Side View",
//       "alt": "Left side view of Little Dancer of Fourteen Years",
//       "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781286/main-image",
//       "order": 5
//     },

//   ]


function ImagesBackendComponent({imageList}) {
  
  const emptyImage = {
    "name": "",
    "alt": "",
    "url": "",
    "order": "",
  }

  
  //Sets images to the image list associated with this listing
  const [thisImageList, setMyImages] = useState(imageList)
  
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

  //New image or Updated
  const handleImageSubmit = (image) => {

    //Looks for matching URL
    const imageIndex = thisImageList.findIndex(img => img.url === image.url)
    const updatedImageList = [...thisImageList];
    
    //If the URL already exists then update the image 
    if (thisImageList[imageIndex]) {
      updatedImageList[imageIndex] = image; 
    } else {
      updatedImageList.push(image); 
    }

    setMyImages(updatedImageList);
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
      setMyImages(deleteImageList);
    } else{
      //If the image does not already exist do nothing. 
      console.log('Image was not found!')
    }
    
    
    closeModal();
  }
  

  //Gets the image list and maps
    const images = thisImageList.map((img) => {
      
        return(
          <div key={img.id} style={img.order === 1 ? styles.mainImg : styles.imgContainer} onClick={() => {openModal(); setActiveImage(img); console.log(thisImageList)}} >
            <img src={img.url} alt={img.alt} style={styles.image} />
          </div>
            
        )
        
    })

    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>images</h1>
        <div style={styles.imagesContainer}>
            {images}
        </div>
        <button onClick={openModal} >add new</button>
        {isModal && (
          <ImageForm onClose={closeModal} onSave={handleImageSubmit} onDelete={handleImageDelete} activeImg={activeImage} />
        )}
      </div>
    )
  }

  const styles = {
    container: {
        width: 'calc(50vw - 30px)',
        minHeight: '100vh',
        padding: '20px',
        border: '1px solid black',
        boxShadow: '4px 4px 5px lightgrey',    
        // margin: '50px'

    },

    heading: {
        margin: '0 0 10px 0',

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
        height: 'calc((((50vw - 20px) / 3) * 2) - 10px)',
        width: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgrey',

    },

    imgContainer: {
        border: '1px solid black',
        height: 'calc(((50vw - 20px) / 3) - 10px)',
        width: 'calc(((50vw - 20px) / 3) - 10px)',
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
