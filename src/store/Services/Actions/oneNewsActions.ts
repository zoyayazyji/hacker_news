import axios from '../../../instance';
import axiosA from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { INews } from '../Slices/newsListSlice';

export const getOneNews = createAsyncThunk("get/oneNews", async (id: number | any) => {
  try {
    setInterval(async() => {
    const response = await axiosA.get('https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty');
    }, 0);
    const itemNews = await axios.get(`/item/${id}.json?print=pretty`);
    const oneNews: INews = {
      by: itemNews?.data?.by,
      id: itemNews?.data?.id,
      kids: itemNews?.data?.kids,
      score: itemNews?.data?.score,
      time: new Date(itemNews?.data?.time).toDateString(),
      title: itemNews?.data?.title,
      type: itemNews?.data?.type,
      url: itemNews?.data?.url,
    };
    return oneNews;
  } catch (error) {
    console.log(error);
  }
});



