import { combineReducers } from 'redux';
import auth from './auth';
import message from './message';
import preferences from './preferences';

export default combineReducers(
{
	auth,
	message,
	preferences
});