import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [
      {id: 982739872, title: 'Write Better Code'}, 
      {id: 203909234, title: 'Lift Weights Faster'}
    ];
  }

  getAll() {
    return this.todos;
  }

  addTodo(value) {
    this.todos.push({
      id: Date.now(),
      title: value,
    });
    this.emit('change');
  }

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id);
    this.emit('change');
  }

  clearAll() {
    this.todos = [];
    this.emit('change');
  }

  handleActions(action) {
    switch (action.type) {
      case "ADD_TODO":
        this.addTodo(action.text)
        break;
      case "REMOVE_TODO":
        this.removeTodo(action.id)
        break;
      case "CLEAR_ALL_TODO":
        this.clearAll();
        break;
      default:
        break;
    }
  }
}

const todoStore = new TodoStore();
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;