import React from 'react';
import SupergenItem from './SupergenItem';
import { array } from 'prop-types';

const SupergenList = ({ supergens }) => (
  <ul className="supergen-list flex-container">
    {supergens.map(supergen => (
      <SupergenItem
        key={supergen.id}
        supergen={supergen}
        isFavorite={false}
      />
    ))}
  </ul>
);

SupergenList.propTypes = {
  supergens: array.isRequired
};

export default SupergenList;
