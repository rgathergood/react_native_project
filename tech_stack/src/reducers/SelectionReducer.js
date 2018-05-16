export default (state = null, action) => { //f undefined default to null es6 magic
  switch (action.type) {
    case 'select_library':
      return action.payload;
    default:
      return state;
  }
};
