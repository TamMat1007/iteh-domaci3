import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Snackbar,
  TextField,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';

export default function SuggestionPage({ addNewAdvice }) {
  const classes = styles();
  const [headline, setHeadline] = useState('');
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('');

  const [openError, setOpenError] = useState(false);
  const [openSuccess, setOpenSuccess] = useState(false);

  const handleClearForm = () => {
    setAbout('');
    setImage('');
    setHeadline('');
  };
  
  const handleSubmit = () => {
    if (image !== '' && headline !== '' && about !== '') {
      addNewAdvice({
        headline,
        about,
        image,
      });
      handleClearForm();
      setOpenSuccess(true);
    } else {
      setOpenError(true);
    }
  };

  const handleClose = () => {
    setOpenError(false);
    setOpenSuccess(false);
  };

  return (
    <Grid container spacing={2}>
      <Snackbar open={openError} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant="filled" severity="error" onClose={handleClose}>
          Nisu ispravna sva polja
        </Alert>
      </Snackbar>
      <Snackbar
        open={openSuccess}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <Alert variant="filled" severity="success" onClose={handleClose}>
          Uspesno dodat savet.
        </Alert>
      </Snackbar>
      <Grid item xs={12}>
        <p>Imas savet koji zelis da podelis sa drugima?</p>
      </Grid>
      <Grid container direction="row" justify="center" className={classes.form}>
        <Grid item xs={12}>
          <Grid item sx={2}>
            <p className={classes.label}>Naslov:</p>
          </Grid>
          <Grid item sx={5}>
            <TextField
              value={headline}
              id="filled-basic"
              label="unesite naslov"
              variant="outlined"
              className={classes.textInput}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item sx={2}>
            <p className={classes.label}>Tekst:</p>
          </Grid>
          <Grid item sx={5}>
            <TextField
              id="standard-multiline-flexible"
              value={about}
              multiline
              label="unesite tekst"
              variant="outlined"
              rows={6}
              className={classes.textInput}
              onChange={(e) => setAbout(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid item sx={2}>
            <p className={classes.label}>Link slike:</p>
          </Grid>
          <Grid item sx={5}>
            <TextField
              id="standard-multiline-flexible"
              value={image}
              label="unesite link"
              variant="outlined"
              className={classes.textInput}
              onChange={(e) => setImage(e.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button className={classes.button} onClick={handleSubmit}>
            Potvrdi
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

const styles = makeStyles(() =>
  createStyles({
    form: {
      margin: 'auto',
      backgroundColor: '#dfd7cc',
      borderWidth: 2,
      width: '60%',
      height: '50%',
    },
    label: { width: '20%' },
    textInput: {
      width: '80%',
    },
    button: {
      backgroundColor: '#a13842',
      margin: '2%',
      width: '30%',
      border: '2px',
      borderStyle: 'solid',
      borderColor: '#550d0e',
    },
  })
);
