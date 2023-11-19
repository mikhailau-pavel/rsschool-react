import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from './reducers/AppReducer'
import  movieAPI  from "../apiService/MovieServer";
const rootReducer = combineReducers({
    appReducer,
    [movieAPI.reducerPath]: movieAPI.reducer
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
           return getDefaultMiddleware().concat(movieAPI.middleware)
        }
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']