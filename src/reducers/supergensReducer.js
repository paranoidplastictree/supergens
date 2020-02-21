import {GET_SUPERGENS, GET_SOUNDS, SET_SOUND_SELECTED, SET_SEARCH_TEXT} from '../constants/actionTypes';
import {loadSounds, loadSupergens} from '../utils/supergens';
import initialState from './initialState';
import Immutable from 'immutable';

export default function supergensReducer(state = initialState.get('supergens'), action) {
  let newState;

  switch (action.type) {
    case GET_SOUNDS:
      if (state.get('sounds').size > 0) return state;

      var sounds = loadSounds();
      newState = state.set('filteredSounds', Immutable.fromJS(sounds));
      newState = newState.set('sounds', Immutable.fromJS(sounds));
      return newState.set('loadingSounds', false);
    
    case GET_SUPERGENS:
      if (state.get('supergens').size > 0) return state;

      var supergens = loadSupergens();
      newState = state.set('filteredSupergens', Immutable.fromJS(supergens));
      newState = newState.set('supergens', Immutable.fromJS(supergens));
      return newState.set('loadingSupergens', false);

    case SET_SOUND_SELECTED:
      newState = state;
      var selectedFilterCount = 0;
      var soundsCopy = state.get('sounds').map(item => {

        if (item.get('id') === action.soundId) {
          item = item.set('isSelected', action.isSelected);
          if (action.isSelected) {
            selectedFilterCount = selectedFilterCount + 1;
          }
        } else if (item.get('isSelected')) {
          selectedFilterCount = selectedFilterCount + 1;
        }
        return item;
      });

      var filteredSoundsCopy = state.get('filteredSounds').map(item => {
        if (item.get('id') === action.soundId) {
          item = item.set('isSelected', action.isSelected);
        }
        return item;
      });
      
      newState = newState.set('filteredSounds', filteredSoundsCopy);
      newState = newState.set('sounds', soundsCopy);

      var supergenCopy = newState.get('filteredSupergens').map(supergen => {
        if(selectedFilterCount === 0) {
          supergen = supergen.set('show', true);
        } else {
          let matches = 0;
          filteredSoundsCopy.forEach((filteredSound) => {
            if (filteredSound.get('isSelected')) {
              supergen.get('sounds').forEach((sound) => {
                if(sound.get('name') === filteredSound.get('name')) {
                  matches = matches + 1;
                }
              });
            }
          });
          supergen = supergen.set('show', matches > 0);
        }
        return supergen;
      });
        
      return newState.set('filteredSupergens', supergenCopy);

    case SET_SEARCH_TEXT:
      newState = state.set('searchText', action.value);

      if (action.value === '') {
        return newState.set('filteredSounds', state.get('sounds'));
      }
  
      var soundsList = [];
      var searchText = action.value.toUpperCase();
      newState.get('sounds').forEach((item) => {
        if (item.get('name').toUpperCase().includes(searchText)) {
          soundsList.push(item);
        }
      });

      return newState.set('filteredSounds', Immutable.fromJS(soundsList));
      
    default:
      return state;
  }
}
