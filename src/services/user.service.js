import axios from 'axios';
import config from '../config';


export const userService = {
    getAllDetails
};

function getAllDetails(apiEndpoint){
    console.log("Get All details");
    
    return axios.get(config.baseUrl+apiEndpoint).then((response)=>{
        return response;
    }).catch((err)=>{
        console.log(err);
    })
}