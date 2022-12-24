// import logo from './logo.svg';
import './App.css';
import React from 'react';
import {CssBaseline, Grid} from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/Lists/List';
import Map from './components/Map/Map';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';

function App() {
  return (
    <>

      <CssBaseline />
        <h1>hello world</h1>
        <Header />
        <Grid container spacing={3} style={{width: '100%'}}>
          <Grid item xs={12} md={4}>
            <List />
          </Grid>
          <Grid item xs={12} md={8}>
            <Map />
          </Grid>
        </Grid>

        
    </>
  );
}

export default App;
