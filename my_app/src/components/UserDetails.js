import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button } from '@mui/material';
import ResponsiveAppBar from './Appbar.tsx';

const UserDetails = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // let name = e.target.name;
    // let val = e.target.value;
    if(handleValidation()){
      alert("Form Submitted")
    }
    else{
      alert("Form has errors");
    }
  }

  const handleValidation = () => {
    let errors = {};
    let formIsValid = true;

    if(!values['username']) {
      formIsValid = false;
      errors['username'] = "Cannot be empty";
    }

    if(typeof(values['username'])!== "undefined") {
      if(!values['username'].match(/^[a-zA-Z]+$/)){
        formIsValid = false;
        errors['username'] = "Only letters";
      }
    }

    //Email
    if (!values["email"]) {
      formIsValid = false;
      errors["email"] = "Cannot be empty";
    }

    if (typeof(values["email"]) !== "undefined") {
      let lastAtPos = values["email"].lastIndexOf("@");
      let lastDotPos = values["email"].lastIndexOf(".");

      if (
          !(
            lastAtPos < lastDotPos &&
            lastAtPos > 0 &&
            values["email"].indexOf("@@") === -1 &&
            lastDotPos > 2 &&
            values["email"].length - lastDotPos > 2
          )
        ) {
          formIsValid = false;
          errors["email"] = "Email is not valid";
        }
      }

      this.setState({ errors: errors });
      return formIsValid;
  }

    // switch(name){
    //     case 'username':
    //         if(value.length >= 4){
    //             return(true)
    //         }
    //         else{
    //             return(false)
    //         }
    //         break;

    //     case 'email':
    //         if(
    //             new RegExp( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(value)
    //         ){
    //             return(true)
    //         }
    //         else{
    //             return(false)
    //         }
    //         break;
    //     case 'password':
    //         if(
    //             new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/).test(value)
    //         ){
    //             return(true)
    //         }
    //         else{
    //             return(false)
    //         }
    //         break;
    //     default:
    //         break;    
    // }

  return (
    <div>
    <ResponsiveAppBar />
    <Container  component="main" maxWidth="xs" sx = {{padding: '2vw'}}>
      <div>
        <Typography  component="h1" variant="h5"
        sx = {{fontFamily: 'serif'}}>
          User Details
        </Typography>
        <form style = {{ border: 'solid black 1px ', padding: '4vw'}} onSubmit = { handleSubmit }>
          <Grid container spacing={2}>
              {/* email address */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Email Address"
                  label="Email Address"
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  // variant="outlined"
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
              <br />
              {/* username */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Username"
                  label="Username"
                  onChange={handleChange('username')}
                  defaultValue={values.username}
                  // variant="outlined"
                  autoComplete="username"
                  fullWidth
                />
              </Grid>
              <br />
              {/* password */}
              <Grid item xs={12}>
                <TextField 
                  placeholder="Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  // variant="outlined"
                  autoComplete="password"
                  fullWidth
                  type="password"
                />
              </Grid>
          </Grid>
          <br />
          <Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx = {{background: 'rgb(46, 48, 118)'}}
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
    </div>
  )
}

export default UserDetails