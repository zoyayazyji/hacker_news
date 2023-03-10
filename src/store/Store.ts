import { configureStore } from '@reduxjs/toolkit';
import newsListReducer from './/Services/Slices/newsListSlice';
import oneNewsReducer from './/Services/Slices/oneNewsSlice';
import coreCommentsReducer from './Services/Slices/coreCommentsSlice';

export const store = configureStore({
    reducer: {
        newsList: newsListReducer,
        oneNews: oneNewsReducer,
        coreComments: coreCommentsReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
