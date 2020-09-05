import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from "./components/home/Home"
import EventDetails from './components/events/EventDetails';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import CreateEvent from './components/events/CreateEvent';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/event/:id" component={EventDetails}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/signup" component={Signup}/>
        <Route exact path="/addEvent" component={CreateEvent}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
