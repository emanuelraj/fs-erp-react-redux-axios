import { connect } from 'react-redux';
import { vendorAction } from '../actions';
import React, { Component } from 'react';
import AppBar from '../menubar/appbar';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Nav from '../menubar/nav'; 
//import SimpleTable from '../component/table'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
//import Modal from '@material-ui/core/Modal';

const drawerWidth = 240;

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },

  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});


class Vendor extends Component {
    
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(vendorAction.getVendor());
    }
    
      handleChange = event => {
        this.setState({
          anchor: event.target.value,
        });
      };


      handleClick = (event, id) => {
        //const { history } = this.props;
        //console.log("Delete ", id);
        // axios.delete(apiBaseUrl + vendorsUrl + `/${id}`)
        // .then(() => {
        //   console.log('user deleted');
        //   this.componentDidMount();
        // });
      };
    
   render() {
     const { classes } = this.props;
     const { vendor } = this.props.vendor;
     
      return (
        <div className={classes.root}>
            <div className={classes.appFrame}>
            <AppBar/>
            <Nav />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                      <Typography>{'Vendor'}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                            
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                    </Grid>
                    <Grid item xs={6}>
                    </Grid>
                    <Grid item xs={3} container justify="flex-end">
                      <Button variant="contained" color="primary" className={classes.button} component='a' href="/add-vendor">
                        Add Vendor
                      </Button>      
                    </Grid>
                </Grid>
                <br />
                <br />
                <Grid container spacing={24}>
                  <Paper className={classes.root}>
                      <Table className={classes.table}>
                          <TableHead>
                          <TableRow>
                              <TableCell>Name</TableCell>
                              <TableCell numeric>Mobile</TableCell>
                              <TableCell numeric>Phone</TableCell>
                              <TableCell>Address</TableCell>
                              <TableCell>Action</TableCell>
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {vendor.map(n => {
                              return (
                              <TableRow key={n._id}>
                                  <TableCell component="th" scope="row">
                                  {n.name}
                                  </TableCell>
                                  <TableCell numeric>{n.mobile}</TableCell>
                                  <TableCell numeric>{n.phone_number}</TableCell>
                                  <TableCell>{n.address}</TableCell>
                                  <TableCell>
                                    <IconButton className={classes.button} aria-label="Edit" component='a' href={`/edit-vendor/${n._id}`}>
                                      <EditIcon />
                                    </IconButton>
                                    <IconButton className={classes.button} aria-label="Delete" onClick={(event) => this.handleClick(event, n._id)}>
                                      <DeleteIcon />
                                    </IconButton>
                                    {/* <Modal
                                        aria-labelledby="simple-modal-title"
                                        aria-describedby="simple-modal-description"
                                        open={this.state.open}
                                        onClose={this.handleClose}
                                      >
                                        <div style={getModalStyle()} className={classes.paper}>
                                          <Typography variant="title" id="modal-title">
                                            Text in a modal
                                          </Typography>
                                          <Typography variant="subheading" id="simple-modal-description">
                                            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                          </Typography>
                                        </div>
                                      </Modal> */}
                                  </TableCell>
                              </TableRow>
                              );
                          })}
                          </TableBody>
                      </Table>
                  </Paper>
                </Grid>
            </main>
            </div>
        </div>
      );
   }
}

// class Vendor extends React.Component{

//     getAllVendor(e){
//         console.log("Click");
//         const { dispatch } = this.props;
//         dispatch(userActions.getVendor());
//     }

//     render(){
//         return(
//             <button onClick={(event)=>{this.getAllVendor()}}>
//                 Click Here
//             </button>
//         )
//     }
// }

Vendor.propTypes = {
    classes: PropTypes.object.isRequired,
};


//export default BoxCon
const mapStateToProps = (state) =>{
    return state;
}


export default connect(mapStateToProps)(withStyles(styles)(Vendor));
//export default connect(mapStateToProps)(Vendor);

