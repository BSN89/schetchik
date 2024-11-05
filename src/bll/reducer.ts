type initialStateType = typeof initialState

const initialState = {
    startValue: 0,
    maxValue: 0
}


export const reducerCount = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch (action.type) {
        case "UPDATE-START-VALUE": {
            return {...state, startValue: action.count}
        }
        case "UPDATE-MAX-VALUE":{
            return {...state, maxValue: action.count}
        }


        default :
            return state
    }

}


export const updateStartValueAC = (count: number) => {
    return {
        type: 'UPDATE-START-VALUE',
        count,
    } as const
}
export const updateMaxValueAC = (count: number) => {
    return {
        type: 'UPDATE-MAX-VALUE',
        count,
    } as const
}

export type UpdateStartValueType = ReturnType<typeof updateStartValueAC>
export type UpdateMaxValueType = ReturnType<typeof updateMaxValueAC>

type ActionType = UpdateStartValueType | UpdateMaxValueType