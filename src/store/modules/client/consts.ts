import type { ActionTypesBase, StateBase } from './types';

export const ActionTypes: ActionTypesBase = {
  CLIENT_DELETE_REQUEST: '@oauth/CLIENT_DELETE_REQUEST',
  CLIENT_DELETE_SUCCESS: '@oauth/CLIENT_DELETE_SUCCESS',
  CLIENT_DELETE_FAILURE: '@oauth/CLIENT_DELETE_FAILURE',

  CLIENT_LIST_REQUEST: '@oauth/CLIENT_LIST_REQUEST',
  CLIENT_LIST_SUCCESS: '@oauth/CLIENT_LIST_SUCCESS',
  CLIENT_LIST_FAILURE: '@oauth/CLIENT_LIST_FAILURE',

  CLIENT_ADD_REQUEST: '@oauth/CLIENT_ADD_REQUEST',
  CLIENT_ADD_SUCCESS: '@oauth/CLIENT_ADD_SUCCESS',
  CLIENT_ADD_FAILURE: '@oauth/CLIENT_ADD_FAILURE',
};

export const InitialState: StateBase = {
  item: null,
  error: false,
  loading: false,
};
