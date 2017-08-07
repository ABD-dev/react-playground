import dispatcher from '../dispatcher';

export function add(text) {
  dispatcher.dispatch({
    type: 'ADD_TODO',
    text
  });
}

export function remove(id) {
  dispatcher.dispatch({
    type: 'REMOVE_TODO',
    id
  });
}

export function clear() {
  dispatcher.dispatch({
    type: 'CLEAR_ALL_TODO'
  });
}