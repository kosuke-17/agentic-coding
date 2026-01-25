/**
 * TODO アイテムの型定義
 */
export interface Todo {
  /** ユニークな識別子 */
  id: string;
  /** TODO のタイトル */
  title: string;
  /** 完了状態 */
  completed: boolean;
  /** 作成日時 */
  createdAt: Date;
}

/**
 * TODO フィルターの型定義
 * - 'all': 全ての TODO
 * - 'active': 未完了の TODO
 * - 'completed': 完了済みの TODO
 */
export type TodoFilter = 'all' | 'active' | 'completed';
