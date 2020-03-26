import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/supergensActions';
import SoundList from '../SoundList';
import SupergenList from '../SupergenList';
import '../../styles/supergens-page.scss';

export class SupergensPage extends React.Component {

  componentDidMount() {
    this.props.actions.getSounds();
    this.props.actions.getSupergens();
  }

  setSoundSelected = (soundId, isSelected) => {
    this.props.actions.setSoundSelected(soundId, isSelected);
  }

  onChangeSearchText = e => {
    this.props.actions.setSearchText(e.target.value);
  }

  render() {
    const { supergens, loadingSupergens, loadingSoundFilters, sounds, searchText } = this.props;
    return (
      <div className="supergen-page">
        <div className="supergens-container flex-container">
          <div className="side-content flex-item-auto">
            <div className="search">
              <input type="text" onChange={this.onChangeSearchText} value={searchText} placeholder="search..." />
            </div>
            <SoundList sounds={sounds} setSoundSelected={this.setSoundSelected} loading={loadingSoundFilters} />
          </div>
          <div className="main-content">
            {loadingSupergens && <div>Loading ...</div>}

            {supergens && (
              <SupergenList supergens={supergens} />
            )}

            {!supergens && <div>There are no supergens ...</div>}
          </div>
        </div>
      </div>
    );
  }
}

SupergensPage.propTypes = {
  actions: PropTypes.object.isRequired,
  supergens: PropTypes.array.isRequired,
  sounds: PropTypes.array.isRequired,
  searchText: PropTypes.string.isRequired,
  loadingSupergens: PropTypes.bool.isRequired,
  loadingSoundFilters: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    supergens: state.supergens.filteredSupergens,
    sounds: state.supergens.filteredSounds,
    searchText: state.supergens.searchText,
    loadingSupergens: state.supergens.loadingSupergens,
    loadingSoundFilters: state.supergens.loadingSoundFilters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupergensPage);
