import { createStyles, Grid, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react';

export default function HomePage() {
  const classes = styles();
  const backgroundImage =
    'https://image.freepik.com/free-photo/natural-skincare-cosmetic-product-orange-background_23-2147817986.jpg';
  const txt = 'Mi smo nega namenjana svim zenama, bilo kog uzrasta.';

  let i = 0;
  function typeWriter() {
    if (i < txt.length) {
      document.getElementById('demo').innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, 15);
    }
  }

  useEffect(() => {
    typeWriter();
  }, []);

  return (
    <div className={classes.root}>
      <div
        className={classes.bg}
        style={{ backgroundImage: 'url(' + backgroundImage + ')' }}
      ></div>
      <div className={classes.code}>
        <Grid container>
          <Grid item xs={12} className={classes.gridItem}>
            <p>Ko smo mi?</p>
          </Grid>
          <Grid item xs={12} className={classes.gridItem}>
            <p id="demo"></p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

const styles = makeStyles(() =>
  createStyles({
    root: {
      position: 'absolute',
      top: 60,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: '#121212',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bg: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover',
      mixBlendMode: 'overlay',
    },
    code: {
      // height: '100vh',
      color: 'white',
      width: ' 100%',
      display: 'flex',
      backgorundPosition: ' center',
      alignItems: 'center',
      backgroundSize: 'cover',
      justifyContent: 'center',
    },
    gridItem: {
      width: '70%',
    },
  })
);
