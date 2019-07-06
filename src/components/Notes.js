import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Notes() {
  const [notes, setNotes] = useState([]);

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
    <div style={{ paddingBottom: '1rem' }} key={id}>
      <p>Title: {note.title}</p>
      <span>Note: {note.body}</span>
      <p>Date: {note.date}</p>
    </div>
  ));

  return (
    <div>
      <h3>Notes</h3>
      {displayData}
    </div>
  );
}

export default Notes;
