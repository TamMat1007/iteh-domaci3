import { createStyles, makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

export default function NavBar() {
  const classes = styles();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="App">
      <AppBar position="static" className={classes.header}>
        <Grid container spacing={2} className={classes.grid}>
          <Grid item xs={6}>
            <Button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              <p style={{ color: 'white', fontWeight: 80 }}>Menu</p>
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
              className={classes.menu}
            >
              <MenuItem>
                <Link to="/">
                  <Button onClick={handleClose}>Pocetna</Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/saveti">
                  <Button onClick={handleClose}>Saveti</Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/predlog">
                  <Button onClick={handleClose}>Dodaj predlog</Button>
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/specijal">
                  <Button onClick={handleClose}>Poklon</Button>
                </Link>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </AppBar>
    </div>
  );
}

const styles = makeStyles(() =>
  createStyles({
    header: {
      backgroundColor: '#550d0e',
      color: '#fff7ec',
    },
    grid: {
      flex: 1,
    },
    menu: {
      color: '#fff7ec',
      margin: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);
