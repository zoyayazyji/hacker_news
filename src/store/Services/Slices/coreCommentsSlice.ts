import { createSlice } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { getCoreComments, getComments } from '../Actions/coreCommentsActions';

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
  comments: IComment[] | any;
  error: AxiosError | undefined;
};

const initialState: ICommentsState = {
  coreComments: [],
  comments: [],
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
    builder.addCase(getComments.fulfilled, (state, action) => {
      state.comments = action.payload;
    });
  },
});

export default categoryListSlice.reducer;