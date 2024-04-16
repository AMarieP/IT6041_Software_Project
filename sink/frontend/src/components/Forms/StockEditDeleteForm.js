import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"

//importing components
import SliderToggle from "../SliderToggle/sliderToggle"
import BoxWithDropshadow from "../boxWithDropshadow"
import TextBox from "../textBox"
import TextArea from "../textArea"
import FauxCheckButton from "../FauxRadio/fauxRadio"
import ButtonBlack from "../buttons/buttonBlack"
import ImageTile from "../ImageUpload/ImageTile"


const StockEditDeleteForm = () => {

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
    const {id} = useParams()
    const navigate = useNavigate()

    //Creates the choices for the radio button
    const radioButtonChoices = [
        {
            value: 'enquire',
            name: 'enquire',
        },
        {
            value: 'underNegotiation',
            name: 'under negotiation',
        },
        {
            value: 'sold',
            name: 'sold',
        },
    ]
    //prefills sections of the form
    useEffect(()=>{
        getProductDetails(id)
    },[])

    const getProductDetails = async (id) => {
        const response = await fetch(`/api/Stock/${id}`)
        const singleStock = await response.json()
        setStock({
            name: singleStock.name,
            description: singleStock.description,
            images: singleStock.images,
            dimensions: singleStock.images,
            medium: singleStock.medium,
            artist: singleStock.artist,
            status: singleStock.status,
            archived: true
        })
    }

    //Handle the update of the stock
    const handleSubmit = async (e) => {
        e.preventDefault()

        const stock = thisStock

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
            setError(null)
            alert("Stock Updated Successfully")
        }
    }

    const handleDelete = async (e) => {
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
            alert("Stock Deleted")
            setError(null)
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
                    <div style={styles.status}>
                        <h2>Status</h2>
                        <FauxCheckButton name={'status'} array={radioButtonChoices} onChange={(e) => setStock({...thisStock, status: e.target.value})} />
                    </div>
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
                        <ButtonBlack
                            children={'Delete'}
                            onClick={handleDelete}
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