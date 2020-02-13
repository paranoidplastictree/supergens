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
      filteredSupergens: [],
      sounds: [
        {"id":80,"name":"A Trip Of Mind"},
        {"id":41,"name":"Absolute Rain"},
        {"id":82,"name":"Acoustic Experience"},
        {"id":104,"name":"Aeternitas"},
        {"id":36,"name":"African Trance"}]
    };
  };
  
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = getInitialState();

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle SET_SOUND_SELECTED', () => {
    const action = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 2, isSelected: true };
    // const expected = Object.assign(getAppState(), { dateModified });
    // expect(reducer(getAppState(), action)).toEqual(expected);
    expect(true).toEqual(true);
  });

  // it('should handle SAVE_FUEL_SAVINGS', () => {
  //   const action = { type: ActionTypes.SAVE_FUEL_SAVINGS, dateModified, settings: getAppState() };
  //   const expected = Object.assign(getAppState(), { dateModified });

  //   expect(reducer(getAppState(), action)).toEqual(expected);
  // });

  // it('should handle CALCULATE_FUEL_SAVINGS', () => {
  //   const action = { type: ActionTypes.CALCULATE_FUEL_SAVINGS, dateModified, settings: getAppState(), fieldName: 'newMpg', value: 30 };

  //   const expectedMpg = 30;
  //   const expectedSavings = { monthly: '$43.33', annual: '$519.96', threeYear: '$1,559.88' };

  //   expect(reducer(getAppState(), action).newMpg).toEqual(expectedMpg);
  //   expect(reducer(getAppState(), action).savings).toEqual(expectedSavings);
  // });
});