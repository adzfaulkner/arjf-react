export default name => {
  if (process.env.hasOwnProperty('REACT_APP_' + name) === false) {
    throw Error('Config param does not exist');
  }

  return process.env['REACT_APP_' + name];
};