import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { supergensSelector } from '../../selectors/supergensSelector';
import {setSearchText, getSounds, getSupergens} from '../../actions/supergensActions';
import SearchBox from '../SearchBox';
// import SoundList from '../SoundList';
// import SupergenList from '../SupergenList';
import '../../styles/supergens-page.scss';
// import Immutable from 'immutable';

export class SupergensPage extends PureComponent {

  componentDidMount() {
    this.props.getSounds();
    this.props.getSupergens();
  }

  // setSoundSelected = (soundId, isSelected) => {
  //   this.props.actions.setSoundSelected(soundId, isSelected);
  // }

  render() {
    const { /*supergens, loadingSupergens, loadingSoundFilters, sounds,*/ searchText } = this.props;
    return (
      <div className="supergen-page">
        <div className="supergens-container flex-container">
          <div className="sounds flex-item-auto">
            <SearchBox searchText={searchText} setSearchText={this.props.setSearchText} />
            {/* <SoundList sounds={sounds} setSoundSelected={this.setSoundSelected} loading={loadingSoundFilters} /> */}
          </div>
          {/* <div className="supergens">
            {loadingSupergens && <div>Loading ...</div>}

            {supergens && (
              <SupergenList supergens={supergens} />
            )}

            {!supergens && <div>There are no supergens ...</div>}
          </div> */}
        </div>
      </div>
    );
  }
}

SupergensPage.propTypes = {
  getSounds: PropTypes.func.isRequired,
  getSupergens: PropTypes.func.isRequired,
  setSearchText: PropTypes.func.isRequired,
  // supergens: PropTypes.instanceOf(Immutable.List).isRequired,
  // sounds: PropTypes.instanceOf(Immutable.List).isRequired,
  searchText: PropTypes.string.isRequired,
  loadingSupergens: PropTypes.bool.isRequired,
  loadingSoundFilters: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    searchText: state.supergens.get('searchText')
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }
const mapDispatchToProps = {
  getSounds: getSounds,
  getSupergens: getSupergens,
  setSearchText: setSearchText
}  

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SupergensPage);
