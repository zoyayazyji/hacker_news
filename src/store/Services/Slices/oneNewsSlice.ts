import { createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getOneNews } from '../Actions/oneNewsActions';

export interface INews {
    by: string;
    id: number;
    kids: [];
    score: number;
    time: string | Date | any;
    title: string;
    type: string;
    url: string;
};

export interface INewsState {
    oneNews: INews[] | any;
    error: AxiosError | undefined;
};

const initialState: INewsState = {
    oneNews: {},
    error: undefined,
};

const categoryListSlice = createSlice({
    name: 'oneNews',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getOneNews.fulfilled, (state, action) => {
            state.oneNews = action.payload;
        });
    },
});

export default categoryListSlice.reducer;