import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// import classNames from 'classnames'
// import FormControl from '@material-ui/core/FormControl';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import IconButton from '@material-ui/core/IconButton';
// import Visibility from '@material-ui/icons/Visibility';
// import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { history } from '../helper';
import './login.component.css'
//import MuiThemeProvider from '@material-ui/styles/MuiThemeProvider';

const style = {
    margin: 15,
   };

const styles = theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    // root: {
    //     flexGrow: 1,
    //   },
    margin: {
      margin: theme.spacing.unit,
    },
    withoutLabel: {
      marginTop: theme.spacing.unit * 3,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },

    paper: {
        padding: theme.spacing.unit * 2,
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },

    button: {
        margin: theme.spacing.unit,
    },

    input: {
        display: 'none',
    },
  });

  
class Login extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
    }

    componentDidMount() {
        console.log(this.props);
        if(localStorage.getItem('auth')){
            history.push('/home');
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
    };

    login = event =>{
        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

   render() {
      const { classes } = this.props;
      return (
        <div className="login-margin">
            <Grid container spacing={24}>
                <Grid item xs={3}>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.paper}>
                        <div>
                        <TextField
                            label="Username"
                            value={this.state.username}
                            className={classes.textField}
                            onChange = {this.handleChange('username')}
                            />
                        <br/>
                        <br/>
                        <TextField
                            label="Password"
                            autoComplete="current-password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            className={classes.textField}
                            value={this.state.password}
                            onChange={this.handleChange('password')}
                        />
                        <br/>
                        <br/>
                        <Button variant="contained" color="primary" className={classes.button} onClick={(event)=>{this.login()}}>
                            Login
                        </Button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs={3}>
                </Grid>
            </Grid>
        </div>
      );
   }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
//export default Login;
//export default withStyles(styles)(Login);

const mapStateToProps = (state) =>{
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Login));