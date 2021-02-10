import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

const image =
  'https://images.squarespace-cdn.com/content/v1/587fedb686e6c00a383fbfca/1610475164705-3W9OOZW14S4PJORTQL2B/ke17ZwdGBToddI8pDm48kNHdQa-cO5cV_GNWZBIIX2sUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKctCYWQf02wf8Tt064TYQiHNGG9Xc6kVepDrEUMf_p3Zm0eDuYk2wPglryzuqnQBEq/ABOUT-PAGE-BOX_FINAL-WEB_v4.jpg?format=1000w';

export default function BeautySpecial() {
  const classes = styles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickClose = () => {
    setOpen(false);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <p>NOVO! NOVO! NOVO!</p>
      </Grid>
      <Grid item xs={12}>
        <Card className={classes.root} variant="outlined">
          <CardMedia
            component="img"
            alt="picture"
            image={image}
            className={classes.media}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="h5" component="h2">
              <p> "Beauty special" </p>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Da li zelite da iznenadite Vama dragu osobu?
              <br />
              <br />
              Da li zelite da joj pokazete da Vam znaci?
              <br />
              <br />
              Onda je "Beauty special" korpa pravi poklon!
            </Typography>
            <CardActions>
              <Button className={classes.button} onClick={handleClickOpen}>
                Saznaj vise
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </Grid>
      <Dialog
        open={open}
        onClose={handleClickClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.dialogTitle}>
          "Beauty special"
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description1">
            Sastav korpe: krema za negu lica, krema za ruke, aromaticno ulje,
            karmin, sjaj za usne, puder, cetkica.
          </DialogContentText>
          <DialogContentText
            id="alert-dialog-description2"
            className={classes.dialogTitle}
          >
            <p style={{ justifyContent: 'center' }}>Cena: 3000 din</p>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description1">
            Za vise informacija pozovite nas na broj:{' '}
            <a href="tel+3816400001111">+3816400001111</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClickClose} className={classes.dialogButton}>
            Zatvori
          </Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
}

const styles = makeStyles((theme) =>
  createStyles({
    root: {
      marginLeft: '5%',
      marginRight: '5%',
      backgroundColor: '#dfd7cc',
      border: '2px',
      borderStyle: 'solid',
      borderColor: '#550d0e',
    },
    media: {
      width: '40%',
      float: 'left',
      margin: '2%',
    },
    content: { margin: 'auto' },
    button: {
      backgroundColor: '#550d0e',
      width: '50%',
      margin: 'auto',
      marginTop: '8%',
      color: '#dfd7cc',
    },
    dialogTitle: {
      color: '#550d0e',
      margin: 'auto',
      justifyContent: 'center',
    },
    dialogButton: {
      backgroundColor: '#550d0e',
      width: '50%',
      marginLeft: 'auto',
      marginRight: 'auto',
      color: '#dfd7cc',
    },
  })
);
