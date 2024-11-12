import hyperid from 'hyperid';
import { manage } from 'manate';

const uuid = hyperid();

export class Todo {
  public id = uuid();
  public done = false;

  public constructor(public text: string) {}

  public remove() {
    todoList.todos = todoList.todos.filter((todo) => todo !== this);
  }
}

export class TodoList {
  public todos: Todo[] = [];
  public filter: 'all' | 'complete' | 'incomplete' = 'all';

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

export const todoList = manage(new TodoList());
