function importAll(r) {
  let images = {};
  r.keys().map(item => { images[item.replace('./', '')] = r(item); });
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
