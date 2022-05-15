import { action } from 'typesafe-actions';
import { ActionTypes } from './consts';

export function remove(id: string) {
  return action(ActionTypes.CLIENT_DELETE_REQUEST, id);
}

export function list() {
  return action(ActionTypes.CLIENT_LIST_REQUEST);
}

export function add(payload: any) {
  return action(ActionTypes.CLIENT_ADD_REQUEST, payload);
}

