# 🤖 Step 4: Agent Skills の活用

## 目標

- Cursor エージェントにタスクを効果的に依頼する方法を学ぶ
- エージェントを使って TODO アプリを TDD で実装する

---

## 4.1 Agent Skills とは？

Cursor の Agent Skills は、AI エージェントに対してタスクを依頼するためのスキルです。
エージェントは以下のことができます：

- **ファイルの読み書き** - コードの作成、編集
- **ターミナルコマンドの実行** - テスト実行、ビルドなど
- **複数ファイルの一括編集** - リファクタリング、機能追加
- **コンテキストの理解** - プロジェクト全体を把握した上での提案

---

## 4.2 効果的な依頼の仕方

### ❌ 悪い例

```
TODO アプリ作って
```

### ✅ 良い例

```
03_todo_app_spec.md の仕様に基づいて、
addTodo 関数のテストと実装を TDD で作成してください。

1. まず handson/challenge/test/logic/todo.test.ts にテストを書く
2. テストが失敗することを確認
3. handson/challenge/src/logic/todo.ts に実装を書く
4. テストが成功することを確認

テストケース:
- タイトルを指定して TODO を追加できる
- 作成された TODO は未完了状態
- ユニークな ID が付与される
- 空のタイトルではエラー
```

### 効果的な依頼のポイント

1. **具体的なファイルパスを指定** - どこに何を作るか明確に
2. **参照すべきドキュメントを指定** - `@` で参照
3. **ステップを明確に** - 順序立てて説明
4. **期待する結果を明示** - テストケースを列挙

---

## 4.3 実践: addTodo を実装する

### Step 1: テストを作成

エージェントに以下を依頼します：

```
@handson/03_todo_app_spec.md を参照して、
addTodo 関数のテストを handson/challenge/test/logic/todo.test.ts に作成してください。

以下のテストケースをカバーしてください：
- タイトルを指定して TODO を追加できる
- 作成された TODO は未完了状態（completed: false）
- 作成された TODO にはユニークな ID がある
- 空のタイトルではエラーがスローされる
```

### Step 2: テストの失敗を確認

エージェントに依頼：

```
handson/challenge/test/logic/todo.test.ts のテストを実行して、
失敗することを確認してください。
```

### Step 3: 実装を作成

エージェントに依頼：

```
handson/challenge/src/logic/todo.ts に addTodo 関数を実装して、
テストが通るようにしてください。
```

### Step 4: テストの成功を確認

エージェントに依頼：

```
テストを再実行して、全て成功することを確認してください。
```

---

## 4.4 UI実装の例

ロジック実装が完了したら、UIコンポーネントの実装に進みます。

### UIコンポーネントの実装

```
handson/challenge/src/ui/todo-form.tsx を TDD で実装してください。

1. まず test/ui/todo-form.test.tsx にテストを書く
2. テストが失敗することを確認
3. todo-form.tsx に実装を書く
4. テストが成功することを確認

テストケース:
- 入力欄が表示される
- 送信ボタンが表示される
- フォーム送信時にonSubmitが呼び出される
- 送信後は入力欄がクリアされる
```

### カスタムフックの実装

```
handson/challenge/src/ui/hooks/use-todos.ts を実装してください。

このフックは以下の機能を提供します：
- todos: 現在のTODOリスト
- filter: 現在のフィルター
- filteredTodos: フィルタリングされたTODOリスト
- handleAddTodo: TODO追加
- handleToggleTodo: TODO完了状態切り替え
- handleDeleteTodo: TODO削除
- handleFilterChange: フィルター変更
```

## 4.5 実践: 残りの関数を実装する

同じ流れで、以下の関数も実装しましょう：

### toggleTodo

```
@handson/03_todo_app_spec.md を参照して、
toggleTodo 関数のテストと実装を TDD で作成してください。

handson/challenge/test/logic/todo.test.ts にテストを追加し、
handson/challenge/src/logic/todo.ts に実装を追加してください。

テストケース：
- 未完了の TODO を完了にできる
- 完了済みの TODO を未完了にできる
- 存在しない ID を指定するとエラー
```

### deleteTodo

```
@handson/03_todo_app_spec.md を参照して、
deleteTodo 関数のテストと実装を TDD で作成してください。

handson/challenge/test/logic/todo.test.ts にテストを追加し、
handson/challenge/src/logic/todo.ts に実装を追加してください。

テストケース：
- TODO を削除できる
- 存在しない ID を指定するとエラー
```

### filterTodos

```
@handson/03_todo_app_spec.md を参照して、
filterTodos 関数のテストと実装を TDD で作成してください。

handson/challenge/test/logic/todo.test.ts にテストを追加し、
handson/challenge/src/logic/todo.ts に実装を追加してください。

テストケース：
- 'all' で全ての TODO を取得
- 'active' で未完了の TODO のみ取得
- 'completed' で完了済みの TODO のみ取得
```

---

## 4.5 エージェントの出力を検証する

エージェントが作成したコードは必ず検証しましょう：

### 確認ポイント

1. **テストが通るか** - `pnpm test handson/challenge/test/logic/todo.test.ts`
2. **型エラーがないか** - `pnpm tsc --noEmit`
3. **仕様通りか** - 期待した動作になっているか
4. **コードの品質** - 可読性、保守性は十分か

### 問題があった場合

エージェントに修正を依頼：

```
handson/challenge/src/logic/todo.ts の addTodo 関数ですが、
以下の問題があります：

- [具体的な問題点]

修正してください。
```

---

## 4.6 Tips: エージェントを最大限活用する

### @記法でファイルを参照

```
@handson/challenge/src/logic/todo.ts を見て、
このコードの問題点を指摘してください。
```

### 複数ファイルを一度に処理

```
handson/challenge/src/logic/ 内の全ての関数に JSDoc コメントを追加してください。
```

### テスト実行と修正を一括で

```
テストを実行して、失敗したテストがあれば
実装を修正して全て成功するようにしてください。
```

---

## チェックリスト

以下が完了していることを確認してください：

- [ ] addTodo のテストと実装ができた
- [ ] toggleTodo のテストと実装ができた
- [ ] deleteTodo のテストと実装ができた
- [ ] filterTodos のテストと実装ができた
- [ ] 全てのテストが成功している

---

## 次のステップ

👉 [05_subagents.md](./05_subagents.md) に進んで、サブエージェントの活用方法を学びましょう！
