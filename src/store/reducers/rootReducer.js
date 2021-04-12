import authReducer from './authReducer'
import momentReducer from './momentReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

const rootReducer = combineReducers({
  auth: authReducer,
  moment: momentReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer
});

export default rootReducer
