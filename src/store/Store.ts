import { configureStore } from '@reduxjs/toolkit';
import newsListReducer from './/Services/Slices/newsListSlice';


export const store = configureStore({
    reducer: {
        newsList: newsListReducer,
       
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
