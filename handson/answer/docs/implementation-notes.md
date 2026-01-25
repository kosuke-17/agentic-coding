# 実装のポイント解説

## ロジック実装

### addTodo関数

```typescript
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
```

**ポイント**:
- タイトルのバリデーションを最初に行う（早期リターン）
- スプレッド演算子で新しい配列を作成（イミュータブル）
- タイトルをtrimして前後の空白を除去

### toggleTodo関数

```typescript
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
```

**ポイント**:
- 存在確認を先に行う
- mapで新しい配列を作成
- 該当するTODOのみを更新

### filterTodos関数

```typescript
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
```

**ポイント**:
- switch文で明確に分岐
- defaultケースで'all'を処理

## UI実装

### useTodosフック

```typescript
export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<TodoFilter>('all');

  const handleAddTodo = useCallback(
    (title: string) => {
      setTodos((prevTodos) => addTodo(prevTodos, title));
    },
    []
  );
  // ...
}
```

**ポイント**:
- useStateで状態管理
- useCallbackでメモ化（再レンダリング最適化）
- 関数型更新で最新の状態を参照

### TodoItemコンポーネント

```typescript
export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        aria-label={`Mark "${todo.title}" as ${todo.completed ? 'incomplete' : 'complete'}`}
      />
      {/* ... */}
    </li>
  );
}
```

**ポイント**:
- アクセシビリティ配慮（aria-label）
- インラインスタイルでシンプルなスタイリング
- 完了状態に応じた視覚的フィードバック（取り消し線）

### Appコンポーネント

```typescript
export function App() {
  const {
    filteredTodos,
    filter,
    handleAddTodo,
    handleToggleTodo,
    handleDeleteTodo,
    handleFilterChange,
  } = useTodos();

  return (
    <div>
      <TodoForm onSubmit={handleAddTodo} />
      <TodoFilter currentFilter={filter} onFilterChange={handleFilterChange} />
      <TodoList
        todos={filteredTodos}
        onToggle={handleToggleTodo}
        onDelete={handleDeleteTodo}
      />
    </div>
  );
}
```

**ポイント**:
- useTodosフックで状態管理を集約
- コンポーネントを適切に分割
- propsでデータとコールバックを渡す

## テスト実装

### ロジックテスト

- 正常系と異常系を分けて記述
- beforeEachでテストデータを準備
- エッジケースもカバー

### UIテスト

- React Testing Libraryを使用
- ユーザーイベントをシミュレート
- アクセシビリティ属性も検証

## 改善の余地

- スタイリングをCSS Modulesやstyled-componentsに移行
- エラーハンドリングの強化（トースト通知等）
- ローカルストレージへの保存機能
- アニメーションの追加
- パフォーマンス最適化（React.memo等）
