import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    padding: '20px',
    alignItems: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 350
  },
  button: {
    margin: theme.spacing(1),
    marginTop: 20,
    width: 200
  },
  input: {
    display: 'none'
  },
  headerSpacing: {
    marginTop: '1rem'
  }
}));

function EditNote({ history, match }) {
  const classes = useStyles();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [date, setDate] = useState(new Date());

  //GET request to individual note setting the state of title, body, date of the response object
  useEffect(() => {
    axios
      .get('http://localhost:5000/note/' + match.params.id)
      .then(response => {
        setTitle(response.data.title);
        setBody(response.data.body);
        setDate(new Date(response.data.date));
      })
      .catch(err => console.log(err));
  }, [match.params.id]);

  const onSubmit = event => {
    event.preventDefault();

    const newNote = {
      title: title,
      body: body,
      date: date
    };

    console.log(newNote);

    axios
      .post('http://localhost:5000/note/update/' + match.params.id, newNote)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));

    setTitle('');
    setBody('');
    setDate(new Date());
  };

  return (
    <div>
      <Typography variant="h5" align="center" className={classes.headerSpacing}>
        Edit note
      </Typography>
      <form className={classes.container} onSubmit={onSubmit}>
        <TextField
          id="standard-name"
          name="title"
          label="Title"
          className={classes.textField}
          value={title}
          onChange={e => setTitle(e.target.value)}
          margin="normal"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Note"
          multiline
          rowsMax="4"
          value={body}
          onChange={e => setBody(e.target.value)}
          className={classes.textField}
          margin="normal"
        />
        <DatePicker selected={date} onChange={e => setDate(e)} />
        <Button type="submit" variant="outlined" className={classes.button}>
          Submit
        </Button>
      </form>
    </div>
  );
}

export default withRouter(EditNote);
