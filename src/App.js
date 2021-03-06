import React, { Component } from 'react';
import Routes from './router';
import { Switch, Route, BrowserRouter as  Router, Link} from 'react-router-dom';
import TopBar from './views/TopBar/TopBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar />
        <Router>
          <Switch>{this.showContentMenus(Routes)}</Switch>
        </Router>
      </div>
    )
  };
  showContentMenus = (routes) => {     
    var result = null;
    if (routes.length > 0) { 
      result = routes.map((route, index) => {
        return (       
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />       
        );
      });
    }
    return result;
  }
}

export default App;
