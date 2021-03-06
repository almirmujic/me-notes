import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Note from './Note';

// Material UI
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

  //GET request to pull notes from db and store data into notes state
  useEffect(() => {
    const fetchNotes = () => {
      axios.get('http://localhost:5000/note').then(res => setNotes(res.data));
    };
    fetchNotes();
  }, []);

  const notelist = notes.map((currentNote, id) => (
    <Note
      key={id}
      title={currentNote.title}
      body={currentNote.body}
      date={currentNote.date.substring(0, 10)}
      id={currentNote._id}
    />
  ));

  return (
    <div>
      <Typography variant="h5" align="center" className={classes.headerSpacing}>
        Notes
      </Typography>
      {notelist}
    </div>
  );
}

export default Notes;
