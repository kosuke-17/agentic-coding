import type { Todo, TodoFilter } from './types';

/**
 * ユニークな ID を生成する
 *
 * @returns ユニークな ID 文字列
 */
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

/**
 * TODO を追加する
 *
 * @param todos - 現在の TODO リスト
 * @param title - 新しい TODO のタイトル
 * @returns 新しい TODO を含む配列
 * @throws タイトルが空の場合
 *
 * @example
 * const newTodos = addTodo([], 'Buy milk');
 */
export function addTodo(todos: Todo[], title: string): Todo[] {
  if (!title.trim()) {
    throw new Error('Title cannot be empty');
  }

  const newTodo: Todo = {
    id: generateId(),
    title: title.trim(),
    completed: false,
    createdAt: new Date(),
  };

  return [...todos, newTodo];
}

/**
 * TODO の完了状態を切り替える
 *
 * @param todos - 現在の TODO リスト
 * @param id - 切り替える TODO の ID
 * @returns 更新された TODO 配列
 * @throws TODO が見つからない場合
 *
 * @example
 * const updatedTodos = toggleTodo(todos, 'todo-id');
 */
export function toggleTodo(todos: Todo[], id: string): Todo[] {
  const todoExists = todos.some((todo) => todo.id === id);
  if (!todoExists) {
    throw new Error(`Todo with id "${id}" not found`);
  }

  return todos.map((todo) => {
    if (todo.id === id) {
      return { ...todo, completed: !todo.completed };
    }
    return todo;
  });
}

/**
 * TODO を削除する
 *
 * @param todos - 現在の TODO リスト
 * @param id - 削除する TODO の ID
 * @returns 削除後の TODO 配列
 * @throws TODO が見つからない場合
 *
 * @example
 * const updatedTodos = deleteTodo(todos, 'todo-id');
 */
export function deleteTodo(todos: Todo[], id: string): Todo[] {
  const todoExists = todos.some((todo) => todo.id === id);
  if (!todoExists) {
    throw new Error(`Todo with id "${id}" not found`);
  }

  return todos.filter((todo) => todo.id !== id);
}

/**
 * TODO をフィルタリングする
 *
 * @param todos - 現在の TODO リスト
 * @param filter - フィルター条件
 * @returns フィルタリングされた TODO 配列
 *
 * @example
 * const activeTodos = filterTodos(todos, 'active');
 */
export function filterTodos(todos: Todo[], filter: TodoFilter): Todo[] {
  switch (filter) {
    case 'active':
      return todos.filter((todo) => !todo.completed);
    case 'completed':
      return todos.filter((todo) => todo.completed);
    case 'all':
    default:
      return todos;
  }
}
