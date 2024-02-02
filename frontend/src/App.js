import React from 'react';
import { BrowserRouter as Router, Route,Routes as Switch } from 'react-router-dom';
import SideMenu from './components/SideMenu';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import GroupComponent from './components/GroupComponent';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='container-fluid row'>
          <div className='col-2'>
            <SideMenu />
          </div>
          <div className='col-10'>
            <div className='container-fluid'>
              <Switch>
                <Route path="/" Component={Dashboard} />
                <Route path="/group" Component={GroupComponent} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
