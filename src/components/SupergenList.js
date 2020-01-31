import React from 'react';
import SupergenItem from './SupergenItem';
import { array } from 'prop-types';

const SupergenList = ({ supergens }) => (
  <div className="supergen-list flex-container">
    <h1>MyNoise Supergens</h1>
    <ul>
      {supergens.map(supergen => (
        <SupergenItem key={supergen.id} supergen={supergen} isFavorite={false} />
      ))}
    </ul>
  </div>
);

SupergenList.propTypes = {
  supergens: array.isRequired
};

export default SupergenList;
