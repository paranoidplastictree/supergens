import React from 'react';
import SoundItem from './SoundItem';
import { func, array } from 'prop-types';

const SoundList = ({
  sounds,
  setSoundSelected
}) => (
  <div className="sound-list flex-container">
    <ul>
      {sounds.map(sound => (
        <SoundItem key={sound.id} sound={sound} setSoundSelected={setSoundSelected} />
      ))}
    </ul>
  </div>
);

SoundList.propTypes = {
  setSoundSelected: func.isRequired,
  sounds: array.isRequired
};

export default SoundList;
