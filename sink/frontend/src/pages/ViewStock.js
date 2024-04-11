import BoxWithDropshadow from "../components/boxWithDropshadow"
import TextBox from "../components/textBox"
import FauxRadio from "../components/FauxRadio/fauxRadio"

const ViewStock = () => {


    return (
        <div>
            <div>
                <h1>My Stock</h1>
                <BoxWithDropshadow>
                    <TextBox/>
                    <div styles>
                        <FauxRadio/>
                        <FauxRadio/>
                        <FauxRadio/>
                        <FauxRadio/>
                        <FauxRadio/>
                    </div>
                </BoxWithDropshadow>
            </div>
            <div>

            </div>






        </div>      
    )
}

export default ViewStock