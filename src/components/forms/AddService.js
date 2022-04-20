import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';

import './style.css'

const AddService = (props) => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 10 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (

        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AutoAwesomeMotionIcon />
                    </Avatar>
                    <h2 style={headerStyle}>eligibility checking</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to check your eligibility !</Typography>
                </Grid>
                <form>
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='minimum subscriber age' placeholder="Enter minimum subscriber age" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='minimum age on network' placeholder="Enter minimum age on network" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='airtime recharged' placeholder="Enter airtime recharged" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='airtime usage' placeholder="Enter airtime usage" required />

                    <Button style={{ margin: '10px', alignSelf: 'center' }} type='submit' variant='contained' color='primary'>add</Button>


                </form>
            </Paper>
        </Grid>
    )
}

export default AddService;