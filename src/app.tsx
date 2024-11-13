import {
  Button,
  Checkbox,
  Divider,
  Input,
  Select,
  Space,
  Typography,
} from 'antd';
import React from 'react';

import { Todo, useStore } from './store';

const { Title, Text } = Typography;

const App = () => {
  console.log('render App');
  return (
    <>
      <Title>Zustand</Title>
      <Space direction="vertical">
        <InputComponent />
        <Divider />
        <TodoListComponent />
        <Divider />
        <FilterComponent />
      </Space>
    </>
  );
};

const InputComponent = () => {
  // console.log('render InputComponent'); // intentionally commented out, otherwise it will output a lot when typing
  const [text, setText] = React.useState('');
  const addTodo = useStore((state) => state.addTodo);
  return (
    <Space>
      <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
      <Button
        onClick={() => {
          addTodo(text);
          setText('');
        }}
      >
        Add
      </Button>
    </Space>
  );
};

const TodoListComponent = () => {
  console.log('render TodoListComponent');
  const visibleTodos = useStore((state) => state.visibleTodos());
  return (
    <Space direction="vertical">
      {visibleTodos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </Space>
  );
};

// eslint-disable-next-line react/display-name
const TodoComponent = React.memo(({ todo }: { todo: Todo }) => {
  console.log('render TodoComponent');
  const toggleTodo = useStore((state) => state.toggleTodo);
  const deleteTodo = useStore((state) => state.deleteTodo);
  return (
    <Space>
      <Checkbox
        checked={todo.done}
        onChange={() => {
          toggleTodo(todo.id);
        }}
      ></Checkbox>
      <Text>{todo.text}</Text>
      <Button size="small" onClick={() => deleteTodo(todo.id)}>
        Remove
      </Button>
    </Space>
  );
});

const FilterComponent = () => {
  console.log('render FilterComponent');
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);
  return (
    <Space>
      Show:{' '}
      <Select
        style={{ width: 120 }}
        options={[
          { value: 'all', label: 'All' },
          { value: 'complete', label: 'Complete' },
          { value: 'incomplete', label: 'Incomplete' },
        ]}
        value={filter}
        onChange={(value) => {
          setFilter(value);
        }}
      ></Select>
    </Space>
  );
};

export default App;
