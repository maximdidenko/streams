import { 
  omit,
  mapKeys,
} from 'lodash';

import {
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM
} from '../actions/types';

export default (state = {}, {type, payload}) => {
  switch (type) {
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      return { ...state, ...mapKeys(payload, 'id') };
    case DELETE_STREAM:
      return omit(state, payload);
    default:
      return state;
  }
};
