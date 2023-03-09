import { createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getCoreComments } from '../Actions/coreCommentsActions';

export interface IComment {
  by: string;
  id: number;
  kids: [];
  parent: number;
  time: string | Date | any;
  text: string;
  type: string;
};

export interface ICommentsState {
    coreComments: IComment[] | any;
    error: AxiosError | undefined;
};

const initialState: ICommentsState = {
  coreComments: [],
    error: undefined,
};

const categoryListSlice = createSlice({
    name: 'coreComments',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCoreComments.fulfilled, (state, action) => {
            state.coreComments = action.payload;
        });
    },
});

export default categoryListSlice.reducer;