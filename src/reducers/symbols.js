import { SYMBOLS_LOADED } from '../actions';

export default (state = [], action) => {
  switch(action.type) {
    case SYMBOLS_LOADED:
      return [...action.symbols];
    default:
    return state;
  }
}