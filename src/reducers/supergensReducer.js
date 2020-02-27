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
      newState = state.set('sounds', Immutable.fromJS(sounds));
      return newState.set('loadingSounds', false);
    
    case GET_SUPERGENS:
      if (state.get('supergens').size > 0) return state;

      var supergens = loadSupergens();
      newState = state.set('supergens', Immutable.fromJS(supergens));
      return newState.set('loadingSupergens', false);

    case SET_SOUND_SELECTED:

      var list = state.get('sounds');
      list = list.update(
        list.findIndex((item) => {
          return item.get('id') === action.soundId;
        }),
        (s) => {
          return s.set('isSelected', action.isSelected);
        }
      );

      // var soundsCopy = state.get('sounds').map(item => {

      //   if (item.get('id') === action.soundId) {
      //     item = item.set('isSelected', action.isSelected);
      //     if (action.isSelected) {
      //       selectedFilterCount = selectedFilterCount + 1;
      //     }
      //   } else if (item.get('isSelected')) {
      //     selectedFilterCount = selectedFilterCount + 1;
      //   }
      //   return item;
      // });

      // var filteredSoundsCopy = state.get('filteredSounds').map(item => {
      //   if (item.get('id') === action.soundId) {
      //     item = item.set('isSelected', action.isSelected);
      //   }
      //   return item;
      // });
      
      newState = state.set('sounds', list);

      var soundsSet = new Immutable.Set(list.filter(item => item.get('isSelected')).map(item => item.get('id')));
      var supergenList = newState.get('supergens');
      supergenList = supergenList.map(supergen => {
        var childrenSet = new Immutable.Set(supergen.get('sounds').map(item => item.get('id')));
        var intersection = soundsSet.intersect(childrenSet);
        return supergen.set('show', intersection.size > 0);
      });
      
      // var supergenCopy = newState.get('filteredSupergens').map(supergen => {
      //   if(selectedFilterCount === 0) {
      //     supergen = supergen.set('show', true);
      //   } else {
      //     let matches = 0;
      //     filteredSoundsCopy.forEach((filteredSound) => {
      //       if (filteredSound.get('isSelected')) {
      //         supergen.get('sounds').forEach((sound) => {
      //           if(sound.get('name') === filteredSound.get('name')) {
      //             matches = matches + 1;
      //           }
      //         });
      //       }
      //     });
      //     supergen = supergen.set('show', matches > 0);
      //   }
      //   return supergen;
      // });
        
      return newState.set('supergens', supergenList);

    case SET_SEARCH_TEXT:
      newState = state.set('searchText', action.value);
      
      var isEmptySearch = action.value === '';
      var searchText = action.value.toUpperCase();
      var searchedList = newState.get('sounds').map(item => {
        return item.set('show', isEmptySearch || item.get('name').toUpperCase().includes(searchText));
      });

      return newState.set('sounds', searchedList);
      
    default:
      return state;
  }
}
