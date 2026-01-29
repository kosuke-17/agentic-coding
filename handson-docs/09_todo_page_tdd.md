# 🎯 Step 9: TodoPage を TDD で実装する

## 目標

- `src/ui/todo-page.tsx` を TDD（テスト駆動開発）で最初から実装する
- Commands、Rules、Subagents、Skills を全て使用する
- Cursor エージェントが自動的に TDD サイクルを実行することを体験する

---

## 前提条件

- Cursor のエージェントモードが有効になっていること
- 既存の `src/ui/todo-page.tsx` は「答え」として存在しますが、このハンズオンでは参照しません
- 所要時間: 約30分

---

## 9.1 TodoPage の仕様

### コンポーネントの役割

`TodoPage` は、TODO アプリのメインコンポーネントです。以下の機能を提供します：

- TODO の追加フォームを表示
- フィルタリング機能（全て/未完了/完了済み）
- TODO 一覧の表示
- TODO の完了状態の切り替え
- TODO の削除

### 使用するコンポーネント

- `TodoForm` - TODO 追加フォーム（既存）
- `TodoFilter` - フィルタリング（既存）
- `TodoList` - TODO 一覧（既存）
- `useTodos` - TODO 管理カスタムフック（既存）

### テストケース

以下のテストケースを実装します：

| # | テストケース | 期待される結果 |
|---|-------------|---------------|
| 1 | コンポーネントがレンダリングされる | タイトル「TODO App」が表示される |
| 2 | TodoForm が表示される | フォームが表示される |
| 3 | TodoFilter が表示される | フィルターボタンが表示される |
| 4 | TodoList が表示される | リストが表示される |
| 5 | 空の状態でレンダリングされる | 「TODOがありません」が表示される |
| 6 | useTodos フックが呼び出される | フックが正しく使用される |

---

## 9.2 ハンズオンの進め方

### ステップ1: 🔴 Red フェーズ - テストの作成と失敗確認

#### 1-1. Commands の実行

Cursor のチャットで以下のコマンドを実行します：

```
/test-todo-page
```

このコマンドを実行すると、Cursor エージェントが自動的に以下を実行します：

1. **Rules の自動適用**: `src/**/*.tsx` 用の TDD ルールが自動適用される
2. **Subagents の起動**: 
   - TDD Test Writer がテストケースを作成
   - TDD Implementation Helper が実装を支援
3. **Skills の参照**: TDD React Component Skill が実装を支援

#### 1-2. テストファイルの作成

エージェントが `src/ui/todo-page.test.tsx` にテストを作成します。

#### 1-3. テストの実行と失敗確認

テストを実行して、失敗することを確認します：

```bash
pnpm test src/ui/todo-page.test.tsx
```

**期待される結果**: テストが失敗する（まだ実装がないため）

---

### ステップ2: 🟢 Green フェーズ - 実装と成功確認

#### 2-1. 実装の作成

エージェントが `src/ui/todo-page.tsx` に実装を作成します。

既存の実装（答え）は参照せず、テストが通る最小限のコードを実装します。

#### 2-2. テストの実行と成功確認

テストを再実行して、成功することを確認します：

```bash
pnpm test src/ui/todo-page.test.tsx
```

**期待される結果**: 全てのテストが成功する

---

### ステップ3: 🔵 Refactor フェーズ - コード改善

#### 3-1. コードの改善

エージェントがコードを改善します：

- 重複の排除
- 変数名の改善
- JSDoc コメントの追加
- アクセシビリティの向上

#### 3-2. テストの再実行

テストを再実行して、引き続き成功することを確認します：

```bash
pnpm test src/ui/todo-page.test.tsx
```

**期待される結果**: 全てのテストが引き続き成功する

---

### ステップ4: Commands、Rules、Subagents、Skills の動作確認

#### 4-1. Commands の確認

`/test-todo-page` コマンドがどのように動作したか確認します。

コマンドファイル: `.cursor/commands/test-todo-page.md`

#### 4-2. Rules の確認

`src/**/*.tsx` を編集する際に、どのルールが自動適用されたか確認します。

ルールファイル:
- `.cursor/rules/src-tdd.mdc` - TDD ルール
- `.cursor/rules/src-ui-testing.mdc` - UI テストルール

#### 4-3. Subagents の確認

エージェントがどのように Subagents を使用したか確認します。

Subagent ファイル:
- `.cursor/subagents/tdd-test-writer.md` - テスト作成専用
- `.cursor/subagents/tdd-implementation-helper.md` - 実装支援専用

#### 4-4. Skills の確認

エージェントがどのように Skills を参照したか確認します。

Skill ファイル:
- `.cursor/skills/tdd-react-component/SKILL.md` - React コンポーネントの TDD 実装

---

## 9.3 実装のポイント

### TDD サイクル

必ず以下の順序で実装します：

1. **🔴 Red** - テストを書く → テストが失敗することを確認
2. **🟢 Green** - 実装を書く → テストが成功することを確認
3. **🔵 Refactor** - コードを改善 → テストが引き続き成功することを確認

### 既存実装の扱い

- 既存の `src/ui/todo-page.tsx` は「答え」として存在します
- ハンズオンでは既存実装を参照せず、最初から実装します
- 実装が完了したら、既存実装と比較して学習できます

### エージェントへの依頼

エージェントは自動的に以下を実行します：

- テストケースの洗い出し
- テストコードの作成
- 実装コードの作成
- リファクタリングの提案

---

## 9.4 チェックリスト

以下が完了していることを確認してください：

- [ ] `/test-todo-page` コマンドを実行した
- [ ] `src/ui/todo-page.test.tsx` が作成された
- [ ] テストが失敗することを確認した（Red フェーズ）
- [ ] `src/ui/todo-page.tsx` が実装された
- [ ] テストが成功することを確認した（Green フェーズ）
- [ ] コードが改善された（Refactor フェーズ）
- [ ] テストが引き続き成功することを確認した
- [ ] Commands、Rules、Subagents、Skills の動作を確認した

---

## 9.5 学習のポイント

### Subagents と Skills の自動使用

このハンズオンでは、エージェントが自動的に以下を使用します：

- **Subagents**: タスクを分担して効率的に処理
- **Skills**: TDD に特化した知識と操作

エージェントがどのようにこれらを使用したか、チャットの履歴を確認してみましょう。

### TDD サイクルの実践

Red → Green → Refactor のサイクルを実践することで、以下を学びます：

- テストファーストの開発手法
- テストが実装を導く設計
- リファクタリングの安全性

---

## 9.6 トラブルシューティング

### テストが失敗しない場合

既存の実装が存在する可能性があります。`src/ui/todo-page.tsx` を一時的に削除またはリネームしてから、テストを作成してください。

### エージェントが Subagents や Skills を使用しない場合

コマンドファイル（`.cursor/commands/test-todo-page.md`）を確認し、明示的に Subagents と Skills の使用を指示しているか確認してください。

### Rules が適用されない場合

ルールファイルの `globs` 設定を確認してください。`src/**/*.tsx` が正しく設定されているか確認します。

---

## 次のステップ

このハンズオンで学んだことを活かして、他のコンポーネントも TDD で実装してみましょう！

👉 [08_practice_tasks.md](./08_practice_tasks.md) に進んで、実践タスクに挑戦しましょう！
