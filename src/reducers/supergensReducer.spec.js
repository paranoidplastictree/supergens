import * as ActionTypes from '../constants/actionTypes';
import reducer from './supergensReducer';
import Immutable from 'immutable';

describe('Reducers::Supergens', () => {

  const getAppState = () => {
    return Immutable.fromJS({
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
      ]
    });
  };

  it('should handle SET_SEARCH_TEXT', () => {
    const action = { type: ActionTypes.SET_SEARCH_TEXT, value:'Noise' };
    const result = reducer(getAppState(), action);

    const soundsShown = result.get('sounds').filter(item => item.get('show'));

    expect(result.get('searchText')).toEqual('Noise');
    expect(soundsShown.size).toEqual(4);
  });

  it('should handle SET_SEARCH_TEXT empty text', () => {
    const action = { type: ActionTypes.SET_SEARCH_TEXT, value:'' };
    const result = reducer(getAppState(), action);

    const soundsShown = result.get('sounds').filter(item => item.get('show'));

    expect(result.get('searchText')).toEqual('');
    expect(soundsShown.size).toEqual(15);
  });

  it('should handle SET_SOUND_SELECTED', () => {
    const action = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 8, isSelected: true };
    const result = reducer(getAppState(), action);

    expect(result.get('sounds').size).toEqual(15);
    expect(result.toJS().sounds[8].isSelected).toEqual(true);

    const supergensShown = result.get('supergens').filter(item => item.get('show') === true);

    expect(result.get('supergens').size).toEqual(4);
    expect(supergensShown.size).toEqual(2);
    expect(supergensShown.toJS()[0].name).toEqual('Acidalia Planitia');
    expect(supergensShown.toJS()[1].name).toEqual('Airship at Dawn');
  });

  it('should handle subsequent SET_SOUND_SELECTED', () => {
    const action1 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 8, isSelected: true };
    var result1 = reducer(getAppState(), action1);

    const action2 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 4, isSelected: true };
    var result = reducer(result1, action2).toJS();

    expect(result.sounds.length).toEqual(15);
    expect(result.sounds[4].isSelected).toEqual(true);
    expect(result.sounds[8].isSelected).toEqual(true);

    expect(result.supergens.length).toEqual(4);
    expect(result.supergens[1].id).toEqual(1);
    expect(result.supergens[1].show).toEqual(true);

    expect(result.supergens[2].id).toEqual(2);
    expect(result.supergens[2].show).toEqual(true);
  });

  it('should handle SET_SOUND_SELECTED deselect', () => {
    const action1 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 8, isSelected: true };
    const result1 = reducer(getAppState(), action1);

    const action2 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 3, isSelected: true };
    const result2 = reducer(result1, action2);

    const action3 = { type: ActionTypes.SET_SOUND_SELECTED, soundId: 3, isSelected: false };
    const result3 = reducer(result2, action3);
    const result = result3.toJS();

    expect(result.sounds.length).toEqual(15);
    expect(result.supergens.length).toEqual(4);

    expect(result.sounds[3].isSelected).toEqual(false);
    expect(result.sounds[8].isSelected).toEqual(true);

    var selectedSounds = result.sounds.filter(item => {
      if (item.isSelected === true) return item;
    });
    expect(selectedSounds.length).toEqual(1);

    var supergens = result.supergens.filter(item => {
      if (item.show === true) {
        return item;
      }
    });
    expect(supergens.length).toEqual(2);

    expect(result.supergens[0].id).toEqual(0);
    expect(result.supergens[0].show).toEqual(false);

    expect(result.supergens[2].id).toEqual(2);
    expect(result.supergens[2].show).toEqual(true);
  });
});