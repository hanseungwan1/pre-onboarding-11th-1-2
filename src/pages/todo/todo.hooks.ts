import { AxiosResponse } from 'axios';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../apis/todos';

export interface TodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
}

type CreateEvent =
  | React.KeyboardEvent<HTMLInputElement>
  | React.MouseEvent<HTMLButtonElement>;

type UpdateEvent =
  | React.MouseEvent<HTMLButtonElement>
  | React.ChangeEvent<HTMLInputElement>;

export const getHandler = async () => {
  try {
    return getTodos().then(async ({ data }: AxiosResponse<TodoItem[]>) => {
      if (data) {
        const newTodoList = data.reverse();
        return [...newTodoList];
      }
    });
  } catch (error) {
    console.error;
    window.alert('할 일 목록을 가져오는 중 발생했습니다. 다시 시도해주세요.');
  }
};

export const createHandler = async (e: CreateEvent, todoText: string) => {
  const isEnter = (e as React.KeyboardEvent<HTMLInputElement>).key === 'Enter';
  const isClick = (e as React.MouseEvent<HTMLButtonElement>).type === 'click';

  if (isEnter || isClick) {
    try {
      return createTodo(todoText).then(
        async ({ data }: AxiosResponse<TodoItem>) => {
          if (data) return { ...data };
        }
      );
    } catch (error) {
      console.error;
      window.alert('추가 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  }
};

export const updateHandler = async (e: UpdateEvent, todoItem: TodoItem) => {
  if (e.currentTarget.type === 'checkbox')
    todoItem.isCompleted = !todoItem.isCompleted;
  const { id, todo, isCompleted } = todoItem;
  try {
    return updateTodo(id, todo, isCompleted).then(
      async ({ data }: AxiosResponse<TodoItem>) => {
        if (data) return { ...data };
      }
    );
  } catch (error) {
    console.error;
    window.alert('수정 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
};

export const deleteHandler = async (id: number, todoList: TodoItem[]) => {
  try {
    return deleteTodo(id).then(async ({ status }: AxiosResponse<number>) => {
      if (status === 204) {
        const newTodoList = todoList.filter((item: TodoItem) => item.id !== id);
        return [...newTodoList];
      }
    });
  } catch (error) {
    console.error;
    window.alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
  }
};
