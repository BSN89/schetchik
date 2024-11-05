

type PropsType = {
    children: string
    callBack?: () => void
    disabledButton?: boolean
}

export const Button = ({children, callBack, disabledButton}: PropsType) => {

    return (
        <button disabled={disabledButton} onClick={callBack} className={ disabledButton ? 'disableBtn' : 'buttonClass' }>{children}</button>
    );
};

