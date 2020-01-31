import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function setSoundSelected(soundId, isSelected) {
  return function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the fuel savings
    return dispatch({
      type: types.SET_SOUND_SELECTED,
      soundId,
      isSelected
    });
  };
}

export function setSearchText(value) {
  return {
    type: types.SET_SEARCH_TEXT,
    value
  };
}

export function getSounds() {
  return {
    type: types.GET_SOUNDS
  }
}

export function getSupergens() {
  return {
    type: types.GET_SUPERGENS
  }
}
