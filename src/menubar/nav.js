import React from 'react';
import PropTypes from 'prop-types';
//import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
// import MenuItem from '@material-ui/core/MenuItem';
// import TextField from '@material-ui/core/TextField';
// import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
//import { mailFolderListItems, otherMailFolderListItems } from './tileData';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { userActions } from '../actions';
import { connect } from 'react-redux';

//import Vendor from '../vendor/vendor';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
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
});

class Navigation extends React.Component {

    constructor(props){
        super(props);
        this.state={
            anchor: 'left',
        }
    }

    logout = event =>{
        const { dispatch } = this.props;
        console.log(this.props);
        console.log(localStorage.getItem('auth'));
        dispatch(userActions.logout());
    }

    render() {
        const { classes } = this.props;
        const { anchor } = this.state;

        return(
            <Drawer
                variant="permanent"
                classes={{
                paper: classes.drawerPaper,
                }}
                anchor={anchor}
            >
                <List component="nav">
                    <ListItem button component='a' href="/home">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home"/>
                    </ListItem>

                    <ListItem button component='a' href="/vendor">
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Vendors"/>
                    </ListItem>
                    <ListItem button onClick={(event)=>{this.logout()}}>
                        <ListItemIcon>
                            <DraftsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout"/>
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        );
    }
}

Navigation.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
//export default withStyles(styles)(Navigation);

const mapStateToProps = (state) =>{
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}

export default connect(mapStateToProps)(withStyles(styles)(Navigation));