import {combineReducers, configureStore} from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import {apiSlice} from "./ApiSlice";
import user from  "./reducers/userSlice"
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";


const persistConfig = {
    key: 'root',
    storage,
    blacklist:["user"]
}
const rootReducer = combineReducers({
     user,
    [apiSlice.reducerPath]:apiSlice.reducer
})
const persistedReducer = persistReducer(persistConfig, rootReducer)


const store = configureStore({
    reducer: persistedReducer,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,

        }).concat(apiSlice.middleware)
})
export const persist = persistStore(store)
export default store