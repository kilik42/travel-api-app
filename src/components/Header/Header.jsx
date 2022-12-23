import React from 'react';
import {Autocomplete} from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
const Header = () => {
  return (
    <AppBar position ="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" >
          Travel Advisor
        </Typography>
          
          <Typography variant="h6" >
            Explore new places
          </Typography>
      </Toolbar>
          {/* <Autocomplete> */}
        </AppBar>
  )
}

export default Header