import { configureStore } from '@reduxjs/toolkit';
import { qrApi } from './context/api';


export const store = configureStore({
    reducer: {
        [qrApi.reducerPath]: qrApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(qrApi.middleware),
});
