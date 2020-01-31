import React, { Component } from 'react';
import {sound} from '../types';
import { func } from 'prop-types';

class SoundItem extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // onToggleFavorite = () => {
  //   this.props.onSetFavorite(this.props.supergen.id, !state.favorite);
  //   this.setState(state => ({
  //     favorite: !state.favorite,
  //   }));
  // };

  onToggle = () => {
    this.props.setSoundSelected(this.props.sound.id, !this.props.sound.isSelected);
  }

  render() {
    const { sound } = this.props;
    return (
      <li className="sound-item" key={sound.id}>
          <span>
            <input type="checkbox" onChange={this.onToggle} checked={sound.isSelected}></input>
            <span>{sound.name}</span>
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
