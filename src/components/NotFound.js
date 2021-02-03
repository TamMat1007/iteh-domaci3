import { createStyles, makeStyles } from '@material-ui/core';
import React from 'react';
function NotFound() {
  const classes = useStyles();

  const image = 'http://i.giphy.com/l117HrgEinjIA.gif';
  return (
    <div className={classes.fourOhFour}>
      <div
        className={classes.bg}
        style={{ backgroundImage: 'url(' + image + ')' }}
      ></div>
      <div className={classes.code}>Page not found.</div>
    </div>
  );
}

const useStyles = makeStyles(() =>
  createStyles({
    fourOhFour: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: '#121212',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundSize: 'cover',
      mixBlendMode: 'overlay',
    },
    code: {
      fontSize: '90px',
      height: '100%',
      color: 'white',
      width: '100%',
      display: 'flex',
      backgorundPosition: ' center',
      alignItems: 'center',
      backgroundSize: 'cover',
      justifyContent: 'center',
    },
  })
);

export default NotFound;
