import React, { useEffect, useState, useRef } from 'react';
import {
  Flex,
  Button,
  Text,
  ListItem,
  Input,
  Checkbox,
} from '@chakra-ui/react';
import { TodoItem } from './todo.hooks';
import { updateHandler, deleteHandler } from './todo.hooks';

type Props = {
  itemData: TodoItem;
  todoList: TodoItem[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoItem[]>>;
};

type ButtonHandler = (e: React.MouseEvent<HTMLButtonElement>) => void;
interface ItemButton {
  text: string;
  dataset: string;
  onClick: ButtonHandler;
}

const Item: React.FC<Props> = ({ itemData, todoList, setTodoList }) => {
  const [todoItem, setTodoItem] = useState<TodoItem>(itemData);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    isEditMode && inputRef.current?.focus();
  }, [isEditMode]);

  const changeText = isEditMode ? (
    <Input
      data-testid="modify-input"
      flex="1"
      flexGrow="1"
      flexBasis="70%"
      py="17.5"
      bg="#D7E5F0"
      border="0"
      outline="0"
      ref={inputRef}
      onChange={e => setTodoItem({ ...todoItem, todo: e.target.value })}
      value={todoItem.todo}
    ></Input>
  ) : (
    <Text
      flex="1"
      flexGrow="1"
      flexBasis="70%"
      display="flex"
      alignItems="center"
      pl="4"
    >
      {todoItem.todo}
    </Text>
  );

  const BUTTONS_NO_EDIT = [
    {
      text: '수정',
      dataset: 'modify-button',
      onClick: () => setIsEditMode(true),
    },
    {
      text: '삭제',
      dataset: 'delete-button',
      onClick: async () => {
        const data = await deleteHandler(todoItem.id, todoList);
        data && setTodoList([...data]);
      },
    },
  ];

  const BUTTONS_EDIT = [
    {
      text: '제출',
      dataset: 'submit-button',
      onClick: async (e: React.MouseEvent<HTMLButtonElement>) => {
        if (todoItem.todo.length < 1) {
          setTodoItem({ ...todoItem, todo: itemData.todo });
        } else {
          const data = await updateHandler(e, todoItem);
          data && setTodoItem(data);
        }
        setIsEditMode(false);
      },
    },
    {
      text: '취소',
      dataset: 'cancel-button',
      onClick: () => {
        setTodoItem({ ...todoItem, todo: itemData.todo });
        setIsEditMode(false);
      },
    },
  ];

  const buttonItems = isEditMode ? BUTTONS_EDIT : BUTTONS_NO_EDIT;
  const changeButtons = buttonItems.map((item: ItemButton, index) => (
    <Button
      key={index}
      data-testid={item.dataset}
      flex="1"
      flexBasis="60px"
      bg="transparent"
      onClick={item.onClick}
    >
      {item.text}
    </Button>
  ));

  return (
    <ListItem flex="1" mx="4%">
      <Flex
        px="10"
        py="2"
        columnGap="2"
        border="1px solid #D7E5F0"
        borderRadius="999"
      >
        <Checkbox
          onChange={async e => {
            const data = await updateHandler(e, todoItem);
            data && setTodoItem(data);
          }}
          isChecked={todoItem.isCompleted}
          w="20px"
          outline="0"
          style={{ accentColor: '#319795' }}
        ></Checkbox>
        {changeText}
        {changeButtons as React.ReactNode}
      </Flex>
    </ListItem>
  );
};

export default React.memo(Item);
