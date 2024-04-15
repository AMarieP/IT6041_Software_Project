import { useState } from "react"

import BoxWithDropshadow from "../components/boxWithDropshadow"
import TextBox from "../components/textBox"
import FauxRadio from "../components/FauxRadio/fauxRadio"
import useCheckbox from "../hooks/useCheckbox"

const ViewStock = () => {
    const [search, setSearch] = useState('')
    const { checkedItems, handleCheckboxChange, isChecked } = useCheckbox([])



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
                        <FauxRadio radId={'archived'} radName={'archived'} radValue={'archived'} children={'archived'}
                            checked={isChecked('archived')} onChange={() => handleCheckboxChange('archived')}/>
                        <FauxRadio radId={'under negotiation'} radName={'under negotiation'} radValue={'under negotiation'} children={'under negotiation'}
                            checked={isChecked('underNegotiation')} onChange={() => handleCheckboxChange('underNegotiation')}/>
                        <FauxRadio radId={'in gallery'} radName={'in gallery'} radValue={'in gallery'} children={'in gallery'}
                            checked={isChecked('inGallery')} onChange={() => handleCheckboxChange('inGallery')}/>
                        <FauxRadio radId={'sold'} radName={'sold'} radValue={'sold'} children={'sold'}
                            checked={isChecked('sold')} onChange={() => handleCheckboxChange('sold')}/>
                        <FauxRadio radId={'listed'} radName={'listed'} radValue={'listed'} children={'listed'}
                            checked={isChecked('listed')} onChange={() => handleCheckboxChange('listed')}/>
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