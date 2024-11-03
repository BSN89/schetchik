import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type SettingsProps = {
    setNumber: (startValue: number) => void
    setMaxNumber: (maxValue: number) => void
    setSetDisabledApp: (setDisabled: boolean) => void
}

export const Settings = ({setNumber, setMaxNumber, setSetDisabledApp}: SettingsProps) => {
    let storageGetMax = Number(localStorage.getItem('maxValue'))
    let storageGetStart = Number(localStorage.getItem('startValue'))
    const [maxValue, setMaxValue] = useState<number>(storageGetMax)
    const [startValue, setStartValue] = useState<number>(storageGetStart)
    const [disabled, setDisabled] = useState(false)

const setNumberHandler = () => {
    setNumber(startValue)
    setMaxNumber(maxValue)
    setSetDisabledApp(disabled)
    setDisabled(true)
    localStorage.setItem('startValue', startValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())
}
    const setStartValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.value)
        setStartValue(+(event.currentTarget.value))
        setDisabled(false)
    }
    const setMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+(event.currentTarget.value))
        setDisabled(false)
    }

    const statusInput = disabled ||  maxValue <= startValue || maxValue < 0 || startValue < 0
    const classNameInput = maxValue <= startValue || maxValue < 0 || startValue < 0 ? 'inputContainerError' : 'inputContainer'

    return (
        <div className={'appContainer'}>

            <div className={classNameInput}>
                <p>max value:</p>
                <input type="number" value={maxValue} onChange={setMaxValueHandler}/>
            </div>

            <div className={classNameInput}>
                <p>start value:</p>
                <input type="number" value={startValue} onChange={ setStartValueHandler }/>
            </div>

            <div className='AppButton'>
                <Button name={'set'} callBack={setNumberHandler} disabled={statusInput}/>
            </div>
        </div>
    );
};