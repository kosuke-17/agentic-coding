import { useState, useCallback } from 'react';
import type { Todo, TodoFilter } from '../../logic/types';
import { addTodo, toggleTodo, deleteTodo, filterTodos } from '../../logic/todo';

/**
 * TODO管理カスタムフック
 */
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');

  const handleAddTodo = useCallback(
    (title: string) => {
      setTodos((prevTodos) => addTodo(prevTodos, title));
    },
    []
  );

  const handleToggleTodo = useCallback(
    (id: string) => {
      setTodos((prevTodos) => toggleTodo(prevTodos, id));
    },
    []
  );

  const handleDeleteTodo = useCallback(
    (id: string) => {
      setTodos((prevTodos) => deleteTodo(prevTodos, id));
    },
    []
  );

  const handleFilterChange = useCallback((newFilter: TodoFilter) => {
    setFilter(newFilter);
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
