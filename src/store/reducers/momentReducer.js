const initState = {}

const momentReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_MOMENT_SUCCESS':
      console.log('create moment success');
      return state;
    case 'CREATE_MOMENT_ERROR':
      console.log('create moment error');
      return state;
    default:
      return state;
  }
};

export default momentReducer;