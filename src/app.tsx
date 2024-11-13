import {
  Button,
  Checkbox,
  Divider,
  Input,
  Select,
  Space,
  Typography,
} from 'antd';
import { observer } from 'mobx-react-lite';
import React from 'react';

import { Todo, TodoList } from './store';

const { Text, Title } = Typography;

const App = observer((props: { todoList: TodoList }) => {
  console.log('render App');
  const { todoList } = props;
  return (
    <>
      <Title>MobX</Title>
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

const InputComponent = observer((props: { todoList: TodoList }) => {
  // console.log('render InputComponent'); // intentioanlly commented out, otherwise it will output a lot when typing.
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

const TodoListComponent = observer((props: { todoList: TodoList }) => {
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

const TodoComponent = observer((props: { todo: Todo }) => {
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

const FilterComponent = observer((props: { todoList: TodoList }) => {
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
