# ステップバイステップガイド

## Step 1: ロジックの実装（TDD）

### 1.1 addTodo関数の実装

1. `test/logic/todo.test.ts` の `addTodo` のテストケースを完成させる
2. テストを実行して失敗を確認（Red）
3. `src/logic/todo.ts` の `addTodo` 関数を実装
4. テストを実行して成功を確認（Green）
5. 必要に応じてリファクタリング（Refactor）

### 1.2 toggleTodo関数の実装

同様の手順で実装

### 1.3 deleteTodo関数の実装

同様の手順で実装

### 1.4 filterTodos関数の実装

同様の手順で実装

## Step 2: カスタムフックの実装

### 2.1 useTodosフック

1. `src/ui/hooks/use-todos.ts` を実装
2. 各ハンドラー関数でロジック関数を呼び出す
3. useStateとuseCallbackを適切に使用

## Step 3: UIコンポーネントの実装

### 3.1 TodoItemコンポーネント

1. `src/ui/todo-item.tsx` を実装
2. チェックボックス、タイトル、削除ボタンを配置
3. イベントハンドラーを実装

### 3.2 TodoListコンポーネント

1. `src/ui/todo-list.tsx` を実装
2. todos配列をmapしてTodoItemをレンダリング

### 3.3 TodoFormコンポーネント

1. `src/ui/todo-form.tsx` を実装
2. フォーム送信処理を実装

### 3.4 TodoFilterコンポーネント

1. `src/ui/todo-filter.tsx` を実装
2. フィルターボタンを実装

### 3.5 Appコンポーネント

1. `src/ui/app.tsx` を実装
2. useTodosフックを使用
3. 各コンポーネントを配置

## Step 4: テストの実装

### 4.1 UIテスト

1. `test/ui/app.test.tsx` を完成させる
2. `test/ui/todo-list.test.tsx` を完成させる
3. 必要に応じて他のコンポーネントのテストも追加

## Step 5: 動作確認

1. 全てのテストが通ることを確認
2. ブラウザで動作を確認（必要に応じて）

## トラブルシューティング

### テストが通らない

- エラーメッセージを確認
- 実装が仕様通りか確認
- テストの期待値が正しいか確認

### コンポーネントが表示されない

- インポートパスを確認
- コンポーネントのエクスポートを確認
- コンソールエラーを確認
