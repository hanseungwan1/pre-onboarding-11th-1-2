import React, { useState, useRef } from 'react';
import { Flex, Input, Button } from '@chakra-ui/react';
import { CreateEvent, TodoItem, createHandler } from './todo.hooks';

type Props = {
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
};

const InsertForm: React.FC<Props> = ({ todoList, setTodoList }) => {
  const [todoText, setTodoText] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>(null);

  const addTodoHandler = async (e: CreateEvent) => {
    const data = await createHandler(e, todoText);
    if (data) {
      setTodoText('');
      setTodoList([data, ...todoList]);
    }
  };

  return (
    <Flex columnGap="5" rowGap="5" my="30" flexWrap="wrap">
      <Input
        flex="1"
        px="2%"
        py="6"
        flexBasis="70%"
        bg="white"
        border="0"
        outline="0"
        data-testid="new-todo-input"
        placeholder="할 일을 입력하세요..."
        ref={inputRef}
        value={todoText}
        onKeyDown={addTodoHandler}
        onChange={({ target }) => setTodoText(target.value)}
      />
      <Button
        data-testid="new-todo-add-button"
        minW="120px"
        flexGrow="1"
        py="6"
        colorScheme="teal"
        isDisabled={todoText.length < 1 && true}
        onClick={addTodoHandler}
      >
        추가
      </Button>
    </Flex>
  );
};

export default React.memo(InsertForm);
