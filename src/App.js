import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Link }  from 'react-router-dom';
import {withStyles} from 'material-ui';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import logo from './logo.svg';
import './App.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const Page = withStyles(styles)(({ title, classes }) => (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>{title}</h2>
      </div>
      <p className="App-intro">
        This is the {title} page.
      </p>
      <Button variant="raised" color="primary">
      Hello World
    </Button>
    <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p>
    </div>
));

const Home = (props) => (
  <Page title="Home"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/settings' component={Settings}/>
      </Switch>
    );
  }
}

export default App;