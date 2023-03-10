import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks';
import { useParams } from "react-router-dom";
import { getOneNews } from './../../store/Services/Actions/oneNewsActions';
import OneNewsCard from '../../components/ItemNews/OneNewsCard';
import { getCoreComments } from './../../store/Services/Actions/coreCommentsActions';


const ItemNews = (): JSX.Element => {
  const appDispatch = useAppDispatch();
  const params = useParams();
  const { oneNews } = useAppSelector((state) => state.oneNews);
  const { coreComments } = useAppSelector((state) => state.coreComments);

  useEffect(() => {
    void appDispatch(getOneNews(params.id));
    void appDispatch(getCoreComments(params.id));
  }, []);

  return (
    <>
      <OneNewsCard
        oneNews={oneNews}
        coreComments={coreComments}
      />
    </>
  )
};

export default ItemNews;
