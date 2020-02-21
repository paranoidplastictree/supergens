import React, { Component } from 'react';
import {sound} from '../types';
import { func } from 'prop-types';

class SoundItem extends Component {

  onToggle = () => {
    this.props.setSoundSelected(this.props.sound.get('id'), !this.props.sound.get('isSelected'));
  }

  render() {
    const { sound } = this.props;
    return (
      <li className="sound-item" key={sound.get('id')}>
          <span>
            <input type="checkbox" onChange={this.onToggle} checked={sound.get('isSelected')}></input>
            <span>{sound.get('name')}</span>
          </span>
      </li>
    );
  }
}

SoundItem.propTypes = {
  sound: sound.isRequired,
  setSoundSelected: func.isRequired
};

export default SoundItem;
