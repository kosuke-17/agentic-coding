# Challenge: TODOアプリの実装

## 概要

このチャレンジでは、TDD（テスト駆動開発）を使ってTODOアプリのロジックとUIを実装します。

## ディレクトリ構造

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

## 実装の進め方

### Step 1: ロジックの実装

1. `src/logic/todo.ts` の各関数を実装
2. `test/logic/todo.test.ts` のテストケースを完成させる
3. テストが全て通ることを確認

### Step 2: UIコンポーネントの実装

1. `src/ui/hooks/use-todos.ts` を実装
2. 各UIコンポーネントを実装
   - `todo-form.tsx` - TODO追加フォーム
   - `todo-filter.tsx` - フィルタリング
   - `todo-item.tsx` - 個別TODOアイテム
   - `todo-list.tsx` - TODO一覧
   - `app.tsx` - メインアプリ
3. `test/ui/` のテストを完成させる

### Step 3: 動作確認

1. 全てのテストが通ることを確認
2. ブラウザで動作を確認（必要に応じて）

## 参考資料

- [UI仕様書](./ui-spec.md)
- [ステップバイステップガイド](./step-by-step.md)
- [解答例](../../answer/docs/README.md) - 実装に詰まったら参考にしてください

## ヒント

- TDDのサイクル（Red → Green → Refactor）を意識してください
- まずテストを書いて、それから実装を進めましょう
- 小さなステップで進めることをお勧めします
