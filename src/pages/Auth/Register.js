import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import './style.css'

const Register = (props) => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
  const headerStyle = { margin: 10 }
  const avatarStyle = { backgroundColor: '#1bbd7e' }
  return (
    
    <Grid>
      <Paper style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
        </Grid>
        <form>
          <TextField style={{ marginTop: '10px' }} id="outlined-basic" variant="outlined" fullWidth label='First Name' placeholder="Enter your first name" required />
          <TextField style={{ marginTop: '10px' }} id="outlined-basic" variant="outlined" fullWidth label='Last Name' placeholder="Enter your last name" required />
          <TextField style={{ marginTop: '10px' }} id="outlined-basic" variant="outlined" fullWidth label='username' placeholder="Enter your username" required />
          <TextField style={{ marginTop: '10px' }} id="outlined-basic" variant="outlined" fullWidth label='Password' placeholder="Enter your password" required />
          <TextField style={{ marginTop: '10px' }} id="outlined-basic" variant="outlined" fullWidth label='Confirm Password' placeholder="Confirm your password" required />

          <Button style={{ margin: '10px', alignSelf: 'center' }} type='submit' variant='contained' color='primary'>Sign up</Button>

          <Typography > If you already have an account &nbsp;
            <Link href="login" >
              Login
            </Link>
          </Typography>
        </form>
      </Paper>
    </Grid>
  )
}

export default Register;