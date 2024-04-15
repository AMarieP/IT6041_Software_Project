import {React, useState} from 'react'

export default function Carousel({images}) {

    const [activeImage, imageIsActive] = useState(images[0])
    
    
    //Maps all the thumbnail images
    const thumbnail = images.map((image, index) => <div key={index} onClick={() => imageIsActive(images[index])}>
                                            <img style={activeImage === images[index] ? styles.thumbnailActive : styles.thumbnail} src={image.url} />
                                        </div>)
    

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
    <section>
        <div>
            <section>
                <button onClick={() => ArrowButtons('left')}>left</button>
                <button onClick={() => ArrowButtons('right')}>right</button>

            </section>
            <img src={activeImage.url} alt={activeImage.alt} style={styles.activeImg} />
        </div>
        <div style={styles.thumbnails}>
            {thumbnail}
        </div>
    </section>
  )
}

const styles = {
    container: {

    },
    activeImg: {
        width: '100%',
        height: '60vh',
        objectFit: 'cover',
        overflow: 'hidden',

    },
    arrows: {
        position: 'absolute',
        zIndex: '2'

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

    },
    thumbnailActive: {
        height: '100%',
        width: '5rem',
        overflow: 'hidden',
        objectFit: 'cover',
        filter: 'hue-rotate(90deg)'

    },

}