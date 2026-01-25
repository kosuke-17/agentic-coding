---
description: challengeディレクトリのテストを実行する
---

# Challengeテスト実行

handson/challenge ディレクトリのテストを実行します。

## 実行コマンド

```bash
# 全てのテストを実行
pnpm test handson/challenge/test/

# ロジックテストのみ
pnpm test handson/challenge/test/logic/

# UIテストのみ
pnpm test handson/challenge/test/ui/

# 特定のファイル
pnpm test handson/challenge/test/logic/todo.test.ts
```

## 報告フォーマット

### テスト結果サマリー

- ✅ 成功したテスト数
- ❌ 失敗したテスト数
- ⏭️ スキップされたテスト数

### 失敗したテストの詳細

各失敗したテストについて：
- テスト名
- エラーメッセージ
- 期待値と実際の値
- 修正の提案（可能な場合）

### カバレッジ情報

- カバーされている関数/コンポーネント
- カバーされていない関数/コンポーネント

## 実行後のアクション

失敗したテストがある場合：
1. エラーメッセージを分析
2. 原因を特定
3. 修正案を提示

全てのテストが成功した場合：
1. 次のステップを提案
2. リファクタリングの機会を指摘
