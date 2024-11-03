import './App.css';
import {Button} from "./components/Button";
import React, {useState} from "react";
import {Settings} from "./components/Settings";

function App() {

    let [number, setNumber] = useState(0)
    let [maxNumber, setMaxNumber] = useState(0)
    const [setDisabledApp, setSetDisabledApp] = useState(false)

let windowText = number === 0 ? "enter value and press 'set'" : number

    const incButton = () => {
        if (number < maxNumber) {
            setNumber(number => number + 1)
        }
    }
    const resetButton = () => {
        setNumber(Number(localStorage.getItem('startValue')))
    }

    const disableResetButton = setDisabledApp || number === 0
    const disabledIncButton = setDisabledApp ||  number === maxNumber
    return (
<div>
    <div className="App">

        <Settings setNumber={setNumber}
                  setMaxNumber={setMaxNumber}
                  setSetDisabledApp={setSetDisabledApp}
        />
    </div>


    <div className="App">
        <div >
            <div className={number === maxNumber ? 'buttonClassOff' : 'numberClass'}>{ windowText }</div>
            <div className='AppButton'>
                <Button name={'inc'} callBack={incButton} disabled={disabledIncButton}/>
                <Button name={'reset'} callBack={resetButton} disabled={disableResetButton}/>
            </div>
        </div>


    </div>
</div>



    );
}

export default App;
