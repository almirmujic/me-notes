import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

//Material UI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

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

function Navbar({ history, location }) {
  const classes = useStyles();

  function handleChange(value) {
    history.push(value);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Me-notes
          </Typography>
        </Toolbar>
        <Tabs
          variant="fullWidth"
          value={history.location.pathname}
          onChange={handleChange}
        >
          <Tab label="Notes" value="/" component={Link} to="/" />
          <Tab
            label="Create Note"
            value="/create"
            component={Link}
            to="/create"
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default withRouter(Navbar);
