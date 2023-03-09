import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../store/Hooks';
import { useParams } from "react-router-dom";
import { 
    Card, 
    CardActions, 
    CardContent,
    Button, 
    Typography 
  } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import { INews } from './../../store/Services/Slices/newsListSlice';
import { getOneNews } from './../../store/Services/Actions/oneNewsActions';


const ItemNews = (): JSX.Element => {
  const appDispatch = useAppDispatch();
  const params = useParams();
  const { oneNews } = useAppSelector((state) => state.oneNews);
  console.log(oneNews);

  useEffect(() => {
    return void appDispatch(getOneNews(params.id));
  }, []);
  return (
    <>
    <Typography>buu</Typography>
    </>
  )
};

export default ItemNews;
