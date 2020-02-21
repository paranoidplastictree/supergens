import React from 'react';
import SupergenItem from './SupergenItem';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

const SupergenList = ({ supergens }) => (
  <div className="supergen-list flex-container">
    <h1>MyNoise Supergens</h1>
    <ul>
      {supergens.map(supergen => (
        <SupergenItem key={supergen.get('id')} supergen={supergen} isFavorite={false} />
      ))}
    </ul>
  </div>
);

SupergenList.propTypes = {
  supergens: PropTypes.instanceOf(Immutable.List).isRequired
};

export default SupergenList;
