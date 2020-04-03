import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import BackgroundImage from '../assets/images/edp.png';
import Background2 from '../assets/images/Emily.png';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  root: {
    // background: `url(${Background2})`,
    display: 'flex',
    flexWrap: 'wrap',
    // '& > *': {
    // //   margin: theme.spacing(1),
    // //   width: theme.spacing(16),
    //   height: theme.spacing(50),
    // },
  },
  main: {
    backgroundImage: `url(${BackgroundImage})`,
  }
}));

export default function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box component="main" className={classes.main} width={1} height="100%"/>
    </div>
  );
}