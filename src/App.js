import React from 'react'
import {Route, Switch} from 'react-router-dom'

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Services from './pages/Services';

import NavBar from './components/NavBar'
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/room/:slug" component={SingleRoom} />
        <Route exact path="/services" component={Services} />
        <Route component={Error} />
      </Switch>
    </>
  )
}

export default App;
