import React, { Component } from 'react';
import './App.css';
//import { Router, Switch, Route, Link } from 'react-router-dom';
import { Router, Switch, Route} from 'react-router-dom';
import Vendor from './vendors/vendor.component';
import AddVendor from './vendors/addvendor.component'
import Login from './login/login.component';
import { Home } from './home/';
import { history } from './helper';
import { PrivateRoute } from './components';


class App extends Component {
  constructor(props) {
      super(props);
      //const { dispatch } = this.props;
      history.listen((location, action) => {
          // clear alert on location change
          //dispatch();
      });
  }


  render() {
    return (
      <div className="App">
        <Router history={history}>
          <div>            
              <Switch>
                <PrivateRoute exact path='/home' component={Home} />
                <PrivateRoute exact path='/vendor' component={Vendor} />
                <PrivateRoute exact path='/edit-vendor/:id' component={AddVendor} />
                <PrivateRoute exact path='/add-vendor' component={AddVendor} />
                <Route exact path='/' component={Login} />
                {/* 
                <Route exact path='/product-catlog' component={ProductCatlog} /> */}
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
