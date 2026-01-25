import type { TodoFilter } from '../logic/types';

/**
 * フィルタリングコンポーネント
 * 
 * @param currentFilter - 現在選択されているフィルター
 * @param onFilterChange - フィルター変更時のコールバック
 * 
 * TODO: 実装してください
 */
interface TodoFilterProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  // TODO: 実装してください
  // ヒント:
  // 1. 3つのボタンまたはリンク（全て/未完了/完了済み）
  // 2. 現在選択されているフィルターをハイライト
  // 3. クリック時にonFilterChangeを呼び出す
  return (
    <div>
      {/* TODO: フィルターボタンを配置 */}
    </div>
  );
}
