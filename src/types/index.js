// Centralized propType definitions
import { shape, number, bool, string, oneOfType, arrayOf } from 'prop-types';

export const fuelSavings = shape({
  newMpg: oneOfType([number,string]),
  tradeMpg: oneOfType([number,string]),
  newPpg: oneOfType([number,string]),
  tradePpg: oneOfType([number,string]),
  milesDriven: oneOfType([number,string]),
  milesDrivenTimeframe: string,
  displayResult: bool,
  dateModified: string,
  necessaryDataIsProvidedToCalculateSavings: bool,
  savings: savings
});

export const savings = shape({
  monthly: oneOfType([number,string]),
  annual: oneOfType([number,string]),
  threeYear: oneOfType([number,string]),
});

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
