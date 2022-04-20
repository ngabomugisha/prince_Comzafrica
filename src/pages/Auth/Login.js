import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockIcon from '@mui/icons-material/Lock';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import './style.css'

const Login = (props) => {

    const paperStyle = { padding: 20, height: '73vh', width: 300, margin: "0 auto" }
    const avatarStyle = { backgroundColor: '#1bbd7e' }




    const history = useHistory();
    const [isLoading, setIsLoading] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errMessage, setErrMessage] = React.useState('');


    const handleSubmit = async (event) => {
        console.log("handlesubmit")
        if (!password || !username) {
            setErrMessage("Email or Password are empty")
            console.log(errMessage)
            return setErrMessage;
        }
        setErrMessage('');
        setIsLoading(true);
        try {
            const res = true;
            console.log(res, "RES")
            if (res && username === "user") {
                history.replace('/userHome');
                history.go()
                setIsLoading(false);
            }
            else if (res && username === "admin") {
                history.replace('/adminHome');
                history.go()
                setIsLoading(false);
            }

        } catch (error) {
            console.log(error)
            setErrMessage(error.message || error.error || error);
            setIsLoading(false);
        }

    };

    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <TextField onChange={(e) => setUsername(e.target.value)} style={{ marginTop: '10px' }} id="outlined-basic" variant="outlined" label='Username' placeholder='Enter username' fullWidth required />
                <TextField onChange={(e) => setPassword(e.target.value)} style={{ marginTop: '10px' }} id="outlined-basic" variant="outlined" label='Password' placeholder='Enter password' type='password' fullWidth required />

                <Button type='submit' onClick={handleSubmit} color='primary' variant="contained" fullWidth>Sign in</Button>

                <Typography > Do you have an account ?
                    <Link href="register">
                        Sign Up
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default Login