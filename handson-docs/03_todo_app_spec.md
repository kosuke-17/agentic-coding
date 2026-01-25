# 📋 Step 3: TODO アプリの仕様

## 目標

- TODO アプリの要件を理解する
- テストケースを洗い出す
- TDD で実装する準備をする

---

## 3.1 TODO アプリの概要

シンプルな TODO 管理機能を実装します。

このハンズオンでは、ロジックとUIの両方を実装します。
実装は `handson/challenge/` ディレクトリで行います。

UI仕様については、[challenge/docs/ui-spec.md](./challenge/docs/ui-spec.md) を参照してください。

---

## 3.2 機能一覧

### 基本機能

| 機能 | 説明 |
|------|------|
| TODO 追加 | 新しい TODO を追加する |
| TODO 完了切替 | TODO の完了/未完了を切り替える |
| TODO 削除 | TODO を削除する |
| TODO 一覧取得 | 全ての TODO を取得する |
| TODO フィルタリング | 状態（全て/未完了/完了済み）でフィルタする |

---

## 3.3 データ構造

### Todo 型

```typescript
interface Todo {
  id: string;          // ユニークな識別子
  title: string;       // TODO のタイトル
  completed: boolean;  // 完了状態
  createdAt: Date;     // 作成日時
}
```

### フィルター型

```typescript
type TodoFilter = 'all' | 'active' | 'completed';
```

---

## 3.4 テストケース一覧

### addTodo（TODO 追加）

| # | テストケース | 期待される結果 |
|---|-------------|---------------|
| 1 | タイトルを指定して TODO を追加 | 新しい TODO が作成される |
| 2 | 作成された TODO は未完了状態 | `completed` が `false` |
| 3 | 作成された TODO にはユニークな ID がある | `id` が存在する |
| 4 | 空のタイトルでは追加できない | エラーがスローされる |

### toggleTodo（完了切替）

| # | テストケース | 期待される結果 |
|---|-------------|---------------|
| 1 | 未完了の TODO を完了にする | `completed` が `true` になる |
| 2 | 完了済みの TODO を未完了にする | `completed` が `false` になる |
| 3 | 存在しない ID を指定 | エラーがスローされる |

### deleteTodo（TODO 削除）

| # | テストケース | 期待される結果 |
|---|-------------|---------------|
| 1 | TODO を削除する | 一覧から消える |
| 2 | 存在しない ID を指定 | エラーがスローされる |

### getTodos（一覧取得）

| # | テストケース | 期待される結果 |
|---|-------------|---------------|
| 1 | 全ての TODO を取得 | 登録された TODO 全てが返る |
| 2 | TODO がない場合 | 空配列が返る |

### filterTodos（フィルタリング）

| # | テストケース | 期待される結果 |
|---|-------------|---------------|
| 1 | 'all' でフィルタ | 全ての TODO が返る |
| 2 | 'active' でフィルタ | 未完了の TODO のみ返る |
| 3 | 'completed' でフィルタ | 完了済みの TODO のみ返る |

---

## 3.5 実装する関数

以下の関数を `handson/challenge/src/logic/todo.ts` に実装します：

```typescript
// TODO を追加する
function addTodo(todos: Todo[], title: string): Todo[]

// TODO の完了状態を切り替える
function toggleTodo(todos: Todo[], id: string): Todo[]

// TODO を削除する
function deleteTodo(todos: Todo[], id: string): Todo[]

// TODO をフィルタリングする
function filterTodos(todos: Todo[], filter: TodoFilter): Todo[]
```

### 設計のポイント

- **イミュータブル** - 元の配列を変更せず、新しい配列を返す
- **純粋関数** - 同じ入力に対して常に同じ出力を返す
- **エラーハンドリング** - 不正な入力にはエラーをスロー

---

## 3.6 実装の進め方

以下の順序で TDD を進めることを推奨します：

1. **型定義** - `Todo` と `TodoFilter` の型を定義
2. **addTodo** - TODO 追加機能
3. **toggleTodo** - 完了切替機能
4. **deleteTodo** - 削除機能
5. **filterTodos** - フィルタリング機能

---

## 3.7 Cursor エージェントへの依頼例

以下のようにエージェントに依頼すると効率的です：

```
03_todo_app_spec.md の仕様に基づいて、
TODO アプリのロジックを TDD スタイルで実装してください。

まず handson/challenge/test/logic/todo.test.ts にテストを書き、
次に handson/challenge/src/logic/todo.ts に実装を書いてください。

addTodo 関数から始めてください。
```

---

## チェックリスト

以下を確認してください：

- [ ] TODO アプリの要件を理解した
- [ ] 各関数のテストケースを把握した
- [ ] データ構造（`Todo` 型）を理解した
- [ ] 実装の進め方を理解した

---

## 次のステップ

👉 [04_agent_skills.md](./04_agent_skills.md) に進んで、エージェントを使って実際に実装しましょう！
