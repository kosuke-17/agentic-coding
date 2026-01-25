# UI仕様書

## 概要

TODOアプリのUI仕様を定義します。

## コンポーネント構成

```
App
├── TodoForm (TODO追加フォーム)
├── TodoFilter (フィルタリング)
└── TodoList
    └── TodoItem (各TODOアイテム)
```

## 各コンポーネントの仕様

### App

- **役割**: メインアプリコンポーネント
- **子コンポーネント**: TodoForm, TodoFilter, TodoList
- **状態管理**: useTodosフックを使用

### TodoForm

- **役割**: 新しいTODOを追加するフォーム
- **要素**:
  - 入力欄（テキスト）
  - 送信ボタン（「追加」など）
- **動作**:
  - フォーム送信時にonSubmitコールバックを呼び出す
  - 送信後は入力欄をクリア

### TodoFilter

- **役割**: TODOのフィルタリング
- **要素**: 3つのボタンまたはリンク
  - 「全て」
  - 「未完了」
  - 「完了済み」
- **動作**:
  - クリック時にonFilterChangeコールバックを呼び出す
  - 現在選択されているフィルターを視覚的に区別

### TodoList

- **役割**: TODO一覧の表示
- **要素**: TodoItemのリスト
- **動作**:
  - todos配列をmapして各TodoItemをレンダリング
  - 空の場合は適切なメッセージを表示

### TodoItem

- **役割**: 個別のTODOアイテム
- **要素**:
  - チェックボックス（完了状態）
  - タイトル（完了済みの場合は取り消し線など）
  - 削除ボタン
- **動作**:
  - チェックボックスクリック時にonToggleを呼び出す
  - 削除ボタンクリック時にonDeleteを呼び出す

## スタイリング

- シンプルで使いやすいデザイン
- 基本的なレスポンシブ対応
- アクセシビリティ配慮（aria-label等）

## 状態管理

useTodosフックを使用して以下の状態を管理：

- `todos`: 全てのTODOリスト
- `filter`: 現在のフィルター（'all' | 'active' | 'completed'）
- `filteredTodos`: フィルタリングされたTODOリスト
- `handleAddTodo`: TODO追加ハンドラー
- `handleToggleTodo`: 完了状態切り替えハンドラー
- `handleDeleteTodo`: 削除ハンドラー
- `handleFilterChange`: フィルター変更ハンドラー
