import {GET_SUPERGENS, GET_SOUNDS, SET_SOUND_SELECTED, SET_SEARCH_TEXT} from '../constants/actionTypes';
import {loadSounds, loadSupergens} from '../utils/supergens';
import createReducer from '../utils/createReducer';
import initialState from './initialState';
import Immutable from 'immutable';

export default createReducer(initialState, {
  [GET_SOUNDS](state) {
    console.log('getting sounds');
    if (state.get('sounds').size > 0) return state;
    var sounds = loadSounds();
    let newState = state.set('sounds', Immutable.fromJS(sounds));
    // newState = newState.set('filteredSounds', Immutable.fromJS(sounds));
    return newState.set('loadingSounds', false);
  },
  [GET_SUPERGENS](state) {
    console.log('getting supergens');
    if (state.get('supergens').size > 0) return state;
    var supergens = loadSupergens();
    const newState = state.set('supergens', Immutable.fromJS(supergens));
    return newState.set('loadingSupergens', false);
  },
  [SET_SEARCH_TEXT](state, action) {
    return state.set('searchText', action.value);
    // if (action.value === ''){
    //   return newState.set('filteredSounds', state.get('sounds'));
    // }

    // var searchText = action.value.toUpperCase();
    // //var searchedList = newState.get('sounds').filter(item => item.get('name').toUpperCase().includes(searchText));
    // var foundList = [];
    // var searchedList = newState.get('sounds').toJS();
    // searchedList.forEach((sound) => {
    //   // if(sound.name.toUpperCase().includes(searchText))
    //     foundList.push(sound);
    // });
    // // searchedList = searchedList.map(item => {
    // //   return item.set('show', item.get('name').toUpperCase().includes(searchText));
    // // });

    // return newState.set('filteredSounds', Immutable.fromJS(foundList));
  },
  [SET_SOUND_SELECTED](state, action) {
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
    
    const newState = state.set('sounds', list);

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
  }
});