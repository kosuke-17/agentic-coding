import { addTodo, toggleTodo, deleteTodo, filterTodos } from '../src/todo';
import type { Todo } from '../src/types';

describe('TODO アプリ', () => {
  let todos: Todo[];

  beforeEach(() => {
    todos = [];
  });

  describe('addTodo', () => {
    describe('正常系', () => {
      it('タイトルを指定して TODO を追加できる', () => {
        const result = addTodo(todos, 'Buy milk');

        expect(result).toHaveLength(1);
        expect(result[0].title).toBe('Buy milk');
      });

      it('作成された TODO は未完了状態である', () => {
        const result = addTodo(todos, 'Buy milk');

        expect(result[0].completed).toBe(false);
      });

      it('作成された TODO にはユニークな ID がある', () => {
        const result1 = addTodo(todos, 'Buy milk');
        const result2 = addTodo(result1, 'Buy bread');

        expect(result2[0].id).toBeDefined();
        expect(result2[1].id).toBeDefined();
        expect(result2[0].id).not.toBe(result2[1].id);
      });

      it('作成された TODO には作成日時がある', () => {
        const result = addTodo(todos, 'Buy milk');

        expect(result[0].createdAt).toBeInstanceOf(Date);
      });

      it('タイトルの前後の空白がトリムされる', () => {
        const result = addTodo(todos, '  Buy milk  ');

        expect(result[0].title).toBe('Buy milk');
      });
    });

    describe('異常系', () => {
      it('空のタイトルではエラーがスローされる', () => {
        expect(() => addTodo(todos, '')).toThrow('Title cannot be empty');
      });

      it('空白のみのタイトルではエラーがスローされる', () => {
        expect(() => addTodo(todos, '   ')).toThrow('Title cannot be empty');
      });
    });
  });

  describe('toggleTodo', () => {
    beforeEach(() => {
      todos = addTodo([], 'Test todo');
    });

    describe('正常系', () => {
      it('未完了の TODO を完了にできる', () => {
        const id = todos[0].id;
        const result = toggleTodo(todos, id);

        expect(result[0].completed).toBe(true);
      });

      it('完了済みの TODO を未完了にできる', () => {
        const id = todos[0].id;
        const toggled = toggleTodo(todos, id);
        const result = toggleTodo(toggled, id);

        expect(result[0].completed).toBe(false);
      });

      it('他の TODO は変更されない', () => {
        todos = addTodo(todos, 'Second todo');
        const id = todos[0].id;
        const result = toggleTodo(todos, id);

        expect(result[1].completed).toBe(false);
      });
    });

    describe('異常系', () => {
      it('存在しない ID を指定するとエラーがスローされる', () => {
        expect(() => toggleTodo(todos, 'non-existent-id')).toThrow(
          'Todo with id "non-existent-id" not found'
        );
      });
    });
  });

  describe('deleteTodo', () => {
    beforeEach(() => {
      todos = addTodo([], 'Test todo');
    });

    describe('正常系', () => {
      it('TODO を削除できる', () => {
        const id = todos[0].id;
        const result = deleteTodo(todos, id);

        expect(result).toHaveLength(0);
      });

      it('他の TODO は残る', () => {
        todos = addTodo(todos, 'Second todo');
        const id = todos[0].id;
        const result = deleteTodo(todos, id);

        expect(result).toHaveLength(1);
        expect(result[0].title).toBe('Second todo');
      });
    });

    describe('異常系', () => {
      it('存在しない ID を指定するとエラーがスローされる', () => {
        expect(() => deleteTodo(todos, 'non-existent-id')).toThrow(
          'Todo with id "non-existent-id" not found'
        );
      });
    });
  });

  describe('filterTodos', () => {
    beforeEach(() => {
      todos = addTodo([], 'Active todo 1');
      todos = addTodo(todos, 'Active todo 2');
      todos = addTodo(todos, 'Completed todo');
      todos = toggleTodo(todos, todos[2].id);
    });

    describe('正常系', () => {
      it("'all' で全ての TODO を取得できる", () => {
        const result = filterTodos(todos, 'all');

        expect(result).toHaveLength(3);
      });

      it("'active' で未完了の TODO のみ取得できる", () => {
        const result = filterTodos(todos, 'active');

        expect(result).toHaveLength(2);
        expect(result.every((todo) => !todo.completed)).toBe(true);
      });

      it("'completed' で完了済みの TODO のみ取得できる", () => {
        const result = filterTodos(todos, 'completed');

        expect(result).toHaveLength(1);
        expect(result.every((todo) => todo.completed)).toBe(true);
      });

      it('空配列の場合は空配列を返す', () => {
        const result = filterTodos([], 'all');

        expect(result).toHaveLength(0);
      });
    });
  });
});
