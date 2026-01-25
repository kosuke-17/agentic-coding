# 🛠️ Step 1: 環境セットアップ

## 目標

- Cursor プロジェクトを初期化する
- TDD 環境（Vitest）を構築する
- エージェントモードを有効にする

---

## 1.1 プロジェクトの確認

このハンズオンでは、既存のプロジェクト構造を活用します。
まず、challengeディレクトリが存在することを確認しましょう。

```bash
# プロジェクトルートで実行
ls -la handson/challenge/
```

## 1.2 課題ディレクトリの確認

課題は `handson/challenge/` ディレクトリに配置されています：

```
challenge/
├── src/
│   ├── logic/        # ロジック実装（一部実装済み）
│   └── ui/          # UIコンポーネント実装（スケルトンのみ）
├── test/
│   ├── logic/       # ロジックテスト（一部テストケースのみ）
│   └── ui/          # UIテスト（スケルトンのみ）
└── docs/            # ドキュメント
```

## 1.3 TDD 環境の確認

このプロジェクトでは **Vitest** を使用します。`package.json` に既に設定されています。

テストを実行するには：

```bash
# 全てのテストを実行
pnpm test

# challengeのテストを実行
pnpm test handson/challenge/test/

# 特定のファイルのみテスト
pnpm test handson/challenge/test/logic/todo.test.ts

# ウォッチモードで実行（変更を監視）
pnpm test --watch
```

---

## 1.4 Cursor のエージェントモードを有効にする

### Agent モードとは？

Cursor の Agent モードは、AI がより自律的にタスクを実行できるモードです。
ファイルの読み書き、ターミナルコマンドの実行、複数ファイルの編集などができます。

### Agent モードの有効化

1. Cursor でチャットパネルを開く（`Cmd/Ctrl + L`）
2. チャット入力欄の上部にある「Agent」タブを選択
3. または、チャット入力欄で `@agent` と入力

### 確認してみよう

エージェントに以下のように話しかけてみましょう：

```
handson/challenge/test ディレクトリの中身を確認して、
どんなファイルがあるか教えてください。
```

エージェントがディレクトリを読み取って回答してくれれば成功です！

---

## 1.5 Git ブランチの準備

ハンズオン用のブランチを作成しておくと、変更を管理しやすくなります：

```bash
# 現在のブランチを確認
git branch

# 必要に応じて新しいブランチを作成
git checkout -b handson/todo-app
```

---

## チェックリスト

以下が完了していることを確認してください：

- [ ] `handson/challenge` ディレクトリが存在する
- [ ] `pnpm test` コマンドが実行できる
- [ ] Cursor の Agent モードに切り替えられる

---

## 次のステップ

👉 [challenge/docs/README.md](./challenge/docs/README.md) に進んで、課題を開始しましょう！
