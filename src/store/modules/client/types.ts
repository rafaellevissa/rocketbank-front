export interface ActionTypesBase {
  CLIENT_DELETE_REQUEST: string;
  CLIENT_DELETE_SUCCESS: string;
  CLIENT_DELETE_FAILURE: string;

  CLIENT_LIST_REQUEST: string;
  CLIENT_LIST_SUCCESS: string;
  CLIENT_LIST_FAILURE: string;

  CLIENT_ADD_REQUEST: string;
  CLIENT_ADD_SUCCESS: string;
  CLIENT_ADD_FAILURE: string;

  CLIENT_FIND_REQUEST: string;
  CLIENT_FIND_SUCCESS: string;
  CLIENT_FIND_FAILURE: string;

  CLIENT_UPDATE_REQUEST: string;
  CLIENT_UPDATE_SUCCESS: string;
  CLIENT_UPDATE_FAILURE: string;
}

export interface Paginated<T = any> {
  meta: {
    total: number;
    per_page: number;
    current_page: number;
    last_page: number;
    first_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string;
    previous_page_url: string
  },
  data: T[]
}

export interface Client {
  id: number;
  name?: string;
  birthdate?: string;
  document?: string;
  created_at?: string;
  updated_at?: string;
}

export interface StateBase {
  item: string | Page | Client | Client[] | null;
  itemEdit: string | Client | Page | null;
  error: boolean;
  loading: boolean;
}

export interface Action {
  type: string;
  payload: string | Client | Page | null;
  meta: any;
  error: any;
}

export interface Page {
	currentPage: number;
	perPage: number;
}