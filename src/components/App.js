/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import SupergensPage from "./containers/SupergensPage";
import AboutPage from "./containers/AboutPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <div className="navigation">
          <NavLink exact to="/supergens" activeClassName="active">home</NavLink>
          {' | '}
          <NavLink exact to="/about" activeClassName="active">about</NavLink>
          {' | '}
          <a href="https://mynoise.net/" className="mynoise">mynoise.net</a>
          {' | '}
          <a href="https://www.reddit.com/r/MyNoise/comments/3hw95k/supergen_masterlist/">reddit masterlist</a>
        </div>
        <Switch>
          <Route exact path="/" component={SupergensPage} />
          <Route exact path="/supergens" component={SupergensPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default hot(module)(App);
