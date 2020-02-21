import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/supergensActions';
import SoundList from '../SoundList';
import SupergenList from '../SupergenList';
import '../../styles/supergens-page.scss';
import Immutable from 'immutable';

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
          <div className="sounds flex-item-auto">
            <div className="search">
              <h2>Sounds</h2>
              <input type="text" onChange={this.onChangeSearchText} value={searchText} placeholder="search for a sound..." />
            </div>
            <SoundList sounds={sounds} setSoundSelected={this.setSoundSelected} loading={loadingSoundFilters} />
          </div>
          <div className="supergens">
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
  supergens: PropTypes.instanceOf(Immutable.List).isRequired,
  sounds: PropTypes.instanceOf(Immutable.List).isRequired,
  searchText: PropTypes.string.isRequired,
  loadingSupergens: PropTypes.bool.isRequired,
  loadingSoundFilters: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    supergens: state.supergens.get('filteredSupergens'),
    sounds: state.supergens.get('filteredSounds'),
    searchText: state.supergens.get('searchText'),
    loadingSupergens: state.supergens.get('loadingSupergens'),
    loadingSoundFilters: state.supergens.get('loadingSoundFilters')
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
