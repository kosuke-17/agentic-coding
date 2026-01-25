import { useState } from 'react';

/**
 * TODO追加フォームコンポーネント
 * 
 * @param onSubmit - TODO追加時のコールバック（タイトルを受け取る）
 * 
 * TODO: 実装してください
 */
interface TodoFormProps {
  onSubmit: (title: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  // TODO: 実装してください
  // ヒント:
  // 1. useStateで入力値を管理
  // 2. フォーム送信時にonSubmitを呼び出す
  // 3. 送信後は入力欄をクリア
  const [title, setTitle] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 実装してください
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* TODO: 入力欄と送信ボタンを配置 */}
    </form>
  );
}
