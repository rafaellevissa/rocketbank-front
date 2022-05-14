import { createStore, applyMiddleware } from "redux";
import rootReducer from './reducers';
import thunk from 'redux-thunk';

const preferences = localStorage.getItem('preferences');
const user = localStorage.getItem('user');

let initialState: any = 
{ 
    preferences: preferences ? JSON.parse(preferences) : {},
    auth: user ? JSON.parse(user) : { auth: false }
}

const middleware: any = [thunk];
const store = createStore(rootReducer, initialState, applyMiddleware(...middleware));

store.subscribe(() =>
{
    const preferences = store.getState().preferences;
    if (!preferences) return;

    localStorage.setItem('preferences', JSON.stringify(preferences));
});

export default store;