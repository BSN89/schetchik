

type PropsType = {
    name: string
    callBack: () => void
    disabledIncButton: boolean
}

export const Button = (props: PropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }
    return (
        <button disabled={props.disabledIncButton} onClick={onClickHandler} className={ props.disabledIncButton ? 'disableBtn' : 'buttonClass' }>{props.name}</button>
    );
};

