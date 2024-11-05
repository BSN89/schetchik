import {combineReducers, legacy_createStore} from "redux";
import {reducerCount} from "../bll/reducer";


const rootReducer = combineReducers({
    count: reducerCount,
})


export const store = legacy_createStore(rootReducer)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

