import React from 'react'

const testList = [
    {
      "name": "Front Left View",
      "alt": "Front Left Angle view of Little Dancer of Fourteen Years",
      "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781283/main-image",
      "order": 1
    },
    {
      "name": "Straight On View",
      "alt": "Straight On view of Little Dancer of Fourteen Years",
      "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781282/main-image",
      "order" : 2
    },
    {
      "name": "Right Side View",
      "alt": "Right side view of Little Dancer of Fourteen Years",
      "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781284/main-image",
      "order": 3
    },
    {
      "name": "Back View",
      "alt": "Back view of Little Dancer of Fourteen Years",
      "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781285/main-image",
      "order": 4
    },
    {
      "name": "Left Side View",
      "alt": "Left side view of Little Dancer of Fourteen Years",
      "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781286/main-image",
      "order": 5
    },

  ]



function ImagesBackendComponent({im}) {
    
    
    const images = testList.map((img) => {
        return(
            <img src={img.url} alt={img.alt} key={img.order} style={styles.image}/>
        )
        
    })

    return (
      <div style={styles.container}>
        <h1 style={styles.heading}>images</h1>
        <div style={styles.imagesContainer}>
            <div style={styles.mainImg}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
            <div style={styles.imgContainer}></div>
        </div>
      </div>
    )
  }

  const styles = {
    container: {
        width: '50vw',
        minHeight: '50vh',
        backgroundColor: 'bisque',
        padding: '10px',
        border: '1px solid black',
        boxShadow: '4px 4px 5px lightgrey',


    },

    heading: {
        backgroundColor: 'aliceblue',
        margin: '0 0 10px 0',

    },

    imagesContainer:{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        backgroundColor: 'green',
        width: '100%',
        placeItems: 'center',
        gap: '10px',
        },
    
    mainImg: {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 1,
        gridRowEnd: 3,
        backgroundColor: 'aqua',
        border: '1px solid black',
        height: '100%',
        width: '100%'
    },

    imgContainer: {
        backgroundColor: 'pink',
        border: '1px solid black',
        height: 'calc((50vw / 3) - 10px)',
        width: 'calc((50vw / 3) - 10px)'
    },

    image: {

    }

}

export default ImagesBackendComponent
