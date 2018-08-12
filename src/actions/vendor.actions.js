import { userService } from '../services/';
import { history } from '../helper';

export const vendorAction = {
    getVendor,
    getVendorById,
    editVendorInfo
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

function getVendorById(id){

    return dispatch => {
        let apiEndpoint = 'vendors/'+ id;
        userService.getAllDetails(apiEndpoint)
        .then((response)=>{
            dispatch(editVendorsDetails(response.data.data));
        })
    };
}

function editVendorInfo(id, payload){
    return dispatch => {
        let apiEndpoint = 'vendors/'+ id;
        userService.put(apiEndpoint, payload)
        .then((response)=>{
            dispatch(updatedUserInfo());
            history.push('/vendor');
        }) 
    }
    // userService.post(apiEndpoint, payload)
    //     .then((response)=>{
    //         console.log(response.data);
    //         if (response.data.token) {
    //             localStorage.setItem('token', response.data.token);
    //             localStorage.setItem('auth', response.data.auth);
    //             dispatch(setUserDetails(response.data));
    //             history.push('/home');
    //         }
            
    //     })
}

export function changeVendorsList(vendor){
    return{
        type: "FETECHED_ALL_VENDOR",
        vendor: vendor
    }
}

export function editVendorsDetails(vendor){
    return{
        type: "VENDOR_DETAIL",
        id: vendor._id,
        name: vendor.name,
        mobile: vendor.mobile,
        phone_number: vendor.phone_number,
        address: vendor.address
    }
}

export function updatedUserInfo(){
    return{
        type: "USER_UPDATED"
    }
}