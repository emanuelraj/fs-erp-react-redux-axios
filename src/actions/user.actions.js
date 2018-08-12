import { userService } from '../services/';

export const userActions = {
    getVendor
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


export function changeVendorsList(vendor){
    return{
        type: "GET_ALL_VENDOR_DETAILS",
        vendor: vendor
    }
}