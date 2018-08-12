import { userService } from '../services/';
import { history } from '../helper';

export const userActions = {
    getVendor,
    login
};


function getVendor(){

    return dispatch => {
        let apiEndpoint = 'vendors';
        userService.getAllDetails(apiEndpoint)
        .then((response)=>{
            console.log(response.data.data);
            dispatch(changeVendorsList(response.data.data));
        })
    };
}

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

export function changeVendorsList(vendor){
    return{
        type: "GET_ALL_VENDOR_DETAILS",
        vendor: vendor
    }
}

export function setUserDetails(user){
    return{
        type: "LOGIN_SUCCESS",
        auth: user.auth,
        token: user.token
    }
}