import supergens from '../data/supergens';
import sounds from '../data/sounds';

export function loadSupergens() {
  return supergens.map(sg => {
    sg.show = true;
    return sg;
  });
}

export function loadSounds() {
  return sounds.map(s => {
    s.isSelected = false;
    return s;
  });
}
