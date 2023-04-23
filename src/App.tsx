import './App.css';
import {Button} from "./components/Button";
import {useState} from "react";

function App() {
    let [number, setNumber] = useState(0)
let [maxNumber, setMaxNumber] = useState(5)

    const incButton = () => {
        if(number < maxNumber){
            setNumber(++number)
        }

    }
    const resetButton = () => {
        setNumber(0)
    }

    const disableResetButton = number === 0
    const disabledIncButton = number === maxNumber
    return (
        <div className="App">
            <div>
                <div onClick={()=>alert('НЕ ТУДА ЖМЯКАЕШЬ')} className={ number === maxNumber ? 'buttonClassOff' : 'numberClass'}>{number}</div>
                <div className='AppButton'>
                    <Button name={'inc'} callBack={incButton} disabledIncButton={disabledIncButton}/>
                    {/*<Button  name={'reset'} callBack={resetButton} />*/}
                    <button disabled={disableResetButton} onClick={resetButton}  className={ number === 0 ? 'disableBtn' : 'buttonClass' } >reset</button>
                </div>
            </div>
        </div>
    );
}

export default App;
