// Centralized propType definitions
import { shape, number, bool, string, arrayOf } from 'prop-types';

export const sound = shape({
  id: number,
  name: string
});

export const supergens = shape({
  searchText: string,
  loadingSupergens: bool,
  loadingSoundFilters: bool,
  supergens: arrayOf(supergen),
  filteredSupergens: arrayOf(supergen),
  sounds: arrayOf(sound),
  filteredSounds: arrayOf(sound),
});

export const supergen = shape({
  id: number,
  name: string,
  href: string,
  sounds: arrayOf(sound)
});
