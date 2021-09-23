import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';

import DownloadQRCode from './screens/DownloadQRCode';
import DisplayQRCode from './screens/DisplayQRCode';
import NewDQRCode from './screens/NewDQRCode';

function App() {


    return (
     
      <Router>
        <Switch>
          <Route component={DownloadQRCode} path="/" exact />
          <Route component={NewDQRCode} path="/newdqrcode" exact />
          <Route component={DisplayQRCode} path="/displayqrcode" exact />
        </Switch>
      </Router>
     
    );

    
}

export default App;