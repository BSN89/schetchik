import {CounterTitle} from "../CounterTitle/CounterTitle";
import {Button} from "../Button";
import React from "react";
import {useAppDispatch, useAppSelector} from "../../../hooks/hooks";
import {RootState} from "../../../store/store";
import {updateStartValueAC} from "../../../bll/reducer";

export const IncBlock = () => {
    const startValue = useAppSelector((state: RootState) => state.count.startValue)
    const maxValue = useAppSelector((state: RootState) => state.count.maxValue)
    const dispatch = useAppDispatch()
    const incrementHandler = () => {
        dispatch(updateStartValueAC(startValue + 1))
    }
    const resetHandler = () => {
        dispatch(updateStartValueAC(Number(localStorage.getItem('start'))))
    }

    const incorrectValue = maxValue <= startValue || maxValue < 0 || startValue < 0
    return (
        <div>

            <div className='numberClass'>
                <CounterTitle/>
            </div>
            <div className='AppButton'>
                <Button callBack={incrementHandler} disabledButton={incorrectValue}>inc</Button>
                <Button callBack={resetHandler}>reset</Button>
            </div>

        </div>

    )
}