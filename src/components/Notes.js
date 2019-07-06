import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const result = await axios('http://localhost:5000/note');
      setNotes(result.data);
    };
    fetchNotes();
  }, []);

  return <div />;
}
