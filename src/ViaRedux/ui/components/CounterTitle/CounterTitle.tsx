
import {RootState} from "../../../store/store";
import {useAppSelector} from "../../../hooks/hooks";


export  const CounterTitle = () => {
    const value = useAppSelector((state: RootState) => state.count.startValue)
    const notFound = 'enter set'
    return(
        <>
            {value}
        </>
    )
}