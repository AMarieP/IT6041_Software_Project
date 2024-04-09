import React from 'react'

//IMPORTANT: FUntionality of finding main image may change

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
  

function ProductCard({}) {

    //Find main image
    const mainImage = testProduct.images.filter(image => image.order === 1)

    //Space and comma added to mediums array if needed
    const mediums = ()  => {
         return testProduct.medium.length > 1 ? testProduct.medium.join(', ') : testProduct.medium
    }

    console.log(mediums())
  return (
    <div style={styles.container}>
        <img style={styles.image} src={mainImage[0].url}/>
        <div style={styles.textContainer}>
            <div style={styles.textLeft}>
                <p>{testProduct.name}</p>
                <p>{mediums()}</p>
                <p>{testProduct.dimensions}</p>

            </div>
            <div style={styles.textRight}>
                <p>{testProduct.artist}</p>
                <p>{testProduct.date}</p>

            </div>
        </div>
        <div style={styles.status}>
            <p>{testProduct.status}</p>
        </div>
    </div>
  )
}

const styles = {
    container: {
        width: '30vw',
        padding: '1em',
        backgroundColor: 'pink'
    },
    image: {
        width: '100%',
        // height: '100%',
    },
    textContainer: {
        display: 'flex',
        flexFlow: 'row nowrap'
    },
    textLeft: {

    },
    textRight: {

    },
    status: {

    },
}

export default ProductCard
