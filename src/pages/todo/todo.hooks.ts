export {};

export interface TodoItem {
  id: number;
  todo: string;
  isCompleted: boolean;
}

/*
import { KeyboardEvent, MouseEvent } from 'react';

type SetState<T> = {
  (value: T): T;
};

type CreateEvent =
  | KeyboardEvent<HTMLInputElement>
  | MouseEvent<HTMLButtonElement>;

type UpdateEvent = MouseEvent<HTMLButtonElement> | MouseEvent<HTMLInputElement>;

// 아래 고차함수 handler 를 컴포넌트에서 호출
// const createTodo = createHandler(todoList, setTodoList)
// () => createTodo(todoItem)

export const getHandler = (setState: SetState<Todo[]>) => {
  return () => {
    getTodos().then(async ({ data }: Todo[]) => {
      if (data) {
        const todoList = [...data].reverse();
        setState([...todoList]);
      } else {
        window.alert(
          '할 일 목록을 가져오는 중 발생했습니다. 다시 시도해주세요.'
        );
      }
    });
  };
};

export const getHandler2 = () => {
  getTodos().then(async ({ data }: Todo[]) => {
    if (data) {
      const todoList = [...data].reverse();
      return [...todoList];
    } else {
      window.alert('할 일 목록을 가져오는 중 발생했습니다. 다시 시도해주세요.');
    }
  });
};

export const createHandler = (todoList: Todo[], setState: SetState<Todo[]>) => {
  return async (todoText: string, e: CreateEvent) => {
    const isEnter = e instanceof KeyboardEvent && e?.key === 'Enter';
    const isClick = e instanceof MouseEvent && e?.type === 'click';
    if (isEnter || isClick) {
      createTodo(todoText).then(async ({ data }: Todo) => {
        if (data) setState([...todoList, data]);
        else window.alert('추가 중 오류가 발생했습니다. 다시 시도해주세요.');
      });
    }
  };
};

export const createHandler2 = (todoText: string, e: CreateEvent) => {
  const isEnter = e instanceof KeyboardEvent && e?.key === 'Enter';
  const isClick = e instanceof MouseEvent && e?.type === 'click';
  if (isEnter || isClick) {
    createTodo(todoText).then(async ({ data }: Todo) => {
      if (data) return { ...data };
      else window.alert('추가 중 오류가 발생했습니다. 다시 시도해주세요.');
    });
  }
};

export const updateHandler = (setState: SetState<Todo>) => {
  return async (e: UpdateEvent, todoItem: Todo) => {
    const newTodoItem: Todo = todoItem;
    if (e.currentTarget.type === 'checkbox') {
      newTodoItem.isCompleted = !todoItem.isCompleted;
    }
    const { id, todo, isCompleted } = newTodoItem;
    updateTodo(id, todo, isCompleted).then(async ({ data }: Todo) => {
      if (data) setState({ ...newTodoItem });
      else window.alert('수정 중 오류가 발생했습니다. 다시 시도해주세요.');
    });
  };
};

export const updateHandler2 = (e: UpdateEvent, todoItem: Todo) => {
  const newTodoItem: Todo = todoItem;
  if (e.currentTarget.type === 'checkbox') {
    newTodoItem.isCompleted = !todoItem.isCompleted;
  }
  const { id, todo, isCompleted } = newTodoItem;
  updateTodo(id, todo, isCompleted).then(async ({ data }: Todo) => {
    if (data) return { ...data };
    else window.alert('수정 중 오류가 발생했습니다. 다시 시도해주세요.');
  });
};

export const deleteHandler = (todoList: Todo[], setState: SetState<Todo[]>) => {
  return async (id: number) => {
    deleteTodo(id).then(async ({ status }: number) => {
      if (status === 204) {
        const newTodoList = todoList.filter((item: Todo) => item.id !== id);
        setState([...newTodoList]);
      } else {
        window.alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
      }
    });
  };
};

export const deleteHandler2 = (id: number, todoList: Todo[]) => {
  deleteTodo(id).then(async ({ status }: number) => {
    if (status === 204) {
      const newTodoList = todoList.filter((item: Todo) => item.id !== id);
      return [...newTodoList];
    } else {
      window.alert('삭제 중 오류가 발생했습니다. 다시 시도해주세요.');
    }
  });
};
*/
