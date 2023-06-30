import { AxiosResponse } from 'axios';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../apis/todos';

export interface TodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export type SetState<T> = {
  (value: T): T;
};

type CreateEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement>;

type UpdateEvent =
  | React.MouseEvent<HTMLButtonElement>
  | React.ChangeEvent<HTMLInputElement>;

export const getHandler = (): TodoItem[] | void => {
  getTodos().then(async ({ data }: AxiosResponse<TodoItem[]>) => {
    if (data) {
      const todoList = [...data].reverse();
      return [...todoList];
    } else {
      window.alert('할 일 목록을 가져오는 중 발생했습니다. 다시 시도해주세요.');
    }
  });
};

export const createHandler = (
  e: CreateEvent,
  todoText: string
): TodoItem | void => {
  const isEnter = (e as React.KeyboardEvent<HTMLInputElement>).key === 'Enter';
  const isClick = (e as React.MouseEvent<HTMLButtonElement>).type === 'click';

  if (isEnter || isClick) {
    createTodo(todoText).then(async ({ data }: AxiosResponse<TodoItem>) => {
      if (data) return { ...data };
      else window.alert('추가 중 오류가 발생했습니다. 다시 시도해주세요.');
    });
  }
};

export const updateHandler = (
  e: UpdateEvent,
  todoItem: TodoItem
): TodoItem | void => {
  const newTodoItem: TodoItem = todoItem;
  if (e.currentTarget.type === 'checkbox') {
    newTodoItem.isCompleted = !todoItem.isCompleted;
  }
  const { id, todo, isCompleted } = newTodoItem;
  updateTodo(id, todo, isCompleted).then(
    async ({ data }: AxiosResponse<TodoItem>) => {
      if (data) return { ...data };
      else window.alert('수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  );
};

export const deleteHandler = (
  id: number,
  todoList: TodoItem[]
): TodoItem[] | void => {
  deleteTodo(id).then(async ({ status }: AxiosResponse<number>) => {
    if (status === 204) {
      const newTodoList = todoList.filter((item: TodoItem) => item.id !== id);
      return [...newTodoList];
    } else {
      window.alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  });
};
