import React from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import useStyles from './styles';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined';
import Rating from '@material-ui/lab/Rating';


const Map = () => {
  const classes = useStyles();
  const isMobile = useMediaQuery('(min-width:600px)');
  const coordinates = {lat: 0, lng: 0};
  return (
    <div className={classes.mapContainer}>
      <LoadScript

      googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
      >
        <GoogleMap
          mapContainerStyle={{width: '100%', height: '100%'}}
          zoom={14}    
          center={coordinates}
          margin = {[50,50,50,50]}      
          options={''}
          onChange={''} 
          onChildClick={''}      
          
          />
      </LoadScript> 
    </div>
  )
}

export default Map