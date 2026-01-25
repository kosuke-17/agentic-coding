import { useState, useCallback } from 'react';
import type { Todo, TodoFilter } from '../../logic/types';
import { addTodo, toggleTodo, deleteTodo, filterTodos } from '../../logic/todo';

/**
 * TODO管理カスタムフック
 * 
 * TODO: 実装してください
 * 
 * このフックは以下の機能を提供します：
 * - todos: 現在のTODOリスト
 * - filter: 現在のフィルター
 * - filteredTodos: フィルタリングされたTODOリスト
 * - handleAddTodo: TODO追加
 * - handleToggleTodo: TODO完了状態切り替え
 * - handleDeleteTodo: TODO削除
 * - handleFilterChange: フィルター変更
 */
export function useTodos() {
  // TODO: 実装してください
  // ヒント:
  // 1. useStateでtodosとfilterを管理
  // 2. useCallbackで各ハンドラー関数を作成
  // 3. filterTodosを使ってfilteredTodosを計算
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');

  const handleAddTodo = useCallback((title: string) => {
    // TODO: 実装してください
  }, []);

  const handleToggleTodo = useCallback((id: string) => {
    // TODO: 実装してください
  }, []);

  const handleDeleteTodo = useCallback((id: string) => {
    // TODO: 実装してください
  }, []);

  const handleFilterChange = useCallback((newFilter: TodoFilter) => {
    // TODO: 実装してください
  }, []);

  const filteredTodos = filterTodos(todos, filter);

  return {
    todos,
    filter,
    filteredTodos,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleFilterChange,
  };
}
