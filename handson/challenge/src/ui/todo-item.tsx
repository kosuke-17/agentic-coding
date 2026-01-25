import type { Todo } from '../logic/types';

/**
 * 個別TODOアイテムコンポーネント
 * 
 * @param todo - 表示するTODOアイテム
 * @param onToggle - TODOの完了状態を切り替えるコールバック
 * @param onDelete - TODOを削除するコールバック
 * 
 * TODO: 実装してください
 */
interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  // TODO: 実装してください
  // ヒント:
  // 1. チェックボックス（完了状態の切り替え）
  // 2. TODOのタイトル（完了済みの場合は取り消し線など）
  // 3. 削除ボタン
  return (
    <li>
      {/* TODO: チェックボックス、タイトル、削除ボタンを配置 */}
    </li>
  );
}
