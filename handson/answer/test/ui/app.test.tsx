import { render, screen } from '@testing-library/react';
import { App } from '../../src/ui/app';

describe('App コンポーネント', () => {
  it('TODOアプリのタイトルが表示される', () => {
    render(<App />);
    expect(screen.getByText('TODO App')).toBeInTheDocument();
  });

  it('TodoFormコンポーネントが表示される', () => {
    render(<App />);
    expect(screen.getByPlaceholderText('新しいTODOを入力...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '追加' })).toBeInTheDocument();
  });

  it('TodoFilterコンポーネントが表示される', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: /フィルター: 全て/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /フィルター: 未完了/ })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /フィルター: 完了済み/ })).toBeInTheDocument();
  });

  it('TodoListコンポーネントが表示される', () => {
    render(<App />);
    expect(screen.getByText('TODOがありません')).toBeInTheDocument();
  });
});
