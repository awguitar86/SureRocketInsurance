import { Button, Box, TextField, Typography, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { styles } from './styles';

const RatingInfo = ({handlePostRating}) => {
  const [names, setNames] = useState({});
  const [address, setAddress] = useState({});
  const [postal, setPostal] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === 'first_name' || e.target.name === 'last_name') {
      setNames((prev) => ({...prev, [e.target.name]: e.target.value}));
    } else {
      setAddress((prev) => ({...prev, [e.target.name]: e.target.value }));
    }
  }

  const disabled = (
    ['first_name', 'last_name'].every((key) => Object.keys(names).includes(key)))
    && (['line_1', 'city', 'region'].every((key) => Object.keys(address).includes(key)))
    && (postal.length === 5);


  return (
    <Box sx={styles.ratingFormContainer}>
      <Typography variant='h5' color='primary' sx={{marginBottom: '20px'}}>Rating Information</Typography>
      <TextField onChange={(e) => handleChange(e)} name='first_name' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='First Name'/>
      <TextField onChange={(e) => handleChange(e)} name='last_name' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Last Name'/>
      <TextField onChange={(e) => handleChange(e)} name='line_1' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Address 1'/>
      <TextField onChange={(e) => handleChange(e)} name='line_2' variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Address 2'/>
      <TextField onChange={(e) => handleChange(e)} name='city' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='City'/>
      <TextField onChange={(e) => handleChange(e)} name='region' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='State'/>
      <TextField onChange={(e) => setPostal(e.target.value)} name='postal' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Zip Code'/>
      { !isLoading ? (
        <Button
          disabled={!disabled}
          variant='contained'
          color='primary'
          onClick={() => {
            handlePostRating({...names, address: {...address, postal}});
            setIsLoading(true);
          }}>
            Submit
        </Button>
      ) : (
        <CircularProgress />
      )}
    </Box>
  )
}

export default RatingInfo;