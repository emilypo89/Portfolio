import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
  },
}));

export default function Description() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container component="main" className={classes.main} >
        <Typography variant="h2" component="h1" gutterBottom>
        Full stack web developer who enjoys creating engaging and accessible applications.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Check out some of my work'}
        </Typography>
        <Button variant="contained" color="primary">
          Portfolio
        </Button>
        <Button variant="contained" color="primary">
          GitHub
        </Button>
      </Container>
    </div>
  );
}