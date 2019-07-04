import React from 'react';
import { Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import CreateNote from './components/CreateNote';
import EditNote from './components/EditNote';
import CreateTitle from './components/CreateTitle';

//styling
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Route path="/" exact component={Notes} />
      <Route path="/create" exact component={CreateNote} />
      <Route path="/edit/:id" exact component={EditNote} />
      <Route path="/title" exact component={CreateTitle} />
    </React.Fragment>
  );
}

export default App;
