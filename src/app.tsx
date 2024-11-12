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
  const { todoList } = props;
  const [text, setText] = React.useState('');
  return (
    <>
      <Title>Manate</Title>
      <Space direction="vertical">
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
        <Divider />
        {todoList.filteredTodos.map((todo) => (
          <TodoComponent key={todo.id} todo={todo} />
        ))}
        <Divider />
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
      </Space>
    </>
  );
});

const TodoComponent = auto((props: { todo: Todo }) => {
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

export default App;
