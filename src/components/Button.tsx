

type PropsType = {
    name: string
    callBack: () => void
    disabledButton?: boolean
}

export const Button = ({name, callBack, disabledButton}: PropsType) => {

    return (
        <button disabled={disabledButton} onClick={callBack} className={ disabledButton ? 'disableBtn' : 'buttonClass' }>{name}</button>
    );
};

