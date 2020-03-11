import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends PureComponent {

  onChangeSearchText = e => {
    this.props.setSearchText(e.target.value);
  }

  render() {
    const { searchText } = this.props;
    return (
      <div className="search">
        <h2>Sounds</h2>
        <input type="text" onChange={this.onChangeSearchText} value={searchText} placeholder="search for a sound..." />
    </div>
    );
  }
}

SearchBox.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
};

export default SearchBox;
