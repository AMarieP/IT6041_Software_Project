import logo from './logo.svg';
import './App.css';
import SliderToggle from './components/sliderToggle';
import ButtonWhite from './components/buttons/buttonWhite';
import ButtonBlack from './components/buttons/buttonBlack';
import BoxWithDropshadow from './components/boxWithDropshadow';
import FauxRadio from './components/fauxRadio';
import TextBox from './components/textBox';
import TextArea from './components/textArea';

function App() {
  return (
    <div className="App">
      <BoxWithDropshadow>
      <FauxRadio>name of button</FauxRadio>
      <TextBox name={"textbox small"} thisHeight={'100px'}/>
      <TextBox name={"textbox large"} thisHeight={'70vh'}/>
      <TextArea name={"textarea"} thisHeight={'100px'} />
      <SliderToggle value={'value'} toggleName={'togglename'} toggleId={'thisId'}  >Test Toggle</SliderToggle>
      </BoxWithDropshadow>
    </div>
  );
}

export default App;
