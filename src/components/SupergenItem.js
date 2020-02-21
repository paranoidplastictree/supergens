import React, { Component } from 'react';
import {supergen} from '../types';

class SupergenItem extends Component {

  render() {
    const { supergen } = this.props;
    const className = "supergen flex-container" + (supergen.get('show') ? "" : " hidden");
    return (
      <li className={className}>
        <a className="flex-item-one" href={supergen.get('href')} target="_blank" rel="noopener noreferrer">{supergen.get('name')}</a>
        <span className="flex-item-auto sounds">{supergen.get('sounds').map(s => s.get('name')).join(', ')}</span>
      </li>
    );
  }
}

SupergenItem.propTypes = {
  supergen: supergen.isRequired
};

export default SupergenItem;
