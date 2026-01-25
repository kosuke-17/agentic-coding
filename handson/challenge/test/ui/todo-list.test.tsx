import { render, screen } from '@testing-library/react';
import { TodoList } from '../../src/ui/todo-list';
import type { Todo } from '../../src/logic/types';

describe('TodoList コンポーネント', () => {
  const mockTodos: Todo[] = [
    {
      id: '1',
      title: 'Test todo 1',
      completed: false,
      createdAt: new Date(),
    },
    {
      id: '2',
      title: 'Test todo 2',
      completed: true,
      createdAt: new Date(),
    },
  ];

  it('TODOリストが表示される', () => {
    // TODO: テストを実装してください
    // ヒント: render(<TodoList todos={mockTodos} onToggle={...} onDelete={...} />)
  });

  it('onToggleが呼び出される', () => {
    // TODO: テストを実装してください
    // ヒント: jest.fn()でモック関数を作成し、クリックイベントをシミュレート
  });

  it('onDeleteが呼び出される', () => {
    // TODO: テストを実装してください
  });
});
