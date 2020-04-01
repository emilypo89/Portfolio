import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BackgroundImage from '../assets/images/Banner.png';
import Background2 from '../assets/images/Emily.png';

const useStyles = makeStyles((theme) => ({
  root: {
    background: `url(${Background2})`,
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
      height: theme.spacing(50),
    },
  },
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} />
    </div>
  );
}