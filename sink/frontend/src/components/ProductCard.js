import React from 'react'
import { Link } from 'react-router-dom'

//IMPORTANT: FUntionality of finding main image may change

//For testing
const testProduct = {
    "name": "Little Dancer of Fourteen Years",
    "date": "1881",
    "dimensions": "Approximately 98 cm (38.5 in) with base",
    "artist": "Edgar Degas",
    "medium": ["Bronze", "Muslin", "Hair"],
    "description": "The 'Little Dancer of Fourteen Years' is a sculpture created by Edgar Degas. It is one of his most famous and controversial works. The sculpture depicts a young ballet dancer, a member of the Paris Opera Ballet, standing approximately life-size. Degas made several versions of the sculpture using different materials, including wax and bronze. The dancer's face is composed of painted beeswax, her hair is made of real hair, and her costume is made of muslin, with a ribbon tied around her neck. The sculpture caused controversy when it was first exhibited due to its naturalistic portrayal of a young girl from a working-class background, a departure from traditional idealized depictions of ballet dancers.",
    "images": [
      {
        "name": "Front View",
        "alt": "Front view of Little Dancer of Fourteen Years",
        "url": "https://collectionapi.metmuseum.org/api/collection/v1/iiif/196439/1781283/main-image",
        "order": 1
      },
      {
        "name": "Side View",
        "alt": "Side view of Little Dancer of Fourteen Years",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/7a/Degas_Dancer_seated.jpg",
        "order": 2
      },
      {
        "name": "Back View",
        "alt": "Back view of Little Dancer of Fourteen Years",
        "url": "https://upload.wikimedia.org/wikipedia/commons/7/71/Edgar_Degas_-_Petite_danseuse_de_quatorze_ans%2C_mus%C3%A9e_d%27Orsay.jpg",
        "order": 3
      }
    ],
    "status" : "under negotiation"
  }
  

function ProductCard({product}) {

    //Find main image
    const mainImage = product.images.filter(image => image.order === 1)

    //Space and comma added to mediums array if needed
    const mediums = ()  => {
         return product.medium.length > 1 ? product.medium.join(', ') : product.medium
    }

    console.log(mediums())
  return (
    <Link to={`/stock/edit/${product._id}`} style={styles.cardLink}>
        <div style={styles.container}>
            {mainImage.length > 0 ? (
                <img style={styles.image} src={mainImage[0].url} alt="Product" />
            ) : (
                <div style={styles.noImageBox}>No Images</div>
            )}
            <div style={styles.textContainer}>
                <div style={styles.textLeft}>
                    <h1 style={styles.head} >{product.name}</h1>
                    <p style={styles.medium} >{mediums()}</p>
                    <p style={styles.dimensions} >{product.dimensions}</p>
                </div>
                <div style={styles.status}>
                    <i>{product.status}</i>
                </div>
            </div>
        </div>
    </Link>
  )
}

const styles = {
    container: {
        width: 'inherit',
        padding: '1em',
        backgroundColor: 'white',
        boxShadow: '2px 6px 5px lightgrey',

    },
    image: {
        width: '100%',
        // height: '100%',
    },
    noImageBox: {
        width:'100%',
        height:'300px',
        textAlign:'center',
        backgroundColor:'lightgrey',
    },
    textContainer: {
        display: 'flex',
        flexFlow: 'row nowrap',
        // backgroundColor: 'bisque',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },
    textLeft: {
        // backgroundColor: 'purple',
        flex: '1.5',
        textAlign: 'left',


    },
    textRight: {
        // backgroundColor: 'grey',
        flex: '1',
        textAlign: 'right',


    },
    status: {
        //Light Italic
        fontFamily: 'Roboto',
        fontWeight: 400,
        fontStyle: 'italic',
        margin: '1em 0'
    },

    //Purely text styling
    head: {
        //Roboto Medium
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '1.2em',
        marginBottom: 0,

        
    },

    dimensions: {
        //Roboto Medium
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontStyle: 'normal',
        textTransform: 'lowercase',
        fontSize: '0.7rem',
        margin: 0,


    },
    medium: {
        //Roboto light
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: '0.8rem',
        textTransform: 'lowercase',
        margin: 0,

    },
    date: {
        //Roboto light
        fontFamily: 'Roboto',
        fontWeight: 300,
        fontStyle: 'normal',
        fontSize: '1.2rem',
        marginTop: '0',

    },
    artist: {
        //Roboto Medium
        fontFamily: 'Roboto',
        fontWeight: 500,
        fontStyle: 'normal',
        fontSize: '1.1em',
        textTransform: 'lowercase',
        marginBottom: '0'



    },
    cardLink:{
        textDecoration: 'none',
        color: 'inherit',
        cursor: 'inherit'
    },
}

export default ProductCard
