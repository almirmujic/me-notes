import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    marginTop: 20,
    width: 200
  },
  input: {
    display: 'none'
  },
  headerSpacing: {
    marginTop: '1rem',
    marginBottom: '2rem'
  }
}));

function Notes() {
  const [notes, setNotes] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const fetchNotes = () => {
      axios.get('http://localhost:5000/note').then(res => setNotes(res.data));
    };
    fetchNotes();
  }, []);

  const deleteNote = id => {
    axios
      .delete('http://localhost:5000/note/' + id)
      .then(res => console.log(res.data));

    setNotes({ notes: notes.filter(note => note._id !== id) });
  };

  const displayData = notes.map((note, id) => (
    <div
      style={{
        paddingBottom: '1rem',
        border: '1px solid black',
        borderRadius: '15px',
        maxWidth: 'auto',
        margin: '0 auto'
      }}
      key={id}
    >
      <div style={{ padding: '10px' }}>
        <p>Title: {note.title}</p>
        <span>Note: {note.body}</span>
        <p>Date: {note.date.substring(0, 10)}</p>
        <div style={{ display: 'flex' }}>
          <Link to={'/edit/' + note._id}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Edit
            </Button>
          </Link>
          <Link to={'/edit/' + note._id}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Edit
            </Button>
          </Link>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <Typography variant="h5" align="center" className={classes.headerSpacing}>
        Notes
      </Typography>
      {displayData}
    </div>
  );
}

export default Notes;
