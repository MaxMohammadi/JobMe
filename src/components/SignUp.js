import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Logo from '../icons/JobMe_Logo.png'
import { withStyles } from "@material-ui/core/styles";


function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://JobMe.live/">
                JobMe
      </Link>{' '}
            {new Date().getFullYear()}
            {'. We love our users!'}
        </Typography>
    );
}

const styles = (theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        width: '25%',
        float: 'left',
        backgroundColor: '#BAE8E8',
        color: '#5e5e5e',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        margin: theme.spacing(3, 0, 2),
        "&:hover": {
            backgroundColor: '#7FDBFF',
            color: 'white',
        }
    },
    login: {
        float: 'right',
        width: '25%',
        backgroundColor: '#E3F6F5',
        color: '#5e5e5e',
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        margin: theme.spacing(3, 0, 2),
        "&:hover": {
            backgroundColor: '#7FDBFF',
            color: 'white',
        }
    },
    logo: {
        width: '50%',
    },
});



class SignUp2 extends React.Component {


    render() {
        const { classes } = this.props;
        return (

            <Container component="main" maxWidth="xs" align='center'>

                <CssBaseline />
                <div className={classes.paper}>
                    {/*<img src={Logo} className={"logo"}></img>*/}
                    <Typography component="header1" variant="h3" align="center">Ready to sign up? It's free!</Typography>
                    <Typography component="h1" variant="h5" align="center">
                        An easy job search awaits.
                </Typography>
                    <Box border={1} width={'150%'} padding={'15%'}>
                        <Typography component="h2" variant="h6" align="left" width="150%">Sign up for an account here.</Typography>
                        <form className={classes.form} noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: '45%', marginRight: '5%' }}
                                id="first"
                                label="First Name"
                                name="firstName"
                                autoComplete="firstName"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                style={{ width: '45%', marginLeft: '5%' }}
                                id="last"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lastName"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/*<FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />*/}
                            <div>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Register
                        </Button>
                                <Button
                                    type="login"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.login}>
                                    Log In
                        </Button>
                            </div>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2" align="left">
                                        Forgot password?
                                </Link>
                                </Grid>
                                <Grid item>

                                </Grid>
                            </Grid>
                        </form>
                    </Box>
                </div >
                <Box mt={8}>
                    <Copyright />
                </Box>
                <Box maxWidth="xs" padding="10%" align="center">
                    <img src={Logo} className={classes.logo}></img>
                </Box>
            </Container >

        );
    }

}

export default withStyles(styles, { withTheme: true })(SignUp2);