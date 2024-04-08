import { useState } from "react";

const StockCreationForm = () => {
    const [title, setTitle] = useState('')
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

        const stock = {title,description,images,dimensions,medium,artist,status,archived}

        const response = await fetch('/api/stock', {
            method:'POST',
            body: JSON.stringify(stock),
            headers: {
                'content-type' : 'application/json'
            }
        })
        const json = await responce.json()

        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setError(null)
            console.log('new stock added', json)
            setTitle('')
            setDescription('')
            setImages('')
            setDimensions('')
            setMedium('')
            setArtist('')
            setStatus('')
            setArchived('')
        }
    }
    // wont work currently as i need to figure out how to pass the id 
    // const handelUpdate = async (e) => {
    //     e.preventDefault()

    //     const stock = {title,description,images,dimensions,medium,artist,status,archived}

    //     const response = await fetch('/api/stock', {
    //         method:'PATCH',
    //         body: JSON.stringify(stock),
    //         headers: {
    //             'content-type' : 'application/json'
    //         }
    //     })
    //     const json = await responce.json()

    //     if (!response.ok) {
    //         setError(json.error)
    //     }
    //     if (response.ok) {
    //         setError(null)
    //         console.log('new stock added', json)
    //         setTitle('')
    //         setDescription('')
    //         setImages('')
    //         setDimensions('')
    //         setMedium('')
    //         setArtist('')
    //         setStatus('')
    //         setArchived('')
    //     }
    // }


    return (
        <form className="StockCreationForm">
            <div className="leftSide">
                <div className="stockDescription">
                    <h3>Description</h3>
                    <label>Title:</label>
                    <input 
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title} 
                    />
                    <label>description:</label>
                    <input
                        type="text"
                        onChange={(e) => setDescription(e.target.value)}
                        value={description}
                    />
                </div>
                
                <div className="images">
                    <h3>Images</h3> 
                    <input 
                        type="image"
                        onChange={(e) => setImages(e.target.value)}
                        value={images}
                    />
                </div>
                <div className="details">
                    <h3>Details</h3>
                    <label>dimensions:</label>
                    <input 
                        type="text"
                        onChange={(e) => setDimensions(e.target.value)}
                        value={dimensions}
                    />
                    <label>medium:</label>
                    <input 
                        type="text"
                        onChange={(e) => setMedium(e.target.value)}
                        value={medium}
                    />
                    <label>artist:</label>
                    <input 
                        type="text"
                        onChange={(e) => setArtist(e.target.value)}
                        value={artist}
                    />
                </div>
            </div>
            <div className="rightSide">
                <div className="status">
                    <h3>Status</h3>
                    {/* this is where the differnt options for status will be desplayed. use radio instead of input */}
                    <input 
                        type="checkbox"
                        onChange={(e) => setStatus(e.target.value)}
                        value={status}
                    />
                </div>
                <div className="archived">
                    <h3>Archived</h3>
                    {/* this is where the slider toggle will be used */}
                    <input 
                        type="radio"
                        onChange={(e) => setArchived(e.target.value)}
                        value={archived}
                    />
                </div>
            </div>
            <div className="finalButtons">
                <button onSubmit={handelSubmit}>add stock</button>
                <button onSubmit={handelUpdate}>update stock</button>
                <button onSubmit={handelDelete}>delete stock</button>
            </div>
        </form>
    )
}

export default StockCreationForm 