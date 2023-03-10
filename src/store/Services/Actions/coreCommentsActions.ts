import axios from '../../../instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IComment } from '../Slices/coreCommentsSlice';

export const getCoreComments = createAsyncThunk("get/coreComments", async (id: number | any) => {
  try {
    let itemComments: IComment[] = [];
    const comments = await axios.get(`/item/${id}.json?print=pretty`);
    if (comments.data.kids !== undefined) {
      for (let i = 0; i < comments.data.kids.length; i++) {
        const response = await axios.get(`/item/${comments.data.kids[i]}.json?print=pretty`);
        itemComments.push({
          by: response?.data?.by,
          id: response?.data?.id,
          kids: response?.data?.kids,
          parent: response?.data?.parent,
          time: new Date(response?.data?.time).toDateString(),
          text: response?.data?.text,
          type: response?.data?.type,
        });
      };
    };
    return itemComments;
  } catch (error) {
    console.log(error);
  }
});

export const getComments = createAsyncThunk("get/comments", async (id: number | any) => {
  try {
    let itemComments: IComment[] = [];
    const comments = await axios.get(`/item/${id}.json?print=pretty`);
    if (comments.data.kids !== undefined) {
      for (let i = 0; i < comments.data.kids.length; i++) {
        const response = await axios.get(`/item/${comments.data.kids[i]}.json?print=pretty`);
        itemComments.push({
          by: response.data.by,
          id: response.data.id,
          kids: response.data.kids,
          parent: response.data.parent,
          time: new Date(response.data.time).toDateString(),
          text: response.data.text,
          type: response.data.type,
        });
      };
    };
    return itemComments;
  } catch (error) {
    console.log(error);
  }
});