import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type InputProps = {
onChange: (settings: string) => void
    disabledButton: boolean
}

export const Input = ( {onChange, disabledButton}: InputProps ) => {
    let [settings, setSettings] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSettings(e.currentTarget.value)
    }
    const inputCallback = () => {
        onChange(settings)
    }

    return(
        <>
             max value:   <input onChange={onChangeHandler} value={settings} type="number"/> <br/>
            start value: <input type='number'/>
            <div className='AppButton'>
                <Button name={'set'} callBack={inputCallback} disabledButton={disabledButton} />

            </div>
        </>

      );
    };