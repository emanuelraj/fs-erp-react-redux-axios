import { userService } from '../services/';
import { history } from '../helper';

export const userActions = {
    login,
    logout
};

function login(username, password){
    return dispatch => {
        let apiEndpoint = 'auths/login';
        let payload = {
            email_id: username,
            password: password
        }
        userService.post(apiEndpoint, payload)
        .then((response)=>{
            console.log(response.data);
            if (response.data.token) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('auth', response.data.auth);
                dispatch(setUserDetails(response.data));
                history.push('/home');
            }
            
        })
    };
}

function logout(){
    return dispatch => {
        localStorage.removeItem('auth');
        localStorage.removeItem('token');
        dispatch(logoutUser());
        history.push('/');
    }
}

export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token
    }
}

export function logoutUser(){
    return{
        type: "LOGOUT_SUCCESS",
        auth: false,
        token: ''
    }
}