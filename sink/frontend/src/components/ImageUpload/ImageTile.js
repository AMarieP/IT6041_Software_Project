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

  const [myImages, setMyImages] = useState(imageList)

  const [isModal, setModal] = useState(false)

  const [activeImage, setActiveImage] = useState(emptyImage)

  //Opens Modal
  const openModal = () => {
    setModal(true)
  }

  const closeModal = () => {
    setActiveImage(emptyImage)
    setModel(false)
  }

  const handleImageSubmit = (updateDetails) => {
    console.log(updateDetails + "Hello")
    const imageIndex = imageList.findIndex((img, index) => img.index === activeImage.index);
    
    if (imageIndex !== -1) {
    const updatedImageList = [...imageList];

    updatedImageList[imageIndex] = {
      updateDetails
    };
    setMyImages(updatedImageList);
    }
    
    closeModal();
  }
  
  const handleOrderUpdate = () => {

  }
  

  //Gets the image list and maps
    const images = myImages.map((img, index) => {
        return(
          <div key={img.index} style={img.order === 1 ? styles.mainImg : styles.imgContainer} onClick={() => {openModel(); setActiveImage(img)}} >
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
        <button onClick={openModel} >add new</button>
        {isModel && (
          <ImageForm onClose={closeModal} activeImg={activeImage} />
        )}
      </div>
    )
  }

  const styles = {
    container: {
        width: 'calc(50vw - 30px)',
        minHeight: '50vh',
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
