import authReducer from './authReducer';
import characterReducer from './characterReducer';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; // sync firebase database with redux store
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    character: characterReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;