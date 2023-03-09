import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks';
import { getNewsList } from '../../store/Services/Actions/newsListAction';
import NewsCard from '../../components/MainPage/NewsCard';
import Loader from '../../components/Loader/Loader';

const MainPage = (): JSX.Element => {
  const appDispatch = useAppDispatch();
  const { newsList } = useAppSelector((state) => state.newsList);

  useEffect(() => {
    void appDispatch(getNewsList());
    setInterval(() => {
      void appDispatch(getNewsList());
    }, 60000)
  }, []);

  console.log(newsList)
  return (<>
    <Loader loading={newsList.length > 0 ? false : true} />
    <NewsCard
      newsList={newsList}
    />
  </>
  );
};

export default MainPage;