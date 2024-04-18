import React from 'react'
import Carousel from './Carousel'
import ButtonWhite from './buttons/buttonWhite'


const Preview = ({item}) => {
    
    
    //Onclick handler for when button is clicked to enquire
    const buttonFunction = () => {

    }

    //Changes display based on 
    const buttonDisplay = () => {
        if(item.status === 'enquire'){
            //Send to enquiry form
            return (
            <ButtonWhite onClick={buttonFunction} >enquire</ButtonWhite>)
        }
        if(item.status === 'sold'){

            return(
                <p>item sold</p>
            )
            
        }
        if(item.status === 'underNegotiation'){

            return(
                <>   
                <p>under negotiation</p>         
                <ButtonWhite onClick={buttonFunction} >enquire</ButtonWhite>
                </>
                
            )
        }
        if(item.status === 'price'){

            return(
                <>
                <p>{item.price}</p>
                <ButtonWhite onClick={buttonFunction} >enquire</ButtonWhite>
                </>
            )
        }
    }



  return (
    <div style={styles.container}>
        <div style={styles.carousel}>
        <Carousel images={item.images} />
        </div>
        <section style={styles.info} >
            <h1 style={styles.title} >{item.name}</h1>
            <h3 style={styles.details} className='mediumBold' >{item.dimensions}</h3>
            <h3 style={styles.details} className='mediumBold' >{item.medium}</h3>
            <h3 style={styles.details} className='lightItalic' >{item.artist}</h3>
            {buttonDisplay}
            <br />
            <br />
            <p className='light' >{item.description}</p>
        </section>
    </div>
  )
}


const styles = {

    container: {
        display: 'flex',
        width: '100%',
        // margin: '60px 30px',

        // backgroundColor: 'pink',
    },
    info: {
        // backgroundColor: 'bisque',
        flex: 2,
        margin: '10px',
        padding: '0 10px'
        // padding: '10px',
        // boxShadow: '4px 4px 1px lightgrey',
        // border: 'solid 1px black'

    },
    carousel: {
        // backgroundColor: 'cornflowerblue',
        margin: '10px',
        flex: 3,

    },
    title: {
        fontSize: '36px'
    },

    details: {
        fontSize: '15px'
    },


}

export default Preview