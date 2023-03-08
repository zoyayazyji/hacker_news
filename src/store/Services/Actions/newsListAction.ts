import axios from '../../../instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { INews } from '../Slices/newsListSlice';

export const getNewsList = createAsyncThunk("get/newsList", async () => {
  try {
    let listNews: INews[] = [];
    const response = await axios.get('/topstories.json?print=pretty');
    const listId = response.data.splice(0, 100);
    for (let i = 0; i < listId.length; i++) {
      const itemNews = await axios.get(`/item/${listId[i]}.json?print=pretty`)
      listNews.push(itemNews.data)
    }
    return listNews;
} catch (error) {
    console.log(error);
}
})



