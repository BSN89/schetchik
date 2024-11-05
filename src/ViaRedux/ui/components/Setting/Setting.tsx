import React, {useState} from 'react';
import {Input} from "../Input";
import {Button} from "../Button";
import {useAppDispatch} from "../../../hooks/hooks";
import {updateMaxValueAC, updateStartValueAC} from "../../../bll/reducer";

export const Setting = () => {
    const [start, setStart] = useState(0)
    const [max, setMax] = useState(0)
    const dispatch = useAppDispatch()


    const callBackHandler = () => {
        dispatch(updateStartValueAC(start))
        dispatch(updateMaxValueAC(max))
        localStorage.setItem('start', start.toString())
        localStorage.setItem('max', max.toString())
    }

    const incorrectValue = max <= start || max < 0 || start < 0
    const classNameInput = incorrectValue ? 'inputContainerError' : 'inputContainer'

    return (

        <div className={'appContainer'}>

            <div className={classNameInput}>
                <p>max value:</p>
                <Input onChange={setMax}/>
            </div>

            <div className={classNameInput}>
                <p>start value:</p>
                <Input onChange={setStart}/>
            </div>

            <div className='AppButton'>
                <Button callBack={callBackHandler} disabledButton={incorrectValue}>set</Button>
            </div>


        </div>
    );
};