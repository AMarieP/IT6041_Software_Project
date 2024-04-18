import {React, useState} from 'react'


/*
Image Carousel COmponent

Displays images given to it from array
Left and right buttons moves through the image thumbnails and sets
the active image as main so user can view

To do:
Change 'left' and 'right' buttons to arrow icons. 

Add onHover effects so left and right buttons appear and disappear on hover

*/

export default function Carousel({images}) {

    const [activeImage, imageIsActive] = useState(images[0])
    
    
    //Maps all the thumbnail images
    const thumbnail = images.map((image, index) => {
        if (image && image.url) {
            return(
                <div key={index} onClick={() => imageIsActive(images[index])}>
                <img style={activeImage === images[index] ? styles.thumbnailActive : styles.thumbnail} src={image.url} />
            </div>
            )
        } else {
            return null
        }
        
        })
    

    //Sets Active Image According to buttons
    function ArrowButtons(direction){
        const index = images.indexOf(activeImage)
        const length = images.length
        if (direction === 'right'){
            if((index + 1) < length){
                imageIsActive(images[index + 1])
            }else {
                imageIsActive(images[0])
            }
        } else if(direction === 'left'){
            if(index === 0){
                imageIsActive(images[length - 1])
            }else {
                imageIsActive(images[index - 1])
            }
        }else{
            console.log('error')
        }
    }

    

  return (
    <section style={styles.container}>
        <div style={styles.cont}>
            <section style={styles.arrows}>
                <button style={styles.arrowButton} onClick={() => ArrowButtons('left')}>left</button>
                <button style={styles.arrowButton} onClick={() => ArrowButtons('right')}>right</button>

            </section>
            {activeImage && <img src={activeImage.url} alt={activeImage.alt} style={styles.activeImg} />}
        </div>
        <div style={styles.thumbnails}>
            {thumbnail}
        </div>
    </section>
  )
}

const styles = {
    container: {
        width: '100%',
        position: 'relative',

    },

    activeImg: {
        width: '100%',
        height: '80vh',
        objectFit: 'contain',
        overflow: 'hidden',
        // backgroundColor: 'lightGrey'

    },
    arrows: {
        position: 'absolute',
        zIndex: '2',
        width: '100%',
        height: '80%',
        display: 'flex',
        flexFlow: 'row nowrap',
        alignContent: 'space-between',
        justifyContent: 'space-between',
        // visibility: 'hidden'
    },
    arrowButton: {
        opacity: '0.6',
        border: 'none'

    },
    thumbnails: {
        width: '100%',
        overflowX: 'auto',
        overflowY: 'hidden',
        scrollSnapType: 'x mandatrory',
        scrollBehavior: 'smooth',
        display: 'flex',
        flexFlow: 'row nowrap',
        height: '15vh',
        gap: '5px'
        

    },
    thumbnail: {
        height: '100%',
        width: '5rem',
        overflow: 'hidden',
        objectFit: 'cover',
        filter: 'grayscale(100)'


    },
    thumbnailActive: {
        height: '100%',
        width: '5rem',
        overflow: 'hidden',
        objectFit: 'cover',
    },

}