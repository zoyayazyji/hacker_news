import React, { useState } from 'react';
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  Button
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../store/Hooks';
import ThreePIcon from '@mui/icons-material/ThreeP';
import { IComment } from './../../store/Services/Slices/coreCommentsSlice';
import { getComments } from '../../store/Services/Actions/coreCommentsActions';


const CommentsCard = ({ coreComments }: { coreComments: IComment[] }): JSX.Element => {
  const appDispatch = useAppDispatch();
  const { comments } = useAppSelector((state) => state.coreComments);
  const [isAnswer, setIsAnswer] = useState(false);

  const openCommentsHandler = (id: number) => {
    void appDispatch(getComments(id));
    setIsAnswer(true);
  };

  return (<>
    <Grid style={{ marginLeft: '70px', paddingBottom: '10px', backgroundColor: '#fbeafb', borderRadius: 40, borderTopLeftRadius: 0, marginTop: '-25px', padding: '30px'}}>
      {coreComments?.map((item) => (
        <Grid>
          {item?.kids !== undefined ? (<>
            <Card variant="outlined" sx={{ maxWidth: 1075, margin: '10px', backgroundColor: '#ffffff', boxShadow: '1px 1px 12px 2px rgba(34, 60, 80, 0.2)' }}>
              <CardContent>
                <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
                  Published by : <strong>{item?.by}</strong> , at  {item?.time}
                </Typography>
                <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
                  {item?.text}
                </Typography>
              </CardContent>
              <CardActions>
                <ThreePIcon />
                <Button onClick={() => openCommentsHandler(item?.id)} size="small" style={{ textDecoration: 'none', color: '#c84fc8' }}>{'Look answers'}</Button>
              </CardActions>
            </Card>
            {item?.id === comments[0]?.parent ? (
              <Grid>
                {comments?.map((comment: IComment) => (
                  <Grid sx={{ maxWidth: 875, marginTop: '-60px', marginBottom: '70px', marginLeft: '170px'}}>
                    <Card variant="outlined" sx={{ backgroundColor: '#fbc8fb', boxShadow: '2px 0px 17px 1px rgba(34, 60, 80, 0.6)' }}>
                      <CardContent>
                        <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
                          Published by : <strong>{comment?.by}</strong> , at  {comment?.time}
                        </Typography>
                        <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
                          {comment?.text}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            ) : null}
          </>
          ) : (
            <Grid style={{ paddingBottom: '10px' }} key={item?.id}>
              <Card variant="outlined" sx={{ maxWidth: 1075, margin: '10px', backgroundColor: '#ffffff' }}>
                <CardContent>
                  <Typography component='div' sx={{ fontSize: 14 }} color="text.secondary">
                    Published by : <strong>{item?.by}</strong> , at  {item?.time}
                  </Typography>
                  <Typography component='div' variant="body2" sx={{ fontSize: 18, fontWeight: 'bold', paddingTop: '50px' }}>
                    {item?.text}
                  </Typography>
                </CardContent>
                <Typography component='div' variant="body2" sx={{ display: 'flex', paddingTop: '10px' }}>
                  <Typography sx={{ paddingLeft: '10px', paddingTop: '1px' }}>
                    <ThreePIcon />
                  </Typography>
                  <Typography component='div' sx={{ paddingLeft: '10px', paddingTop: '1px' }}>
                    No answer yet
                  </Typography>
                </Typography>
              </Card>
            </Grid>
          )}
        </Grid>
      ))}
    </Grid>
  </>
  );
};

export default CommentsCard;
