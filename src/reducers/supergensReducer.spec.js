import * as ActionTypes from '../constants/actionTypes';
import reducer from './supergensReducer';

describe('Reducers::Supergens', () => {
  const getInitialState = () => {
    return {
      searchText: '',
      loadingSupergens: false,
      loadingSoundFilters: false,
      supergens: [],
      filteredSupergens: [],
      sounds: []
    };
  };

  const getAppState = () => {
    return {
      searchText: 'test',
      loadingSupergens: false,
      loadingSoundFilters: false,
      supergens: [
        {"id":0,"name":"Aboard an Interstellar Spacecraft","href":"http://goo.gl/CUyAxI",
          "sounds":[
            {"id":0,"name":"Aircraft Cabin Noise"},
            {"id":1,"name":"Binaural Beat Machine"},
            {"id":2,"name":"Temple Bells"},
            {"id":3,"name":"Twilight"}]},
        {"id":1,"name":"Acidalia Planitia","href":"http://goo.gl/7T26xo",
          "sounds":[
            {"id":4,"name":"Distant Thunder"},
            {"id":5,"name":"Fan Noise"},
            {"id":6,"name":"Hum Noise (us)"},
            {"id":7,"name":"Ice World"},
            {"id":8,"name":"Wind Noise"}]},
        {"id":2,"name":"Airship at Dawn","href":"http://goo.gl/Z7IUhn",
          "sounds":[
            {"id":9,"name":"Sailboat"},
            {"id":10,"name":"Warp Speed"},
            {"id":8,"name":"Wind Noise"}]},
        {"id":3,"name":"Alan Turing's Zeppelin","href":"http://goo.gl/obBVDn",
          "sounds":[
            {"id":0,"name":"Aircraft Cabin Noise"},
            {"id":11,"name":"Flying Fortress"},
            {"id":12,"name":"Number Station"},
            {"id":13,"name":"Paraglide"},
            {"id":14,"name":"Shortwaves"}]}
      ],
      filteredSupergens: [
        {"id":0,"name":"Aboard an Interstellar Spacecraft","href":"http://goo.gl/CUyAxI",
          "sounds":[
            {"id":0,"name":"Aircraft Cabin Noise"},
            {"id":1,"name":"Binaural Beat Machine"},
            {"id":2,"name":"Temple Bells"},
            {"id":3,"name":"Twilight"}]},
        {"id":1,"name":"Acidalia Planitia","href":"http://goo.gl/7T26xo",
          "sounds":[
            {"id":4,"name":"Distant Thunder"},
            {"id":5,"name":"Fan Noise"},
            {"id":6,"name":"Hum Noise (us)"},
            {"id":7,"name":"Ice World"},
            {"id":8,"name":"Wind Noise"}]},
        {"id":2,"name":"Airship at Dawn","href":"http://goo.gl/Z7IUhn",
          "sounds":[
            {"id":9,"name":"Sailboat"},
            {"id":10,"name":"Warp Speed"},
            {"id":8,"name":"Wind Noise"}]},
        {"id":3,"name":"Alan Turing's Zeppelin","href":"http://goo.gl/obBVDn",
          "sounds":[
            {"id":0,"name":"Aircraft Cabin Noise"},
            {"id":11,"name":"Flying Fortress"},
            {"id":12,"name":"Number Station"},
            {"id":13,"name":"Paraglide"},
            {"id":14,"name":"Shortwaves"}]}
      ],
      sounds: [
        {"id":0,"name":"Aircraft Cabin Noise"},
        {"id":1,"name":"Binaural Beat Machine"},
        {"id":2,"name":"Temple Bells"},
        {"id":3,"name":"Twilight"},
        {"id":4,"name":"Distant Thunder"},
        {"id":5,"name":"Fan Noise"},
        {"id":6,"name":"Hum Noise (us)"},
        {"id":7,"name":"Ice World"},
        {"id":8,"name":"Wind Noise"},
        {"id":9,"name":"Sailboat"},
        {"id":10,"name":"Warp Speed"},
        {"id":11,"name":"Flying Fortress"},
        {"id":12,"name":"Number Station"},
        {"id":13,"name":"Paraglide"},
        {"id":14,"name":"Shortwaves"}
      ],
      filteredSounds: [
        {"id":0,"name":"Aircraft Cabin Noise"},
        {"id":1,"name":"Binaural Beat Machine"},
        {"id":2,"name":"Temple Bells"},
        {"id":3,"name":"Twilight"},
        {"id":4,"name":"Distant Thunder"},
        {"id":5,"name":"Fan Noise"},
        {"id":6,"name":"Hum Noise (us)"},
        {"id":7,"name":"Ice World"},
        {"id":8,"name":"Wind Noise"},
        {"id":9,"name":"Sailboat"},
        {"id":10,"name":"Warp Speed"},
        {"id":11,"name":"Flying Fortress"},
        {"id":12,"name":"Number Station"},
        {"id":13,"name":"Paraglide"},
        {"id":14,"name":"Shortwaves"}
      ]
    };
  };
  
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SET_SOUND_SELECTED', () => {
    const action = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 2, isSelected: true };
    var result = reducer(getAppState(), action);

    expect(result.sounds.length).toEqual(15);
    expect(result.filteredSounds.length).toEqual(15);
    expect(result.sounds[2].isSelected).toEqual(true);
    expect(result.filteredSounds[2].isSelected).toEqual(true);

    expect(result.supergens.length).toEqual(4);
    expect(result.filteredSupergens.length).toEqual(4);
    expect(result.filteredSupergens[0].show).toEqual(true);
  });

  it('should handle subsequent SET_SOUND_SELECTED', () => {
    const action1 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 8, isSelected: true };
    var result1 = reducer(getAppState(), action1);

    const action2 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 4, isSelected: true };
    var result = reducer(result1, action2);

    expect(result.sounds.length).toEqual(15);
    expect(result.filteredSounds.length).toEqual(15);

    expect(result.sounds[4].isSelected).toEqual(true);
    expect(result.filteredSounds[4].isSelected).toEqual(true);
    expect(result.sounds[8].isSelected).toEqual(true);
    expect(result.filteredSounds[8].isSelected).toEqual(true);

    expect(result.supergens.length).toEqual(4);
    expect(result.filteredSupergens.length).toEqual(4);
    expect(result.filteredSupergens[1].id).toEqual(1);
    expect(result.filteredSupergens[1].show).toEqual(true);

    expect(result.filteredSupergens[2].id).toEqual(2);
    expect(result.filteredSupergens[2].show).toEqual(true);
  });

  it('should handle SET_SOUND_SELECTED deselect', () => {
    const action1 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 8, isSelected: true };
    var result1 = reducer(getAppState(), action1);

    const action2 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 3, isSelected: true };
    var result2 = reducer(result1, action2);

    const action3 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 3, isSelected: false };
    var result = reducer(result2, action3);

    expect(result.sounds.length).toEqual(15);
    expect(result.filteredSounds.length).toEqual(15);
    expect(result.supergens.length).toEqual(4);
    expect(result.filteredSupergens.length).toEqual(4);

    expect(result.sounds[3].isSelected).toEqual(false);
    expect(result.filteredSounds[3].isSelected).toEqual(false);
    expect(result.sounds[8].isSelected).toEqual(true);
    expect(result.filteredSounds[8].isSelected).toEqual(true);

    var selectedSounds = result.sounds.filter(item => {
      if (item.isSelected === true) return item;
    });
    expect(selectedSounds.length).toEqual(1);

    var filteredSounds = result.filteredSounds.filter(item => {
      if (item.isSelected === true) return item;
    });
    expect(filteredSounds.length).toEqual(1);

    var filteredGens = result.filteredSupergens.filter(item => {
      if (item.show === true) {
        return item;
      }
    });
    expect(filteredGens.length).toEqual(2);

    expect(result.filteredSupergens[0].id).toEqual(0);
    expect(result.filteredSupergens[0].show).toEqual(false);

    expect(result.filteredSupergens[2].id).toEqual(2);
    expect(result.filteredSupergens[2].show).toEqual(true);
  });
});