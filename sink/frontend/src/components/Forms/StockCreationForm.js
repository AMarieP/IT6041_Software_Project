import { useState } from "react";

//importing components
import SliderToggle from "../SliderToggle/sliderToggle"
import BoxWithDropshadow from "../boxWithDropshadow"
import TextBox from "../textBox"
import TextArea from "../textArea"
import ButtonBlack from "../buttons/buttonBlack";
import FauxRadio from "../FauxRadio/fauxRadio";
import ImageTile from "../ImageUpload/ImageTile"

const StockCreationForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState([])
    const [dimensions, setDimensions] = useState('')
    const [medium, setMedium] = useState('')
    const [artist, setArtist] = useState('')
    const [status, setStatus] = useState('')
    const [archived, setArchived] = useState('')
    const [error, setError] = useState('')


    const [thisStock, setStock] = useState({
        name: "",
        description: "",
        images: [],
        dimensions: "",
        medium: "",
        artist: "",
        status: "",
        archived: ""
    })


    const handleSubmit = async (e) => {
        e.preventDefault()

        const stock = {thisStock}
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
        <form style={styles.StockCreationForm}>
            <div style={styles.leftSide}>
                <BoxWithDropshadow>
                    <h3>Description</h3>
                    <div style={styles.stockDescription}>
                        <TextBox
                            id={'name'}
                            name={'Name:'}
                            defaultValue={thisStock.name} 
                            thisHeight={'40px'}
                            onChange={(e) => setStock({...thisStock, name: e.target.value})}
                        />
                        <TextArea
                            formId={'description'}
                            name={'description:'}
                            thisHeight={'120px'}
                            onChange={(e) => setStock({...thisStock, description: e.target.value})}
                            value={thisStock.description}
                        />
                    </div>
                </BoxWithDropshadow>
                
                <BoxWithDropshadow style={styles.images}>
                    <h3>Images</h3>
                    <ImageTile onImageListChange={(e) => setStock({...thisStock, images: e})} imageList={thisStock.images}/> 
                </BoxWithDropshadow>
                <BoxWithDropshadow >
                    <h3>Details</h3>
                    <div style={styles.details}>
                        <TextBox 
                            id={'dimensions:'}
                            name={'dimensions:'}
                            onChange={(e) => setStock({...thisStock, dimensions: e.target.value})}
                            defaultValue={thisStock.dimensions}
                            thisHeight={"40px"}
                        />
                        <TextBox 
                            id={'medium:'}
                            name={'medium:'}
                            onChange={(e) => setStock({...thisStock, medium: e.target.value})}
                            defaultValue={thisStock.medium}
                            thisHeight={"40px"}
                        />
                        <TextBox 
                            id={'artist:'}
                            name={'artist:'}
                            onChange={(e) => setStock({...thisStock, artist: e.target.value})}
                            defaultValue={thisStock.artist}
                            thisHeight={"40px"}
                        />
                    </div>
                </BoxWithDropshadow>
            </div>


            <div style={styles.rightSide}>
                <BoxWithDropshadow style={styles.status}>
                    <h3>Status</h3>
                    <FauxRadio
                        radName="status"
                        radValue="sold"
                        onChange={(e) => setStock({...thisStock, status: e.target.value})}>
                        Sold
                    </FauxRadio>
                </BoxWithDropshadow>
                <BoxWithDropshadow style={styles.archived}>
                    <h3>Archived</h3>
                    <SliderToggle 
                        children={'archived'}
                        toggleId={'archived'}
                        toggleName={'archived'}
                        onChange={(e) => setStock({...thisStock, archived: e.target.value})}
                        value={thisStock.archived}
                    />
                </BoxWithDropshadow>
                <BoxWithDropshadow >
                    <div style={styles.finalButtons}>
                        <ButtonBlack
                            children={'Save'}
                            onClick={handleSubmit}
                        />
                    </div>
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
        display: "flex",
        flexDirection: "column",
        gap: "20px" 
    },

    images:{

    },
    details:{
        display: "flex",
        flexDirection: "column",
        gap: "20px" 
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
        display:'flex',
        flexDirection:'column',
    },

}

export default StockCreationForm 