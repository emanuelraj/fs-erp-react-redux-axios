import React from 'react';
//import Box from '../component/box.component';
import { connect } from 'react-redux';
import { userActions } from '../actions';


class Vendor extends React.Component{

    getAllVendor(e){
        console.log("Click");
        const { dispatch } = this.props;
        dispatch(userActions.getVendor());
    }

    render(){
        return(
            <button onClick={(event)=>{this.getAllVendor()}}>
                Click Here
            </button>
        )
    }
}

//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}

export default connect(mapStateToProps)(Vendor);