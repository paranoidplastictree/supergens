import {GET_SUPERGENS, GET_SOUNDS, SET_SOUND_SELECTED, SET_SEARCH_TEXT} from '../constants/actionTypes';
import {loadSounds, loadSupergens} from '../utils/supergens';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function supergensReducer(state = initialState.supergens, action) {
  let newState;

  switch (action.type) {
    case GET_SOUNDS:
      if (state.sounds.length > 0) return state;
      newState = objectAssign({}, state);

      var sounds = loadSounds();
      newState.filteredSounds = sounds;
      newState.sounds = sounds;
      newState.loadingSounds = false;
      return newState;
    
    case GET_SUPERGENS:
      if (state.supergens.length > 0) return state;
      newState = objectAssign({}, state);

      var supergens = loadSupergens();
      newState.filteredSupergens = supergens;
      newState.supergens = supergens;
      newState.loadingSupergens = false;
      return newState;

    case SET_SOUND_SELECTED:
      newState = objectAssign({}, state);
      var selectedFilterCount = 0;
      var soundsCopy = state.sounds.map(item => {
        if (item.id === action.soundId) {
          var itemCopy = objectAssign({}, item);
          itemCopy.isSelected = action.isSelected;
          if (action.isSelected) {
            selectedFilterCount = selectedFilterCount + 1;
          }
          return itemCopy;
        } else if (item.isSelected) {
          selectedFilterCount = selectedFilterCount + 1;
        }
        return item;
      });

      var filteredSoundsCopy = state.filteredSounds.map(item => {
        if (item.id === action.soundId) {
          var itemCopy = objectAssign({}, item);
          itemCopy.isSelected = action.isSelected;
          return itemCopy;
        }
        return item;
      });
      
      newState.filteredSounds = filteredSoundsCopy;
      newState.sounds = soundsCopy;

      var supergenCopy = newState.filteredSupergens.map(supergen => {
        var newSupergen = objectAssign({}, supergen)
        if(selectedFilterCount === 0) {
          newSupergen.show = true;
        } else {
          let matches = 0;
          filteredSoundsCopy.forEach((filteredSound) => {
            if (filteredSound.isSelected) {
              newSupergen.sounds.forEach((sound) => {
                if(sound.name === filteredSound.name) {
                  matches = matches + 1;
                }
              });
            }
          });
          newSupergen.show = matches > 0;
        }
        return newSupergen;
      });
        
      newState.filteredSupergens = supergenCopy;

      return newState;

    case SET_SEARCH_TEXT:
      newState = objectAssign({}, state, {searchText: action.value});

      if (action.value === '') {
        newState.filteredSounds = state.sounds;
        return newState;
      }
  
      var soundsList = [];
      var searchText = action.value.toUpperCase();
      newState.sounds.forEach((item) => {
        if (item.name.toUpperCase().includes(searchText)) {
          soundsList.push(item);
        }
      });
      newState.filteredSounds = soundsList;

      return newState;
      
    default:
      return state;
  }
}
