import type { TodoFilter } from '../logic/types';

/**
 * フィルタリングコンポーネント
 */
interface TodoFilterProps {
  currentFilter: TodoFilter;
  onFilterChange: (filter: TodoFilter) => void;
}

export function TodoFilter({ currentFilter, onFilterChange }: TodoFilterProps) {
  const filters: { value: TodoFilter; label: string }[] = [
    { value: 'all', label: '全て' },
    { value: 'active', label: '未完了' },
    { value: 'completed', label: '完了済み' },
  ];

  return (
    <div
      style={{
        display: 'flex',
        gap: '8px',
        padding: '16px',
        borderBottom: '1px solid #eee',
      }}
    >
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => onFilterChange(value)}
          style={{
            padding: '8px 16px',
            backgroundColor: currentFilter === value ? '#2196F3' : '#f0f0f0',
            color: currentFilter === value ? 'white' : '#000',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
          aria-label={`フィルター: ${label}`}
          aria-pressed={currentFilter === value}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
