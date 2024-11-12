import hyperid from 'hyperid';
import { manage } from 'manate';

const uuid = hyperid();

export class Todo {
  public id = uuid();
  public text: string;
  public done = false;
}

export class Store {
  public todos: Todo[] = [];
  public filter: 'all' | 'complete' | 'incomplete' = 'all';
  public get filteredTodos() {
    switch (this.filter) {
      case 'all':
        return this.todos;
      case 'complete':
        return this.todos.filter((todo) => todo.done);
      case 'incomplete':
        return this.todos.filter((todo) => !todo.done);
    }
  }
}

const store = manage(new Store());

export default store;
