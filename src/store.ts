import hyperid from 'hyperid';
import { configure, makeAutoObservable } from 'mobx';

configure({
  enforceActions: 'never',
});

const uuid = hyperid();

export class Todo {
  public id = uuid();
  public done = false;

  public constructor(public text: string) {
    makeAutoObservable(this);
  }

  public remove() {
    todoList.todos = todoList.todos.filter((todo) => todo !== this);
  }
}

export class TodoList {
  public todos: Todo[] = [];
  public filter: 'all' | 'complete' | 'incomplete' = 'all';

  public constructor() {
    makeAutoObservable(this);
  }

  public get filteredTodos() {
    switch (this.filter) {
      case 'complete':
        return this.todos.filter((todo) => todo.done);
      case 'incomplete':
        return this.todos.filter((todo) => !todo.done);
      default:
        return this.todos;
    }
  }

  public add(text: string) {
    this.todos.push(new Todo(text));
  }
}

export const todoList = new TodoList();
