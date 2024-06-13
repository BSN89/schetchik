import React, {ChangeEvent, useState} from 'react';
import {Button} from "./Button";

type SettingProps = {
    callBack: () => void
    disabledButton: boolean
    inputTitle: string
}

export const Setting = ( {callBack, disabledButton, inputTitle}: SettingProps ) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.currentTarget.value
    }
    // const settingButtonHandler = () => {
    //      callBack(+settings)
    //     setSettings('')
    // }
    return(
        <div className="container">
            <div>

                <div className={'numberClass'} >
                    max value:   <input onChange={onChangeHandler} value={inputTitle} type="number"/><br/>
                    start value: <input type='number'/>
                </div>


                <div className='AppButton'>
                    {/*<Button name={'set'} callBack={settingButtonHandler} disabledButton={disabledButton} />*/}

                </div>

            </div>
        </div>
      );
    };