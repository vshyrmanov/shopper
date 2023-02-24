import { configureStore, combineReducers } from '@reduxjs/toolkit';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk'

import {rerenderReducer} from './listReducer';
import {swapperReducer} from "./swapperReducer";
import {guestReducer} from "./guestReducer";
import {subscribesReducer} from "./subscribesReducer";


const rootReducer = combineReducers({
    auth: rerenderReducer,
    swapper: swapperReducer,
    guestSession: guestReducer,
    subscribes: subscribesReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: true,
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor = persistStore(store);
export default store;