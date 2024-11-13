import { Divider, Space, Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const App = () => {
  console.log('render App');
  return (
    <>
      <Title>Manate</Title>
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
  console.log('render InputComponent');
  return <div>InputComponent</div>;
};

const TodoListComponent = () => {
  console.log('render TodoListComponent');
  return <div>TodoListComponent</div>;
};

const FilterComponent = () => {
  console.log('render FilterComponent');
  return <div>FilterComponent</div>;
};

export default App;
