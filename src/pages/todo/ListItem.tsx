import React, { useEffect, useState, useRef } from 'react';
import { Flex, Button, Text, ListItem, Input } from '@chakra-ui/react';
import { TodoItem } from './todo.hooks';
import { updateHandler, deleteHandler } from './todo.hooks';

type Props = {
  itemData: TodoItem;
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
  // children: React.ReactNode;
};

const Item: React.FC<Props> = ({ itemData, todoList, setTodoList }) => {
  const [todoItem, setTodoItem] = useState<TodoItem>(itemData);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const changeText = isEditMode ? (
    <Input
      flex="1"
      py="17.5"
      fontSize="1rem"
      bg="#D7E5F0"
      border="0"
      outline="0"
      ref={inputRef}
      onChange={e => setTodoItem({ ...todoItem, todo: e.target.value })}
      value={todoItem.todo}
    ></Input>
  ) : (
    <Text flex="1" pl="2" fontSize="1rem">
      {todoItem.todo}
    </Text>
  );

  useEffect(() => {
    isEditMode && inputRef.current?.focus();
  }, [isEditMode]);

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
          onChange={e => {
            const data = updateHandler(e, todoItem);
            data && setTodoItem(data);
          }}
          checked={todoItem.isCompleted}
          w="20px"
          outline="0"
          display="flex"
          alignItems="center"
          justifyContent="center"
          style={{ accentColor: '#0082FC' }}
        ></Input>
        {changeText}
        <Button
          data-testid="modify-button"
          w="60px"
          bg="transparent"
          cursor="pointer"
          border="0"
          onClick={() => setIsEditMode(true)}
        >
          수정
        </Button>
        <Button
          data-testid="delete-button"
          w="60px"
          bg="transparent"
          cursor="pointer"
          border="0"
          color="#DB261D"
          onClick={() => {
            const data = deleteHandler(todoItem.id, todoList);
            data && setTodoList([...data]);
          }}
        >
          삭제
        </Button>
        <Button
          data-testid="submit-button"
          w="60px"
          bg="transparent"
          cursor="pointer"
          border="0"
          onClick={e => {
            if (todoItem.todo.length < 1) {
              setTodoItem({ ...todoItem, todo: itemData.todo });
            } else {
              const data = updateHandler(e, todoItem);
              data && setTodoItem(data);
            }
            setIsEditMode(false);
          }}
        >
          제출
        </Button>
        <Button
          data-testid="cancel-button"
          w="60px"
          bg="transparent"
          cursor="pointer"
          border="0"
          color="#DB261D"
          onClick={() => {
            setTodoItem({ ...todoItem, todo: itemData.todo });
            setIsEditMode(false);
          }}
        >
          취소
        </Button>
      </Flex>
    </ListItem>
  );
};

export default Item;
