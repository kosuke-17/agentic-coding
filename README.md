# 🎯 Cursor Agentic Coding ハンズオン

このプロジェクトは、**TDD（テスト駆動開発）を使った TODO アプリ開発**を通じて、Cursor の強力な AI エージェント機能を体験するハンズオンです。

## 📚 ハンズオンの構成

このハンズオンでは、**ロジック + UI** の実装を通じてTDDとCursorの機能を学びます。

- **handson/challenge/**: 課題（学習者が実装）
- **handson/answer/**: 完成版の解答例
- 所要時間: 約2〜3時間

## 🚀 クイックスタート

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. テストの実行

```bash
# 全てのテストを実行
pnpm test

# 特定のディレクトリのテストを実行
pnpm test handson/challenge/test/
pnpm test handson/answer/test/
```

### 3. 開発サーバーの起動

```bash
pnpm dev
```

## 📖 ハンズオンの進め方

#### Step 1: Challengeディレクトリの確認

- ディレクトリ構造を確認
- ドキュメントを読む

**参考**: [handson/challenge/docs/README.md](./handson/challenge/docs/README.md)

#### Step 2: ロジックの実装（TDD）

```
エージェントに依頼：
「handson/challenge/src/logic/todo.tsの
各関数を実装してください。TDDサイクルに従って進めてください」
```

**参考**: [handson/challenge/docs/step-by-step.md](./handson/challenge/docs/step-by-step.md)

#### Step 3: カスタムフックの実装

```
エージェントに依頼：
「handson/challenge/src/ui/hooks/use-todos.tsを実装してください」
```

#### Step 4: UIコンポーネントの実装（TDD）

同じ流れで以下を実装：
- `todo-item.tsx` - 個別TODOアイテム
- `todo-form.tsx` - TODO追加フォーム
- `todo-filter.tsx` - フィルタリング
- `todo-list.tsx` - TODO一覧
- `app.tsx` - メインアプリ

**参考**: [handson/challenge/docs/ui-spec.md](./handson/challenge/docs/ui-spec.md)

#### Step 5-6: UIテストの実装と動作確認

- UIテストを完成させる
- 全てのテストが通ることを確認
- 解答例と比較（`handson/answer/` ディレクトリ）

---

## 📁 ディレクトリ構成

```
handson/
├── challenge/        # 課題（学習者が実装）
│   ├── src/
│   │   ├── logic/   # ロジック実装
│   │   └── ui/      # UIコンポーネント実装
│   ├── test/
│   │   ├── logic/   # ロジックテスト
│   │   └── ui/      # UIテスト
│   └── docs/         # 課題用ドキュメント
└── answer/           # 完成版の解答例
    ├── src/
    ├── test/
    └── docs/
```

---

## 🎓 学習目標

このハンズオンを終えると、以下のことができるようになります：

1. **Agent Skills** - Cursor エージェントにタスクを効果的に依頼する方法
2. **Subagents** - 複雑なタスクを分担させる方法
3. **Rules** - プロジェクト固有のルールを設定してエージェントの振る舞いを制御する方法
4. **Commands** - 繰り返し使うワークフローをコマンド化する方法
5. **TDD** - テスト駆動開発の実践方法
6. **React Testing** - Reactコンポーネントのテスト方法

---

## 🆘 困ったときは

### エージェントに質問

```
「handson/challenge/src/ui/todo-item.tsxの実装で
エラーが出ています。原因を調査してください」
```

### 解答例を参考

- `handson/answer/` ディレクトリに完成版があります
- 実装に詰まったら参考にしてください

### ドキュメントを確認

- [handson/00_introduction.md](./handson/00_introduction.md) - ハンズオンの概要
- [handson/challenge/docs/step-by-step.md](./handson/challenge/docs/step-by-step.md) - ステップバイステップガイド
- [handson/answer/docs/implementation-notes.md](./handson/answer/docs/implementation-notes.md) - 実装のポイント解説

---

## 📚 参考資料

- [Cursor公式ドキュメント - Agent](https://docs.cursor.com/agent/overview)
- [Cursor公式ドキュメント - Rules](https://docs.cursor.com/context/rules)
- [Cursor公式ドキュメント - Commands](https://docs.cursor.com/agent/chat/commands)
- [Vitest公式ドキュメント](https://vitest.dev/)
- [React Testing Library公式ドキュメント](https://testing-library.com/react)

---

## 🛠️ 技術スタック

- **React** - UIライブラリ
- **TypeScript** - 型安全性
- **Vite** - ビルドツール
- **Vitest** - テストフレームワーク
- **React Testing Library** - UIテストライブラリ
- **Cursor** - AIエージェント統合開発環境
