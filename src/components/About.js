import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import EmilyImage from '../assets/images/EmilyImage.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: theme.spacing(4),
    textAlign: 'left',
    backgroundColor: theme.backgroundColor,
  },
  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
  },
}));

export default function About() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Container component="main" className={classes.main}>
            <Typography variant="h4" component="h2" gutterBottom>
                About Me
            </Typography>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={3}>
                    <Avatar alt="Emily Polansky-Lone" src={EmilyImage}className={classes.large} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Typography variant="body1">
                        I am is a full stack web developer well versed in JavaScript, HTML, CSS, TypeScript, Node, React, MySQL, and mongoDB. I am a hardworking, fast learner who enjoys working in a group setting. I also has very strong attention to detail and organizational skills, which is applied to the work I do and relationships with clients to help them achieve what they want in the best way possible. I have assisted in the creation of web applications from mock-up to deployment and strive to write clean, reusable code. My professional experience as a web developer combined with my background in anthropology has provided me with the skills to create accessible and user initiative web applications.
                    </Typography>
                 </Grid>
            </Grid>
        </Container>
      </div>
    );
  }