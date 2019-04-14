import _ from 'lodash';

function importAll(r) {
  let images = {};
  _.forEach(r.keys(), item => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
}

export function getImage(location) {
  const images = importAll(require.context('../images/', true));
  return images[location];
}
