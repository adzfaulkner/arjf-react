import _ from 'lodash';

function importAll(r) {
  let images = {};
  _.forEach(r.keys(), item => { images[item.replace('./', '')] = r(item); });
  return images;
}

class ImageLoader {
  constructor() {
    this.images = importAll(require.context('../images/', true));
  }

  getImage = key => {
    return this.images[key];
  };
}

const imgLoader = new ImageLoader();

export function getImage(location) {
  return imgLoader.getImage(location);
}
