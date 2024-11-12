import {
  Button,
  Checkbox,
  Divider,
  Input,
  Select,
  Space,
  Typography,
} from 'antd';
import { auto } from 'manate/react';
import React from 'react';

import { Todo, TodoList } from './store';

const { Text, Title } = Typography;

const App = auto((props: { todoList: TodoList }) => {
  console.log('render App');
  const { todoList } = props;
  return (
    <>
      <Title>Manate</Title>
      <Space direction="vertical">
        <InputComponent todoList={todoList} />
        <Divider />
        <TodoListComponent todoList={todoList} />
        <Divider />
        <FilterComponent todoList={todoList} />
      </Space>
    </>
  );
});

const InputComponent = auto((props: { todoList: TodoList }) => {
  console.log('render InputComponent');
  const { todoList } = props;
  const [text, setText] = React.useState('');
  return (
    <Space>
      <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
      <Button
        onClick={() => {
          todoList.add(text);
          setText('');
        }}
      >
        Add
      </Button>
    </Space>
  );
});

const TodoListComponent = auto((props: { todoList: TodoList }) => {
  console.log('render TodoListComponent');
  const { todoList } = props;
  return (
    <Space direction="vertical">
      {todoList.filteredTodos.map((todo) => (
        <TodoComponent key={todo.id} todo={todo} />
      ))}
    </Space>
  );
});

const TodoComponent = auto((props: { todo: Todo }) => {
  console.log('render TodoComponent');
  const { todo } = props;
  return (
    <Space>
      <Checkbox
        checked={todo.done}
        onChange={() => {
          todo.done = !todo.done;
        }}
      ></Checkbox>
      <Text>{todo.text}</Text>
      <Button size="small" onClick={() => todo.remove()}>
        Remove
      </Button>
    </Space>
  );
});

const FilterComponent = auto((props: { todoList: TodoList }) => {
  console.log('render FilterComponent');
  const { todoList } = props;
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
        value={todoList.filter}
        onChange={(value) => {
          todoList.filter = value;
        }}
      ></Select>
    </Space>
  );
});

export default App;
