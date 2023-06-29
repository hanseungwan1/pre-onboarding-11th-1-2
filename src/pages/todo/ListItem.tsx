import React, { useState, useRef } from 'react';
import { Flex, Button, Text, ListItem, Input } from '@chakra-ui/react';
import { TodoItem } from './todo.hooks';

type GreetingsProps = {
  itemData: TodoItem;
  // children: React.ReactNode;
};

const Item: React.FC<GreetingsProps> = ({ itemData }) => {
  const [item, setItem] = useState<TodoItem>(itemData);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const changeText = isEditMode ? (
    <Input
      flex="1"
      py="17.5"
      fontSize="1rem"
      bg="#D7E5F0"
      border="0"
      outline="0"
      value={item.todo}
    ></Input>
  ) : (
    <Text flex="1" pl="2" fontSize="1rem">
      {item.todo}
    </Text>
  );

  return (
    <ListItem flex="1">
      <Flex
        minH="50"
        px="20"
        py="5"
        columnGap="10"
        bg="rgba(255,255,255,0.8)"
        border="1px solid #D7E5F0"
        borderRadius="999"
      >
        <Input
          type="checkbox"
          checked={item.isCompleted}
          w="20px"
          outline="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ accentColor: '#0082FC' }}
        ></Input>
        {changeText}
        <Button
          data-testid="new-todo-add-button"
          w="60px"
          bg="transparent"
          cursor="pointer"
          border="0"
          onClick={() => setIsEditMode(true)}
        >
          수정
        </Button>
        <Button
          data-testid="new-todo-add-button"
          w="60px"
          bg="transparent"
          cursor="pointer"
          border="0"
          color="#DB261D"
        >
          삭제
        </Button>
      </Flex>
    </ListItem>
  );
};

export default Item;
