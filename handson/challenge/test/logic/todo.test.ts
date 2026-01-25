import { addTodo, toggleTodo, deleteTodo, filterTodos } from '../../src/logic/todo';
import type { Todo } from '../../src/logic/types';

describe('TODO アプリ - ロジック', () => {
  let todos: Todo[];

  beforeEach(() => {
    todos = [];
  });

  describe('addTodo', () => {
    describe('正常系', () => {
      it('タイトルを指定して TODO を追加できる', () => {
        // TODO: テストを実装してください
        // ヒント: addTodoを呼び出して、結果を検証
      });

      it('作成された TODO は未完了状態である', () => {
        // TODO: テストを実装してください
      });

      it('作成された TODO にはユニークな ID がある', () => {
        // TODO: テストを実装してください
      });
    });

    describe('異常系', () => {
      it('空のタイトルではエラーがスローされる', () => {
        // TODO: テストを実装してください
        // ヒント: expect(() => addTodo(todos, '')).toThrow(...)
      });

      it('空白のみのタイトルではエラーがスローされる', () => {
        // TODO: テストを実装してください
      });
    });
  });

  describe('toggleTodo', () => {
    beforeEach(() => {
      todos = addTodo([], 'Test todo');
    });

    describe('正常系', () => {
      it('未完了の TODO を完了にできる', () => {
        // TODO: テストを実装してください
      });

      it('完了済みの TODO を未完了にできる', () => {
        // TODO: テストを実装してください
      });
    });

    describe('異常系', () => {
      it('存在しない ID を指定するとエラーがスローされる', () => {
        // TODO: テストを実装してください
      });
    });
  });

  describe('deleteTodo', () => {
    beforeEach(() => {
      todos = addTodo([], 'Test todo');
    });

    describe('正常系', () => {
      it('TODO を削除できる', () => {
        // TODO: テストを実装してください
      });
    });

    describe('異常系', () => {
      it('存在しない ID を指定するとエラーがスローされる', () => {
        // TODO: テストを実装してください
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
        // TODO: テストを実装してください
      });

      it("'active' で未完了の TODO のみ取得できる", () => {
        // TODO: テストを実装してください
      });

      it("'completed' で完了済みの TODO のみ取得できる", () => {
        // TODO: テストを実装してください
      });
    });
  });
});
