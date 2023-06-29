import React, { useState, useRef } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';
import { TodoItem, createHandler } from './todo.hooks';

type Props = {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  // children: React.ReactNode;
};

const InsertForm: React.FC<Props> = ({ todoList, setTodoList }) => {
  const [todoText, setTodoText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Flex columnGap="5" rowGap="5" my="30" flexWrap="wrap">
      <Input
        flex="1"
        px="2%"
        py="6"
        flexBasis="70%"
        fontSize="1rem"
        borderRadius="5"
        bg="white"
        border="0"
        outline="0"
        data-testid="new-todo-input"
        placeholder="할 일을 입력하세요..."
        ref={inputRef}
        onKeyDown={e => {
          const data = createHandler(e, todoText);
          data && setTodoList([data, ...todoList]);
        }}
        onChange={e => setTodoText(e.target.value)}
      />
      <Button
        data-testid="new-todo-add-button"
        minW="120px"
        flexGrow="1"
        py="6"
        borderRadius="5"
        border="0"
        cursor="pointer"
        fontSize="1rem"
        colorScheme="teal"
        onClick={e => {
          const data = createHandler(e, todoText);
          data && setTodoList([data, ...todoList]);
        }}
      >
        추가
      </Button>
    </Flex>
  );
};

export default InsertForm;
