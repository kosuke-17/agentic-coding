import type { Todo } from '../logic/types';
import { TodoItem } from './todo-item';

/**
 * TODO一覧コンポーネント
 * 
 * @param todos - 表示するTODOの配列
 * @param onToggle - TODOの完了状態を切り替えるコールバック
 * @param onDelete - TODOを削除するコールバック
 * 
 * TODO: 実装してください
 */
interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoList({ todos, onToggle, onDelete }: TodoListProps) {
  // TODO: 実装してください
  // ヒント: todos配列をmapして、各TodoItemをレンダリング
  return (
    <ul>
      {/* TODO: TodoItemコンポーネントを使用して各TODOを表示 */}
    </ul>
  );
}
