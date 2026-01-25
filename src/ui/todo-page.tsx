import { TodoForm } from './todo-form';
import { TodoFilter } from './todo-filter';
import { TodoList } from './todo-list';
import { useTodos } from './hooks/use-todos';

/**
 * メインアプリコンポーネント
 */
export function TodoPage() {
  const {
    filteredTodos,
    filter,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleFilterChange,
  } = useTodos();

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        padding: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>TODO App</h1>
      <div
        style={{
          border: '1px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
        }}
      >
        <TodoForm onSubmit={handleAddTodo} />
        <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
        <TodoList
          todos={filteredTodos}
          onToggle={handleToggleTodo}
          onDelete={handleDeleteTodo}
        />
      </div>
    </div>
  );
}
