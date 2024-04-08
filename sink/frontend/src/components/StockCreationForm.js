import { useState } from "react";

//importing components
import SliderToggle from "./SliderToggle/sliderToggle"
import BoxWithDropshadow from "./boxWithDropshadow"
import TextBox from "./textBox"
import TextArea from "./textArea"
import FauxRadio from "./FauxRadio/fauxRadio";

const StockCreationForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [medium, setMedium] = useState('')
    const [artist, setArtist] = useState('')
    const [status, setStatus] = useState('')
    const [archived, setArchived] = useState('')
    const [error, setError] = useState('')


    const handelSubmit = async (e) => {
        e.preventDefault()

        const stock = {name,description,dimensions,medium,artist}
        console.log(stock)
        const response = await fetch('/api/stock/', {
            method:'POST',
            body: JSON.stringify(stock),
            headers: {
                'content-type' : 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            console.log('new stock added', json)
            setName('')
            setDescription('')
            setImages('')
            setDimensions('')
            setMedium('')
            setArtist('')
            setStatus('')
            setArchived(true)
        }
    }


    return (
        <form onSubmit={handelSubmit} style={styles.StockCreationForm}>
            <div style={styles.leftSide}>
                <BoxWithDropshadow style={styles.stockDescription}>
                    <h3>Description</h3>
                    <TextBox
                        id={'name'}
                        name={'Name:'}
                        value={name} 
                        thisHeight={'20px'}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <TextArea
                        name={'description:'}
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </BoxWithDropshadow>
                
                <BoxWithDropshadow style={styles.images}>
                    <h3>Images</h3> 
                    <input 
                        type="image"
                        onChange={(e) => setImages(e.target.value)}
                        value={images}
                    />
                </BoxWithDropshadow>
                <BoxWithDropshadow style={styles.details}>
                    <h3>Details</h3>
                    <TextBox 
                        name={'dimensions:'}
                        onChange={(e) => setDimensions(e.target.value)}
                        value={dimensions}
                    />
                    <TextBox 
                        name={'medium:'}
                        onChange={(e) => setMedium(e.target.value)}
                        value={medium}
                    />
                    <TextBox 
                        name={'artist:'}
                        onChange={(e) => setArtist(e.target.value)}
                        value={artist}
                    />
                </BoxWithDropshadow>
            </div>
            <div style={styles.rightSide}>
                <BoxWithDropshadow style={styles.status}>
                    <h3>Status</h3>
                    <FauxRadio 
                        children={'sold'}
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    />
                </BoxWithDropshadow>
                <BoxWithDropshadow style={styles.archived}>
                    <h3>Archived</h3>
                    <SliderToggle 
                        children={'archived'}
                        toggleId={'archived'}
                        toggleName={'archived'}
                        onChange={(e) => setArchived(e.target.value)}
                        value={archived}
                    />
                </BoxWithDropshadow>
                <BoxWithDropshadow style={styles.finalButtons}>
                    <button >add stock</button>
                </BoxWithDropshadow>
                {error && <div>{error}</div>}
            </div>

        </form>
    )
}

const styles = {
    StockCreationForm:{
        display:'flex',
        gap:'20px'
    },
    leftSide:{
        display:'flex',
        width:'70%',
        flexDirection:'column',
        gap:'20px'
    },
    stockDescription:{
    },
    images:{

    },
    details:{

    },
    rightSide:{
        display:'flex',
        width:'30%',
        flexDirection:'column',
        gap:'20px'
    },
    status:{

    },
    archived:{

    },
    finalButtons:{

    },

}

export default StockCreationForm 