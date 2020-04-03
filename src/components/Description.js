import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
    '& > *': {
    //   margin: theme.spacing(1),
    //   width: theme.spacing(16),
      // height: theme.spacing(50),
    },
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
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
        <Card className={classes.root}>
          <CardContent href="../assets/images/">
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}