import { createSelector } from 'reselect';

const supergensState = state => state.supergens;

export const supergensSelector = createSelector(
  [supergensState],
  (supergens) => {

    // const filteredSounds = supergens.get('sounds').filter(item => item.get('show'));
    // const filteredSupergens = supergens.get('supergens').filter(item => item.get('show'));
    // const searchText = supergens.get('searchText');
    // const loadingSupergens = supergens.get('loadingSupergens');
    // const loadingSoundFilters = supergens.get('loadingSoundFilters');

    return {
      // supergens: supergens.get('supergens'),
      // sounds: supergens.get('sounds'),
      searchText: supergens.get('searchText'),
      loadingSupergens: supergens.get('loadingSupergens'),
      loadingSoundFilters: supergens.get('loadingSoundFilters')
    };
  }
);