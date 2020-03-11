import React from 'react';
import SoundItem from './SoundItem';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

const SoundList = ({
  sounds,
  setSoundSelected
}) => (
  <div className="sound-list flex-container">
    <ul>
      {sounds.map(sound => (
        <SoundItem key={sound.get('id')} sound={sound} setSoundSelected={setSoundSelected} />
      ))}
    </ul>
  </div>
);

SoundList.propTypes = {
  setSoundSelected: PropTypes.func.isRequired,
  sounds: PropTypes.instanceOf(Immutable.List).isRequired
};

export default SoundList;
