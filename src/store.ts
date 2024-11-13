import hyperid from 'hyperid';
import { create } from 'zustand';

const uuid = hyperid();

type Todo = {
  id: string;
  text: string;
  done: boolean;
};

type Filter = 'all' | 'complete' | 'incomplete';

type TodoState = {
  filter: Filter;
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
  getVisibleTodos: () => Todo[];
};

export const useStore = create<TodoState>((set, get) => ({
  filter: 'all',
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({
      todos: [...state.todos, { text, done: false, id: uuid() }],
    })),
  toggleTodo: (id: string) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    })),
  deleteTodo: (id: string) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  getVisibleTodos: () => {
    const { filter, todos } = get();
    switch (filter) {
      case 'complete':
        return todos.filter((todo) => todo.done);
      case 'incomplete':
        return todos.filter((todo) => !todo.done);
      default:
        return todos;
    }
  },
}));
