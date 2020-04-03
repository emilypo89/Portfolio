import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © Emily Polansky-Lone 2020'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
  icon: {
      margin: theme.spacing(),
  }
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <footer className={classes.footer}>
        <Container maxWidth="sm">
            <IconButton
                edge="end"
                aria-label="linkedIn"
                href="https://www.linkedin.com/in/emily-polansky-lone"
                target="_blank"
                color="inherit"
                >
                <LinkedInIcon className={classes.icon}/>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="github"
                href="https://github.com/emilypo89"
                target="_blank"
                color="inherit"
                >
                <GitHubIcon className={classes.icon}/>
            </IconButton>
            <IconButton
                edge="end"
                aria-label="email"
                href="mailto:emilypo89@gmail.com"
                color="inherit"
                >
                <EmailIcon className={classes.icon}/>
            </IconButton>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}