import produce from 'immer';

import type { Action, StateBase } from './types';

import { ActionTypes, InitialState } from './consts';

function reducer(state = InitialState, action: Action): StateBase {
  switch (action.type) {
    case ActionTypes.CLIENT_DELETE_REQUEST:
    case ActionTypes.CLIENT_LIST_REQUEST:
    case ActionTypes.CLIENT_ADD_REQUEST:
      return produce(state, draft => {
        draft.item = action.payload;
        draft.loading = true;
        draft.error = false;
      });
    case ActionTypes.CLIENT_DELETE_SUCCESS:
    case ActionTypes.CLIENT_LIST_SUCCESS:
    case ActionTypes.CLIENT_ADD_SUCCESS:
      return produce(state, draft => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case ActionTypes.CLIENT_DELETE_FAILURE:
    case ActionTypes.CLIENT_LIST_FAILURE:
    case ActionTypes.CLIENT_ADD_FAILURE:
      return produce(state, draft => {
        draft.item = action.payload;
        draft.loading = false;
        draft.error = true;
      });
    default:
      return state;
  }
}

export default reducer;
