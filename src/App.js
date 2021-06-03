import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Header'
import WatchList from './components/WatchList';
import Watched from './components/Watched';
import Add from './components/Add';
import './App.css';
import './lib/font-awesome/css/all.min.css'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <WatchList />
        </Route>
        <Route path='/watched'>
          <Watched />
        </Route>
        <Route path='/add'>
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
