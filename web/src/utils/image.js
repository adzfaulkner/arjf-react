import _ from 'lodash';

function importAll(r) {
  let images = {};

  _.forEach(r.keys(), item => {
    images[item.replace('./', '')] = r(item);
  });

  return images;
}

let images = {};

export function getImage(location) {
  if (Object.keys(images).length < 1) {
    images = importAll(require.context('../images/', true));
  }
  return images[location];
}
