# TDD React Component Skill

## 概要

このスキルは、React コンポーネントを TDD（テスト駆動開発）で実装するための専門知識と操作を提供します。

## 適用場面

以下の場面でこのスキルを使用してください：

- React コンポーネントを TDD で実装する際
- UI コンポーネントのテストを作成する際
- TDD サイクル（Red → Green → Refactor）を実行する際

## TDD サイクル

### 🔴 Red フェーズ - テストの作成

1. **テストケースの洗い出し**
   - コンポーネントの仕様を分析
   - レンダリングテスト、インタラクションテスト、エッジケースを洗い出す

2. **テストコードの作成**
   - React Testing Library を使用
   - ロールベースのクエリを優先
   - アクセシビリティを意識

3. **テストの実行と失敗確認**
   - テストが失敗することを確認（まだ実装がないため）

### 🟢 Green フェーズ - 実装の作成

1. **最小限の実装**
   - テストが通る最小限のコードを書く
   - 過度な最適化は後回し

2. **テストの実行と成功確認**
   - テストが成功することを確認

### 🔵 Refactor フェーズ - コード改善

1. **コードの改善**
   - 重複の排除
   - 変数名の改善
   - JSDoc コメントの追加
   - アクセシビリティの向上

2. **テストの再実行**
   - テストが引き続き成功することを確認

## React コンポーネントの実装パターン

### 関数コンポーネント

```typescript
/**
 * コンポーネントの説明
 */
interface ComponentProps {
  prop1: string;
  prop2: number;
}

export function Component({ prop1, prop2 }: ComponentProps) {
  return <div>{prop1}</div>;
}
```

### カスタムフックの使用

```typescript
const { todos, handleAddTodo } = useTodos();
```

### イベントハンドラー

```typescript
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // 処理
};
```

## テストの書き方

### React Testing Library の基本

```typescript
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';

describe('Component', () => {
  it('期待される動作の説明', () => {
    // Arrange
    render(<Component />);
    
    // Act
    const button = screen.getByRole('button');
    await userEvent.click(button);
    
    // Assert
    expect(screen.getByText('expected')).toBeInTheDocument();
  });
});
```

### カスタムフックのモック

```typescript
vi.mock('./hooks/use-todos', () => ({
  useTodos: () => ({
    filteredTodos: [],
    filter: 'all',
    handleAddTodo: vi.fn(),
    handleToggleTodo: vi.fn(),
    handleDeleteTodo: vi.fn(),
    handleFilterChange: vi.fn(),
  }),
}));
```

### ロールベースのクエリ

```typescript
// 推奨: ロールベース
screen.getByRole('heading', { name: 'TODO App' });
screen.getByRole('button', { name: '追加' });

// 最後の手段: テキストベース
screen.getByText('TODO App');
```

## ベストプラクティス

### テストの書き方

1. **ロールベースのクエリを優先**: `getByRole`, `getByLabelText` を使用
2. **アクセシビリティを意識**: `aria-label` などを検証
3. **ユーザーの視点でテスト**: ユーザーが何を見て、何をするかを考える
4. **モック関数を使用**: コールバックの呼び出しを検証

### 実装の書き方

1. **型安全性を確保**: TypeScript の型を正しく使用
2. **純粋関数として実装**: 副作用を最小限に
3. **適切なコメント**: JSDoc コメントを追加
4. **アクセシビリティを考慮**: `aria-label` などを適切に設定

## 禁止事項

- ❌ テストなしでの実装追加
- ❌ any 型の使用
- ❌ 実装の詳細をテストする（クラス名、内部状態等）
- ❌ 既存実装（答え）を参照してコピー

## 推奨事項

- ✅ TDD サイクルを必ず実行（Red → Green → Refactor）
- ✅ テストが通る最小限の実装から始める
- ✅ テストが通ったままコードを改善
- ✅ ユーザーの視点でテストを書く

## 使用例

### TodoPage コンポーネントの実装

```typescript
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
    <div>
      <h1>TODO App</h1>
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

### TodoPage のテスト

```typescript
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TodoPage } from './todo-page';

vi.mock('./hooks/use-todos', () => ({
  useTodos: () => ({
    filteredTodos: [],
    filter: 'all',
    handleAddTodo: vi.fn(),
    handleToggleTodo: vi.fn(),
    handleDeleteTodo: vi.fn(),
    handleFilterChange: vi.fn(),
  }),
}));

describe('TodoPage', () => {
  it('タイトル「TODO App」が表示される', () => {
    render(<TodoPage />);
    expect(screen.getByRole('heading', { name: 'TODO App' })).toBeInTheDocument();
  });
});
```
