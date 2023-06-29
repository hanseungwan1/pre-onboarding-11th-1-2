import React, { useState } from 'react';
import { Box, List, Text } from '@chakra-ui/react';
import { TodoItem } from './todo.hooks';
import InsertForm from './InsertForm';
import Item from './ListItem';

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const testData: TodoItem[] = [
    { id: 1, todo: 'Todo1', isCompleted: false },
    { id: 2, todo: 'Todo2', isCompleted: false },
    { id: 3, todo: 'Todo3', isCompleted: true },
  ];

  const ListContainer = testData.map((item: TodoItem) => (
    <Item
      key={item.id}
      itemData={item}
      todoList={todoList}
      setTodoList={setTodoList}
    />
  ));

  // useEffect(() => {
  //   const data = getHandler();
  //   data && setTodoList(data);
  // }, []);

  return (
    <Box m="0 auto" h="100%">
      <Box mb="4vh" px="10%" py="5%" bg="#D7E5F0" borderRadius="10">
        <Text textAlign="center" fontSize="2.8rem" fontWeight="900">
          TO DO
        </Text>
        <InsertForm todoList={todoList} setTodoList={setTodoList} />
      </Box>
      <List
        display="flex"
        flexDirection="column"
        rowGap="4"
        style={{ paddingInlineStart: 0 }}
      >
        {ListContainer}
      </List>
    </Box>
  );
};

export default Todo;
