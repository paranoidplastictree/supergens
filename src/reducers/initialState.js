import Immutable from 'immutable';

export default Immutable.fromJS({
  searchText: '',
  loadingSupergens: false,
  loadingSoundFilters: false,
  supergens: [],
  sounds: [],
  filteredSupergens: [],
  filteredSounds: []
});
