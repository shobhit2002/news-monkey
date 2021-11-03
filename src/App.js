import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default class App extends Component {

  apikey = "daa78897ad454ae19d6108fbef65ea22";
  // apikey="d093053d72bc40248998159804e0e67d";
  //apikey = "a7d27e7193de4024a23fb5120be24672";

  render() {
    return (
      <div>

      <Router>
          <NavBar/>
          <Switch>
              <Route exact path="/"><News key="general" pageSize={5} apikey={this.apikey} country="in" category="general" /></Route>
              <Route exact path="/sports"><News key="sports" pageSize={5} apikey={this.apikey} country="in" category="sports" /></Route>
              <Route exact path="/entertainment"><News key="entertainment" apikey={this.apikey} pageSize={5} country="in" category="entertainment" /></Route>
              <Route exact path="/business"><News key="business" pageSize={5} apikey={this.apikey} country="in" category="business" /></Route>
              <Route exact path="/science"><News key="science" pageSize={5} apikey={this.apikey} country="in" category="science" /></Route>
            </Switch>
      </Router>
      </div>
    )
  }

}

