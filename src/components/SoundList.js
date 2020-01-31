import React from 'react';
import SoundItem from './SoundItem';
import { func, array } from 'prop-types';

const SoundList = ({
  sounds,
  setSoundSelected
}) => (
  <ul className="sound-list flex-container">
    {sounds.map(sound => (
      <SoundItem
        key={sound.id}
        sound={sound}
        setSoundSelected={setSoundSelected}
      />
    ))}
  </ul>
);

SoundList.propTypes = {
  setSoundSelected: func.isRequired,
  sounds: array.isRequired
};

export default SoundList;
