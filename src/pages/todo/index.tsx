import React, { useEffect, useState } from 'react';
import { Box, List, Text } from '@chakra-ui/react';
import { TodoItem, getHandler } from './todo.hooks';
import InsertForm from './InsertForm';
import Item from './ListItem';

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  const ListContainer = todoList.map((item: TodoItem) => (
    <Item
      key={item.id}
      itemData={item}
      todoList={todoList}
      setTodoList={setTodoList}
    />
  ));

  const initList = async () => {
    const data = await getHandler();
    data && setTodoList(data);
  };

  useEffect(() => {
    initList();
  }, []);

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
