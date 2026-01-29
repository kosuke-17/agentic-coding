---
description: TodoPageをTDDで実装する。SubagentsとSkillsを使用してテスト作成から実装まで実行する。
---

# TodoPage TDD 実装

`src/ui/todo-page.tsx` を TDD（テスト駆動開発）で最初から実装します。

## 重要な指示

**必ず Subagents と Skills を使用してください：**

1. **Subagents を使用**: タスクを分担して効率的に処理
   - `@tdd-test-writer` を使用してテストを作成
   - `@tdd-implementation-helper` を使用して実装を支援

2. **Skills を参照**: TDD に特化した知識と操作を使用
   - `@tdd-react-component` Skill を参照して実装を支援

## 前提条件

- 既存の `src/ui/todo-page.tsx` は「答え」として存在しますが、**参照しないでください**
- 最初から実装してください
- 既存のコンポーネント（TodoForm、TodoFilter、TodoList）とフック（useTodos）は使用可能です

## 実装手順

### 1. 🔴 Red フェーズ - テストの作成

**Subagent `@tdd-test-writer` を使用して以下を実行：**

1. `src/ui/todo-page.test.tsx` にテストを作成
2. 以下のテストケースをカバー：
   - コンポーネントがレンダリングされる
   - タイトル「TODO App」が表示される
   - TodoForm が表示される
   - TodoFilter が表示される
   - TodoList が表示される
   - 空の状態で「TODOがありません」が表示される
   - useTodos フックが正しく使用される

3. テストを実行して **失敗** を確認

```bash
pnpm test src/ui/todo-page.test.tsx
```

### 2. 🟢 Green フェーズ - 実装の作成

**Subagent `@tdd-implementation-helper` と Skill `@tdd-react-component` を使用して以下を実行：**

1. `src/ui/todo-page.tsx` に実装を作成
2. テストが通る **最小限** のコードを実装
3. 既存のコンポーネントとフックを使用：
   - `TodoForm` コンポーネント
   - `TodoFilter` コンポーネント
   - `TodoList` コンポーネント
   - `useTodos` フック

4. テストを実行して **成功** を確認

```bash
pnpm test src/ui/todo-page.test.tsx
```

### 3. 🔵 Refactor フェーズ - コード改善

**Subagent `@tdd-implementation-helper` を使用して以下を実行：**

1. コードを改善：
   - 重複の排除
   - 変数名の改善
   - JSDoc コメントの追加
   - アクセシビリティの向上

2. テストを再実行して、引き続き **成功** することを確認

```bash
pnpm test src/ui/todo-page.test.tsx
```

## 使用するコンポーネントとフック

### インポート

```typescript
import { TodoForm } from './todo-form';
import { TodoFilter } from './todo-filter';
import { TodoList } from './todo-list';
import { useTodos } from './hooks/use-todos';
```

### useTodos フックの戻り値

```typescript
const {
  filteredTodos,    // フィルタリングされたTODOリスト
  filter,           // 現在のフィルター
  handleAddTodo,    // TODO追加ハンドラー
  handleToggleTodo, // TODO完了状態切り替えハンドラー
  handleDeleteTodo, // TODO削除ハンドラー
  handleFilterChange, // フィルター変更ハンドラー
} = useTodos();
```

## 報告フォーマット

各フェーズの結果を以下の形式で報告してください：

### 🔴 Red フェーズ結果
- 作成したテストケース
- テスト実行結果（失敗を確認）

### 🟢 Green フェーズ結果
- 実装した内容
- テスト実行結果（成功を確認）

### 🔵 Refactor フェーズ結果
- 改善した内容
- テスト実行結果（成功を維持）

## 注意事項

- **既存実装を参照しない**: `src/ui/todo-page.tsx` の既存実装は「答え」なので参照しないでください
- **TDDサイクルを必ず実行**: Red → Green → Refactor の順序を守ってください
- **Subagents と Skills を必ず使用**: 明示的に Subagents と Skills を使用してください
