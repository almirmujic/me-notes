import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  }
});

function Navbar({ location }) {
  const classes = useStyles();
  const initialValue = () => Number(localStorage.getItem('value')) || 0;
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    localStorage.setItem('value', value);
  }, [value]);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Me-notes
          </Typography>
        </Toolbar>
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Notes" component={Link} to="/" />
          <Tab label="Create Note" component={Link} to="/create" />
          <Tab label="Create Title" component={Link} to="/title" />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
