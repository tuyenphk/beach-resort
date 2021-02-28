import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './pages/Home';
import Room from './pages/Room';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';

import NavBar from './components/NavBar'
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/room" component={Room} />
        <Route exact path="/room/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;
