import { useState } from "react"

import BoxWithDropshadow from "../components/boxWithDropshadow"
import TextBox from "../components/textBox"
import FauxRadio from "../components/FauxRadio/fauxRadio"

const ViewStock = () => {
    const [search, setSearch] = useState('')


    return (
        <div>
            <div>
                <h1>My Stock</h1>
                <BoxWithDropshadow>
                    <TextBox                    
                        id='search'
                        type="text"
                        name='Search:'
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                        thisHeight={'35px'}                    
                    />
                    <div style={styles.radioBtns}>
                        <FauxRadio radId={'archived'} radName={'archived'} radValue={'archived'} children={'archived'}/>
                        <FauxRadio radId={'under negotiation'} radName={'under negotiation'} radValue={'under negotiation'} children={'under negotiation'} />
                        <FauxRadio radId={'in gallery'} radName={'in gallery'} radValue={'in gallery'} children={'in gallery'}/>
                        <FauxRadio radId={'sold'} radName={'sold'} radValue={'sold'} children={'sold'}/>
                        <FauxRadio radId={'listed'} radName={'listed'} radValue={'listed'} children={'listed'}/>
                    </div>
                </BoxWithDropshadow>
            </div>
            <div>

            </div>






        </div>      
    )
}

export default ViewStock

const styles = {
    radioBtns:{
        display:'flex',
        width:'100%',
        justifyContent:'space-between',
        marginTop:'25px'
        
    },
}