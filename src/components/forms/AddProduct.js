import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import FactCheckIcon from '@mui/icons-material/FactCheck';
import CategoryIcon from '@mui/icons-material/Category';

import './style.css'

const AddProduct = (props) => {
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 10 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    return (

        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <CategoryIcon />
                    </Avatar>
                    <h2 style={headerStyle}>eligibility checking</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to check your eligibility !</Typography>
                </Grid>
                <form>
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='amount' placeholder="Enter amount" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='minimum airtime usage' placeholder="Enter minimum airtime usage" required />
                    <TextField style={{ marginTop: '10px' }} type="number" id="outlined-basic" variant="outlined" fullWidth label='minimum airtime recharged' placeholder="Enter minimum airtime recharged" required />

                    <Button style={{ margin: '10px', alignSelf: 'center' }} type='submit' variant='contained' color='primary'>add</Button>


                </form>
            </Paper>
        </Grid>
    )
}

export default AddProduct;