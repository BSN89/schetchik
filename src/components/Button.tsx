

type PropsType = {
    name: string
    callBack: () => void
    disabled?: boolean
}

export const Button = ({name,callBack,disabled}: PropsType) => {

    return (
        <button
            disabled={disabled}
            onClick={callBack}
            className={ disabled ? 'disableBtn' : 'buttonClass' }>
            {name}
        </button>
    );
};

