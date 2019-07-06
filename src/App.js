import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';

//styling
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <br />
      <Switch>
        <Route path="/" exact component={Notes} />
        <Route path="/create" exact component={CreateNote} />
        <Route path="/edit/:id" exact component={EditNote} />
        <Redirect to="/" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
