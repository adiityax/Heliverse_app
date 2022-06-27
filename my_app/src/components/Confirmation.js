import React from 'react';
import { Container, Grid, List, ListItem, ListItemText, Button, Typography } from '@mui/material';
import ResponsiveAppBar from './Appbar.tsx';

const Confirmation = ({ prevStep, nextStep, values }) => {
  console.log(values);
  const { firstName, lastName, email, username, country, levelOfEducation } = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <div>
    <ResponsiveAppBar />
    <Container  component="main" maxWidth="xs" sx = {{padding: '2vw'}}>
        <Typography  component="h1" variant="h5" sx = {{fontFamily: 'serif'}}>
          Confirmation
        </Typography>  
      <div style = {{ border: 'solid black 1px ', padding: '4vw'}}>
        <List>
          <ListItem>
            <ListItemText primary="Email" secondary={email}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Username" secondary={username}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="First Name" secondary={firstName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Last Name" secondary={lastName}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Country of Residence" secondary={country}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Level of Education" secondary={levelOfEducation}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Previous }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Continue }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
    </div>
  )
}

export default Confirmation