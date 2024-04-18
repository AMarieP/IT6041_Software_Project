import React, { useState , useEffect } from "react"
import { useLocation } from "react-router-dom"
import Preview from "../components/Preview"

//Pass ID into the preview component
const ViewListing = () => {
    const [item, setItem] = useState(null)
    const location = useLocation()

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        const ItemJson = params.get("stock")
        const parsedItem = JSON.parse(decodeURIComponent(ItemJson))
        setItem(parsedItem)
    },[location.search])

    if (!item) {
        return <div>Loading...</div>
    }


    return (
        <div>
            <Preview item={item}/> 
        </div>
    )
}

export default ViewListing