import './App.css';
import {Button} from "./components/Button";
import React, {ChangeEvent, useState} from "react";
import {Setting} from "./components/Setting";

function App() {


    let [inputTitle, setInputTitle] = useState('')
    let [number, setNumber] = useState(+inputTitle)
    console.log(number)

    const incButton = () => {
            setNumber(++number)
    }
    const resetButton = () => {
        setNumber(0)
    }






    const disableResetButton = number === 0
    const disabledIncButton = number === 5
    const setDisabled = inputTitle !== null
    return (
        <div className='App'>
            <div className="container">
                <div>
                    <div className={ number === 5 ? 'buttonClassOff' : 'numberClass'}>{number}</div>
                    <div className='AppButton'>
                        <Button name={'inc'} callBack={incButton} disabledButton={disabledIncButton}/>
                        <Button  name={'reset'} callBack={resetButton} disabledButton={disableResetButton} />
                        <Button name={'set'} callBack={()=> {} } disabledButton={setDisabled} />
                    </div>
                </div>
            </div>



            <Setting callBack={ () => setInputTitle } inputTitle={inputTitle}  disabledButton={setDisabled}/>
        </div>

    );
}

export default App;
