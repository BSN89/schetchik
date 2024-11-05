import React, {ChangeEvent} from 'react';



type Props = {
    onChange: (number: number) => void
}


export const Input = (props: Props) => {


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChange(Number(e.currentTarget.value))
    }
    return(
    <div className={'inputContainer'}>
        <input type="number"  onChange={onChangeHandler}/>
    </div>
      );
    };