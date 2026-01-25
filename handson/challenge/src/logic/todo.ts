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
  // TODO: 実装してください
  // ヒント:
  // 1. タイトルが空（または空白のみ）の場合はエラーをスロー
  // 2. 新しいTodoオブジェクトを作成（id, title, completed: false, createdAt）
  // 3. 新しい配列を返す（元の配列を変更しない）
  throw new Error('Not implemented');
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
  // TODO: 実装してください
  // ヒント:
  // 1. 指定されたIDのTODOが存在するか確認
  // 2. 存在しない場合はエラーをスロー
  // 3. mapを使って、該当するTODOのcompletedを反転
  // 4. 新しい配列を返す
  throw new Error('Not implemented');
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
  // TODO: 実装してください
  // ヒント:
  // 1. 指定されたIDのTODOが存在するか確認
  // 2. 存在しない場合はエラーをスロー
  // 3. filterを使って、該当するTODOを除外
  // 4. 新しい配列を返す
  throw new Error('Not implemented');
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
  // TODO: 実装してください
  // ヒント:
  // 1. filterの値に応じて分岐（'all', 'active', 'completed'）
  // 2. 'all'の場合は全て返す
  // 3. 'active'の場合は未完了（completed: false）のみ
  // 4. 'completed'の場合は完了済み（completed: true）のみ
  throw new Error('Not implemented');
}
