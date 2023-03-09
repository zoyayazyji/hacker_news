import axios from '../../../instance';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { INews } from '../Slices/newsListSlice';

export const getNewsList = createAsyncThunk("get/newsList", async () => {
  try {
    let listNews: INews[] = [];
    const response = await axios.get('/showstories.json?print=pretty');
    const listId = response.data.splice(0, 100);
    for (let i = 0; i < listId.length; i++) {
      const itemNews = await axios.get(`/item/${listId[i]}.json?print=pretty`);
      const oneNews: INews = {
        by: itemNews.data.by,
        id: itemNews.data.id,
        kids: itemNews.data.kids,
        score: itemNews.data.score,
        time: new Date(itemNews.data.time).toDateString(),
        title: itemNews.data.title,
        type: itemNews.data.type,
        url: itemNews.data.url,
      };
      listNews.push(oneNews);
    }
    listNews.sort((x, y) => {
      return new Date(x.time) < new Date(y.time) ? 1 : -1
    });
    return listNews;
  } catch (error) {
    console.log(error);
  }
});



