import React from 'react';
import { Link } from 'react-router-dom';

// Material UI
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    marginTop: 20,
    width: 200
  },
  input: {
    display: 'none'
  }
}));

export default function Note({ title, body, date, deleteNote, id }) {
  const classes = useStyles();
  return (
    <div>
      <div>
        <p>Title: {title}</p>
        <span>Note: {body}</span>
        <p>Date: {date}</p>
        <div style={{ display: 'flex' }}>
          <Link to={'/edit/' + id}>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Edit
            </Button>
          </Link>
          <Button
            onClick={deleteNote(id)}
            variant="outlined"
            color="primary"
            className={classes.button}
          >
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
}
