import { Button, Box, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { styles } from './styles';

const RatingInfo = () => {
  const [names, setNames] = useState({});
  const [ratingData, setRatingData] = useState({});

  const handleChange = (e) => {
    if (e.target.name === 'first_name' || 'last_name') {
      setNames((prev) => ({...prev, [e.target.name]: e.target.value}));
    } else {
      setRatingData((prev) => ({...prev, [e.target.name]: e.target.value }));
    }
  }

  console.log(ratingData)
  console.log(names);

  return (
    <Box sx={styles.ratingFormContainer}>
      <Typography variant='h5' color='primary' sx={{marginBottom: '20px'}}>Rating Information</Typography>
      <TextField onChange={(e) => handleChange(e)} name='first_name' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='First Name'/>
      <TextField onChange={(e) => handleChange(e)} name='last_name' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Last Name'/>
      <TextField onChange={(e) => handleChange(e)} name='line_1' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Address 1'/>
      <TextField onChange={(e) => handleChange(e)} name='line_2' variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Address 2'/>
      <TextField onChange={(e) => handleChange(e)} name='city' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='City'/>
      <TextField onChange={(e) => handleChange(e)} name='region' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='State'/>
      <TextField onChange={(e) => handleChange(e)} name='postal' required variant='standard' sx={styles.ratingInput} fullWidth={true} color='primary' label='Zip Code'/>
      <Button variant='contained' color='primary'>Submit</Button>
    </Box>
  )
}

export default RatingInfo;