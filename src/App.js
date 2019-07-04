import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//components
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import EditNote from './components/EditNote';
import CreateNote from './components/CreateNote';
import CreateTitle from './components/CreateTitle';

//styling
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Notes} />
      <Route path="/edit/:id" exact component={EditNote} />
      <Route path="/create" exact component={CreateNote} />
      <Route path="/title" exact component={CreateTitle} />
    </Router>
  );
}

export default App;
