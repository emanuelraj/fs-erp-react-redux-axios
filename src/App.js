import React, { Component } from 'react';
import './App.css';
//import { Router, Switch, Route, Link } from 'react-router-dom';
import { Router, Switch, Route} from 'react-router-dom';
//import Vendor from './vendors/vendor.component';
import Login from './login/login.component';
import { Home } from './home/';
import { history } from './helper';

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
                <Route exact path='/home' component={Home} />
                <Route exact path='/' component={Login} />
                {/* <Route exact path='/vendor' component={Vendor} />
                <Route exact path='/add-vendor' component={AddVendor} />
                <Route exact path='/add-vendor/:id' component={AddVendor} />
                <Route exact path='/product-catlog' component={ProductCatlog} /> */}
              </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
