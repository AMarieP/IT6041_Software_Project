import React from 'react'
import Carousel from '../components/Carousel'
import ButtonWhite from '../components/buttons/buttonWhite'

// const testImages = [
//     {
//         name: "One",
//         alt: "1",
//         url: "https://upload.wikimedia.org/wikipedia/commons/0/00/The_Little_Fourteen-Year-Old_Dancer_MET_DP-14939-005.jpg",
//     },
//     {
//         name: "Two",
//         alt: "2",
//         url: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Bailarina_Degas_Washington.jpg",
//     },
//     {
//         name: "Three",
//         alt: "3",
//         url: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Edgar_Degas_La_Petite_Danseuse_de_Quatorze_Ans_cast_in_1997.jpg",
//     },
//     {
//         name: "FOur",
//         alt: "4",
//         url: "https://upload.wikimedia.org/wikipedia/commons/2/2f/La_Petite_Danseuse_de_Quatorze_Ans_by_Edgard_Degas%2C_1881_-_Ny_Carlsberg_Glyptotek_-_Copenhagen_-_DSC09283.JPG",
//     },
//     {
//         name: "Five",
//         alt: "5",
//         url: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Little_Dancer_of_Fourteen_Years.jpg",
//     },
//     {
//         name: 'LandscapeTest',
//         alt: 'Lndscapetst',
//         url: 'https://media.istockphoto.com/id/1406515149/photo/idyllic-remote-beach-destination.jpg?s=2048x2048&w=is&k=20&c=8Stgipk8fiFdpVFG3wytsfWknDl4acNSa15tBvE1jSM='
//     }

// ]

const Preview = ({item}) => {
    
    //Changes display based on 
    const buttonFunction = () => {
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
                <p>under negotiation</p>
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
            {buttonFunction}
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