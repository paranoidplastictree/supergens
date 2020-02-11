/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from "react-router-dom";

import SupergensPage from "./containers/SupergensPage";
import NotFoundPage from "./NotFoundPage";
import PropTypes from "prop-types";
import React from "react";
import { hot } from "react-hot-loader";

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.Component {
  render() {
    const activeStyle = { color: "#60b044" };
    return (
      <div className="app-wrapper">
        <div className="navigation">
          <NavLink exact to="/supergens" activeStyle={activeStyle}>home</NavLink>
          {' | '}
          <a href="https://mynoise.net/" className="mynoise">mynoise.net</a>
          {' | '}
          <a href="https://www.reddit.com/r/MyNoise/comments/3hw95k/supergen_masterlist/">reddit masterlist</a>
        </div>
        <Switch>
          <Route exact path="/" component={SupergensPage} />
          <Route exact path="/supergens" component={SupergensPage} />
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
