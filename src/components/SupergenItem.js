import React, { Component } from 'react';
import {supergen} from '../types';

class SupergenItem extends Component {
  // constructor(props) {
  //   super(props);

  //   // this.state = {
  //   //   favorite: this.props.isFavorite,
  //   // };
  // }

  // onToggleFavorite = () => {
  //   this.props.onSetFavorite(this.props.supergen.id, !state.favorite);
  //   this.setState(state => ({
  //     favorite: !state.favorite,
  //   }));
  // };

  render() {
    const { supergen } = this.props;
    const className = "supergen flex-container" + (supergen.show ? "" : " hidden");
    return (
      <li className={className}>
        <a className="flex-item-one" href={supergen.href} target="_blank" rel="noopener noreferrer">{supergen.name}</a>
        {/* {this.state.favorite ? (<span class="starred">star</span>) : (<span class="unstarred">star</span>)} */}
        <span className="flex-item-auto sounds">{supergen.sounds.map(s => s.name).join(', ')}</span>
      </li>
    );
  }
}

SupergenItem.propTypes = {
  supergen: supergen.isRequired
};

export default SupergenItem;
