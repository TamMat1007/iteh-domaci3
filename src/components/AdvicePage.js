import {
  Card,
  CardContent,
  CardMedia,
  createStyles,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

export default function AdvicePage({ advices }) {
  const classes = styles();
  const [text, setText] = useState('');

  const filterAdvices = advices.filter((item) => {
    if (text === '') return advices;
    else {
      return item.headline.toLocaleLowerCase().includes(text);
    }
  });

  return (
    <div style={{ backgroundColor: '#FFF7EC' }}>
      <Grid container spacing={2} className={classes.root}>
        <Grid
          container
          direction="row"
          justify="center"
          style={{ margin: 'auto', padding: 5 }}
        >
          <p style={{ paddingRight: 10 }}>Pretrazi savete:</p>
          <TextField
            id="outlined-basic"
            label="unesite tekst..."
            variant="outlined"
            onChange={(e) => setText(e.target.value)}
          />
        </Grid>
        {filterAdvices.map((element, index) => {
          return (
            <Grid item key={index} xs={6}>
              <Card className={classes.gridItem}>
                <CardMedia
                  component="img"
                  alt="picture"
                  image={element.image}
                  className={classes.media}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {element.headline}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {element.about}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

const styles = makeStyles(() =>
  createStyles({
    root: {
      margin: 'auto',
    },
    media: {
      height: 150,
    },
    gridItem: {
      // borderWidth: 2,
      borderColor: '#550d0e',
      backgroundColor: '#dfd7cc',
      // width: '50%',
    },
  })
);
