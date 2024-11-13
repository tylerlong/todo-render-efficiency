import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Radio } from "antd";
import { Provider, atom, useAtom, useSetAtom } from "jotai";
import type { PrimitiveAtom } from "jotai";

type Todo = {
  title: string;
  completed: boolean;
};

const filterAtom = atom("all");
const todosAtom = atom<PrimitiveAtom<Todo>[]>([]);
const filteredAtom = atom<PrimitiveAtom<Todo>[]>((get) => {
  const filter = get(filterAtom);
  const todos = get(todosAtom);
  if (filter === "all") return todos;
  else if (filter === "completed")
    return todos.filter((atom) => get(atom).completed);
  else return todos.filter((atom) => !get(atom).completed);
});

type RemoveFn = (item: PrimitiveAtom<Todo>) => void;
type TodoItemProps = {
  atom: PrimitiveAtom<Todo>;
  remove: RemoveFn;
};
const TodoItem = React.memo(({ atom, remove }: TodoItemProps) => {
  console.log("render TodoItem");
  const [item, setItem] = useAtom(atom);
  const toggleCompleted = () =>
    setItem((props) => ({ ...props, completed: !props.completed }));
  return (
    <>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleCompleted}
      />
      <span style={{ textDecoration: item.completed ? "line-through" : "" }}>
        {item.title}
      </span>
      <CloseOutlined onClick={() => remove(atom)} />
    </>
  );
});

const Filter = () => {
  console.log("render Filter");
  const [filter, set] = useAtom(filterAtom);
  return (
    <Radio.Group onChange={(e) => set(e.target.value)} value={filter}>
      <Radio value="all">All</Radio>
      <Radio value="completed">Completed</Radio>
      <Radio value="incompleted">Incompleted</Radio>
    </Radio.Group>
  );
};

type FilteredType = {
  remove: RemoveFn;
};
const Filtered = (props: FilteredType) => {
  console.log("render Filtered");
  const [todos] = useAtom(filteredAtom);
  return <>{todos.map((atom) => (
    <TodoItem key={atom.toString()} atom={atom} {...props} />
  ))}</>;
};

const TodoList = () => {
  console.log("render TodoList");
  // Use `useSetAtom` to avoid re-render
  // const [, setTodos] = useAtom(todosAtom)
  const setTodos = useSetAtom(todosAtom);
  const remove: RemoveFn = (todo) =>
    setTodos((prev) => prev.filter((item) => item !== todo));
  const add = (e: any) => {
    e.preventDefault();
    const title = e.currentTarget.inputTitle.value;
    e.currentTarget.inputTitle.value = "";
    setTodos((prev) => [...prev, atom<Todo>({ title, completed: false })]);
  };
  return (
    <form onSubmit={add}>
      <Filter />
      <input name="inputTitle" placeholder="Type ..." />
      <Filtered remove={remove} />
    </form>
  );
};

export default function App() {
  console.log("render App");
  return (
    <Provider>
      <h1>Jōtai</h1>
      <TodoList />
    </Provider>
  );
}
