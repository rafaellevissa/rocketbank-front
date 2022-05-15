import type { Action, Client, Paginated } from './types';
import { AxiosResponse } from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes } from './consts';
import api from '../../../services/api';

export function* add({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.post, '/clients', payload);

    const { data, status } = response as AxiosResponse<Client>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.CLIENT_ADD_SUCCESS,
      payload: data,
    });

    window.location.reload()
  } catch (failed) {
    yield put({
      type: ActionTypes.CLIENT_ADD_FAILURE,
      payload: null,
    });
  }
}

export function* list(): Generator {
  try {
    const response: unknown = yield call(api.get, '/clients');

    const { data, status } = response as AxiosResponse<Paginated<Client>>;

    if (status !== 200) {
      throw response;
    }

    yield put({
      type: ActionTypes.CLIENT_LIST_SUCCESS,
      payload: data,
    });
  } catch (failed) {
    yield put({
      type: ActionTypes.CLIENT_LIST_FAILURE,
      payload: null,
    });
  }
}

export function* remove({ payload }: Action): Generator {
  try {
    const response: unknown = yield call(api.delete, '/clients/' + payload);

    const { data, status } = response as AxiosResponse<any>;

    if (status !== 201) {
      throw response;
    }

    yield put({
      type: ActionTypes.CLIENT_DELETE_SUCCESS,
      payload: data,
    });

    window.location.reload()
  } catch (failed) {
    yield put({
      type: ActionTypes.CLIENT_DELETE_FAILURE,
      payload: null,
    });
  }
}

export default all([
  takeLatest(ActionTypes.CLIENT_DELETE_REQUEST, remove),
  takeLatest(ActionTypes.CLIENT_LIST_REQUEST, list),
  takeLatest(ActionTypes.CLIENT_ADD_REQUEST, add),
]);
