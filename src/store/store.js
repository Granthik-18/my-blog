import { configureStore } from "@reduxjs/toolkit";
import authSlice from './authSlice';
import logger from "redux-logger";

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger]
})

export default store;