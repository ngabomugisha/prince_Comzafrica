import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import FactCheckIcon from '@mui/icons-material/FactCheck';

import './style.css'

const CheckEligibility = (props) => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 10 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (

        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <FactCheckIcon />
                    </Avatar>
                    <h2 style={headerStyle}>eligibility checking</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to check your eligibility !</Typography>
                </Grid>
                <form>
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='Age' placeholder="Enter your age" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='age on network' placeholder="Enter your age on network" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='average airtime usage amount ' placeholder="Enter your average airtime usage amount" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='average airtime recharge amount' placeholder="Enter your average airtime recharge amount" required />

                    <Button style={{ margin: '10px', alignSelf: 'center' }} type='submit' variant='contained' color='primary'>Check</Button>


                </form>
            </Paper>
        </Grid>
    )
}

export default CheckEligibility;