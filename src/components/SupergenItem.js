import React, { Component } from 'react';
import {supergen} from '../types';

class SupergenItem extends Component {

  render() {
    const { supergen } = this.props;
    const className = "supergen flex-container" + (supergen.show ? "" : " hidden");
    return (
      <li className={className}>
        <a className="flex-item-one" href={supergen.href} target="_blank" rel="noopener noreferrer">{supergen.name}</a>
        <span className="flex-item-auto sounds">{supergen.sounds.map(s => s.name).join(', ')}</span>
      </li>
    );
  }
}

SupergenItem.propTypes = {
  supergen: supergen.isRequired
};

export default SupergenItem;
