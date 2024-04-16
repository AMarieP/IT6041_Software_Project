import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

//importing components
import SliderToggle from "../SliderToggle/sliderToggle"
import BoxWithDropshadow from "../boxWithDropshadow"
import TextBox from "../textBox"
import TextArea from "../textArea"
import FauxRadio from "../FauxRadio/fauxRadio"
import ButtonBlack from "../buttons/buttonBlack";

const StockEditDeleteForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [images, setImages] = useState('')
    const [dimensions, setDimensions] = useState('')
    const [medium, setMedium] = useState('')
    const [artist, setArtist] = useState('')
    const [status, setStatus] = useState('')
    const [archived, setArchived] = useState('')
    const [error, setError] = useState('')
    const {id} = useParams()
    const navigate = useNavigate()

    //prefills sections of the form
    useEffect(()=>{
        getProductDetails()
    },)
    const getProductDetails = async () => {
        const response = await fetch(`/api/stock/${id}`)
        const singleStock = await response.json()
        setName(singleStock.name)
        setDescription(singleStock.description)
        setImages(singleStock.images)
        setDimensions(singleStock.dimensions)
        setMedium(singleStock.medium)
        setArtist(singleStock.artist)
        setStatus(singleStock.status)
        setArchived(true)
    }

    //handels the update of the 
    const handelSubmit = async (e) => {
        e.preventDefault()

        const stock = {name,description,dimensions,medium,artist}

        const response = await fetch(`/api/stock/${id}`, {
            method:'PATCH',
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
            setError(null)//could put a notification pop up here to say that the upload was a succsess
        }
    }

    const handelDelete = async (e) => {
        e.preventDefault()


        const response = await fetch(`/api/stock/${id}`, {
            method:'DELETE',
            headers: {
                'content-type' : 'application/json'
            }
        })

        if (!response.ok) {
            const error = await response.json()
            setError(error.message)
        }
        if (response.ok) {
            setError(null)//could put a notification pop up here to say that the upload was a succsess
            console.log('Stock item deleted successfully');
            navigate('/ViewStock')
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
                            value={name} 
                            thisHeight={'40px'}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <TextArea
                            formId={'discription'}
                            name={'description:'}
                            thisHeight={'120px'}
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </div>
                </BoxWithDropshadow>
                
                <BoxWithDropshadow style={styles.images}>
                    <h3>Images</h3> 
                    <input 
                        type="image"
                        onChange={(e) => setImages(e.target.value)}
                        value={images}
                    />
                </BoxWithDropshadow>
                <BoxWithDropshadow >
                    <h3>Details</h3>
                    <div style={styles.details}>
                        <TextBox 
                            id={'dimensions:'}
                            name={'dimensions:'}
                            onChange={(e) => setDimensions(e.target.value)}
                            value={dimensions}
                            thisHeight={"40px"}
                        />
                        <TextBox 
                            id={'medium:'}
                            name={'medium:'}
                            onChange={(e) => setMedium(e.target.value)}
                            value={medium}
                            thisHeight={"40px"}
                        />
                        <TextBox 
                            id={'artist:'}
                            name={'artist:'}
                            onChange={(e) => setArtist(e.target.value)}
                            value={artist}
                            thisHeight={"40px"}
                        />
                    </div>
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
                <BoxWithDropshadow >
                    <div style={styles.finalButtons}>
                        <ButtonBlack
                            children={'Save'}
                            onClick={handelSubmit}
                        />
                        <ButtonBlack
                            children={'Delete'}
                            onClick={handelDelete}
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

export default StockEditDeleteForm