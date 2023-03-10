import { createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getNewsList } from '../Actions/newsListAction';

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
    newsList: INews[] | any;
    loading: boolean;
    error: AxiosError | undefined;
};

const initialState: INewsState = {
    newsList: [],
    loading: false,
    error: undefined,
};

const categoryListSlice = createSlice({
    name: 'newsList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getNewsList.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getNewsList.rejected, (state, action) => {
            state.loading = false;
        });
        builder.addCase(getNewsList.fulfilled, (state, action) => {
            state.newsList = action.payload;
            state.loading = false;
        });
    },
});

export default categoryListSlice.reducer;
